(function($) {
  "use strict"; // Start of use strict

  // No JS

  // $("body > video").removeAttr('preload');
  // $("body > video")[0].play();

  $(window).resize(function() {
    if(window.innerWidth >=768){
      $("body > video").get(0).play();
    }else{
      $("body > video").get(0).pause();
    }

  }).resize();

})(jQuery); // End of use strict
