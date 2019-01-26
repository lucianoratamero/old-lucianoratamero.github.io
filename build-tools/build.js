const Bundler = require('parcel-bundler');
import compress from './compressor';

// Localização do arquivo como único entrypoint:
const entryFiles = ['./build/js/main.js', './build/scss/main.css'];
// Ou: múltiplos arquivos como globbing (também pode ser como .js)
// const entryFiles = './src/*.js';
// Ou: múltiplos arquivos em um array
// const entryFiles = ['./src/index.html', './some/other/directory/scripts.js'];

// Opções do bundler
const options = {
  outDir: './build', // O diretório de saída para construir os arquivos, dist é o padrão.
  publicUrl: './', // A URL onde o servidor será servido, dist é o padrão.
  watch: false, // whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: false, // Habilita ou desabilita o cache, true é o padrão.
  contentHash: false, // Desabilita o hash de conteúdo de ser incluído no nome do arquivo.
  minify: true, // Minifica o arquivo, habilitado se process.env.NODE_ENV === 'production'.
  scopeHoist: true, // Torna ligado a flag de scope hoisting/tree shaking experimental, para pequenas builds de produção.
  target: 'browser', // browser/node/electron, browser é o padrão.
  logLevel: 3, // 3 = irá loggar tudo, 2 = irá loggar avisos e erros, 1 = irá loggar erros.
  sourceMaps: false, // Habilita ou desabilita sourcemaps, habilitado é o padrão (builds minificadas atualmente sempre criam sourcemaps).
  detailedReport: false // Exibe um report detalhado dos bundles, assets, tamanho de arquivos e tempos, false é o padrão, os reports são exibidos somente se o watch estiver desabilidado.
};

async function runBundle() {
  // Inicializa o bundler utilizando a localização do entrypoint e as configurações especificadas.
  var bundler = new Bundler(entryFiles, options);

  // Executa o bundler, isto retorna o bundle principal
  // Utiliza os eventos, se você estiver com o modo watch essa promise será disparada uma única vez e não a cada rebuild
  const bundle = await bundler.bundle();
  await compress();
}

runBundle();
