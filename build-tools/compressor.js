const path = require('path');
const fs = require('fs');
const glob = require('glob-promise');
const zopfli = require('@gfx/zopfli');
const pQueue = require('p-queue');
const comsiconfig = require('cosmiconfig');
const chalk = require('chalk');
const brotliAdapter = require('parcel-plugin-compress/brotliAdapter');
const { table, sortResults, formatResults } = require('parcel-plugin-compress/formatter');

const brotli = brotliAdapter();
const defaultOptions = {
	test: new RegExp('(.js|.css)'),
	threshold: undefined,
	gzip: {
		enabled: true,
		numiterations: 15,
		blocksplitting: true,
		blocksplittinglast: false,
		blocksplittingmax: 15,
	},
	brotli: {
		enabled: true,
		mode: 0,
		quality: 11,
		lgwin: 22,
		lgblock: 0,
		enable_dictionary: true,
		enable_transforms: false,
		greedy_block_split: false,
		enable_context_modeling: false,
	}
};

let output = [];

module.exports = async () => {
	const start = new Date().getTime();
	console.log(chalk.bold('\n🗜️  Compressing bundled files...\n'));

	try {
		const explorer = comsiconfig('compress');
		const { config: { gzip, brotli, test, threshold } } = (await explorer.search()) || { config: defaultOptions }
		const dir = './build';
		const inputGlob = path.join(dir, '/**/!(*.gz|*.br|)');
		const files = await glob(inputGlob);
		const fileTest = new RegExp(test)
		const filesToCompress = files.filter((file) => {
			if (!file.startsWith('build/static/')){
				return fileTest.test(file)
			}
		})


		const queue = new pQueue({ concurrency: 2 });

		filesToCompress.forEach(file => {
			queue.add(() => zopfliCompress(file, { ...defaultOptions.gzip, threshold, ...gzip  }));
			queue.add(() => brotliCompress(file, { ...defaultOptions.brotli, threshold, ...brotli }));
		});

		await queue.onIdle();

		const end = new Date().getTime();
		const formattedOutput = output.sort(sortResults).map(formatResults);

		console.log(chalk.bold.green(`\n✨  Compressed in ${((end - start) / 1000).toFixed(2)}s.\n`));

		table(formattedOutput);
	} catch (err) {
		console.error(chalk.bold.red('❌  Compression error:\n'), err);
	}

	function zopfliCompress(file, config) {
		if (!config.enabled) {
			return Promise.resolve();
		}

		const stat = fs.statSync(file);
		const start = new Date().getTime();

		if (!stat.isFile()) {
			return Promise.resolve();
		}

		if (config.threshold && stat.size < config.threshold) {
			return Promise.resolve();
		}

		return new Promise((resolve, reject) => {
			fs.readFile(file, function(err, content) {
				if (err) { return reject(err); }

				zopfli.gzip(content, config, function(err, compressedContent) {
					if (err) { return reject(err); }

					if (stat.size > compressedContent.length) {
						const fileName = file + '.gz';

						fs.writeFile(fileName, compressedContent, () => {
							const end = new Date().getTime();

							output.push({ size: compressedContent.length, file: fileName, time: end - start });

							return resolve();
						});
					} else {
						resolve();
					}
				});
			});
		});
	}

	function brotliCompress(file, config) {
		if (!config.enabled) {
			return Promise.resolve();
		}

		const stat = fs.statSync(file);
		const start = new Date().getTime();

		if (!stat.isFile()) {
			return Promise.resolve();
		}

		if (config.threshold && stat.size < config.threshold) {
			return Promise.resolve();
		}

		return new Promise((resolve, reject) => {
			fs.readFile(file, (err, content) => {
				if (err) { return reject(err); }

				const compressedContent = brotli.compress(content, config);

				if (compressedContent !== null && stat.size > compressedContent.length) {
					const fileName = file + '.br';

					fs.writeFile(fileName, compressedContent, () => {
						const end = new Date().getTime();

						output.push({ size: compressedContent.length, file: fileName, time: end - start });

						return resolve();
					});
				} else {
					resolve();
				}
			});
		});
	}
};




