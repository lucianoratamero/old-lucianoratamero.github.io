(function() {

  'use strict';

  var fullpageConfig = {
    css3: true,
    slidesNavigation: true,
    controlArrows: false,
    verticalCentered: true,
    scrollingSpeed: 400,
    responsiveWidth: 1920
  };

  var getShownSubsections = function(){
    return $('.subsection').filter(function(){
      return $(this).css('opacity') == 1;
    });
  }

  var showSubsection = function(id){
    var shownSubsections = getShownSubsections();

    if (id && id != shownSubsections[0]) {
      hideSubsections(shownSubsections);
      $(id).slideDown(400, function(){
        $(this).animate({'opacity': 1});
      });
    }
  }

  var hideSubsections = function(){
    getShownSubsections().css('opacity', 0).slideToggle();
  }

  var goToBlog = function() {
    if (location.href.endsWith("/blog/")) {
      return;
    }
    $('#main-content').hide();
    showSubsection('#loading');
    setTimeout(function(){
      sessionStorage.from = location.href;
      window.location = '/blog';
    }, 1200);
  }

  var initializePage = function(){
    $('#index, #loading').fullpage(fullpageConfig);
    $('#index, #loading').fullpage.setResponsive(true); // firefox, you crazy bastard
    $('#font-awesome-loader').hide();
    hljs.initHighlightingOnLoad();
    Tippy('.tip');
  }

  var goToSubsections = function(subsectionName){
    subsectionName = subsectionName || '';
    if (location.href.includes("/blog")) {
      initializePage();
      $('#loading').fadeIn();
      setTimeout(function(){
        window.location = '/' + subsectionName;
      }, 800);
    } else if (!subsectionName) {
      hideSubsections();
    } else {
      showSubsection('#' + subsectionName);
    }
  }

  $(document).ready(function(){

    initializePage();

    var from = sessionStorage.from;
    var redirect = sessionStorage.redirect;
    delete sessionStorage.from;
    delete sessionStorage.redirect;

    if (location.href.includes("/blog")) {
      var from = sessionStorage.from;
      $('#loading').show();
    } else if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }

    $(window).load(function(){
      $('#loading').hide();
      $('#index, #blog').animate({'opacity': 1});
    });

    page('/', function(){
      goToSubsections();
    });

    page('/about', function(){
      goToSubsections('about');
    });

    page('/blog', function(){
      goToBlog();
    });

    page('/social', function(){
      goToSubsections('social');
    });

    page('/talks', function(){
      goToSubsections('talks');
    });

    page();

  });

  // firefox, you crazy bastard
  window.onunload = function(e){
    e.preventDefault();
  };
})();
