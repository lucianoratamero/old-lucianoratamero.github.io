
  var searchFromFeedUseCase = function(searchText) {
    var xml = getFeedXml();
    var searchResults = searchFromXml(xml, searchText);
    buildSearchResults(searchResults);
  }

  var getFeedXml = function(){
    if (localStorage['feedXml']) {
      return $.parseXML(localStorage['feedXml']);
    } else {
      var feedRequest = new XMLHttpRequest();

      feedRequest.onreadystatechange = function(){
        if (feedRequest.readyState == 4 && feedRequest.status == 200) {
          localStorage['feedXml'] = feedRequest.responseText;
          return $.parseXML(feedRequest.responseText);
        }
      }

      feedRequest.open('GET', feedUrl, false);
      feedRequest.send();
    }
  }

  var searchFromXml = function(xml, searchText){
    var searchRegex = new RegExp(searchText, "i");
    var entries = $(xml).find('entry');
    var results = [];

    $.each(entries, function(){
      var fullContent = $(this).find('content').text();

      if (fullContent.match(searchRegex)){
        var contentUrl = $(this).attr('xml:base');
        var splittedContent = fullContent.split('\n');
        var resultContent = splittedContent[0] + splittedContent[1] + splittedContent[2];
        var filteredResultContent = removeCoverImages(resultContent);
        results.push({
          'title': $(this).find('title').text(),
          'url': contentUrl,
          'content': filteredResultContent
        });
      }
    });

    return results;
  }

  var removeCoverImages = function(htmlString){
    var regex = new RegExp(/<div class="image-wrapper">(.*?)<\/div>/);
    return htmlString.replace(regex, "");
  }

  var buildSearchResults = function(results){
    var resultsHtml = '';
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      resultsHtml += '\
        <div class="search-result">\
          <a href="' + result.url + '" target="_blank">\
            <h3>' + result.title + '</h3>\
          </a>'
          + result.content +
        '</div>'
    }
    if (!!resultsHtml) {
      searchResultsSection.html(resultsHtml);
    } else {
      searchResultsSection.html('<h3 class="text-center">Não houve resultados para essa busca.</h3>');
    }
  }