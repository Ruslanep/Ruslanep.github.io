(function(){
    'use strict';

    var btnScrollDown = document.querySelector('.button-slide-down');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      
      (function scroll() {
        if (window.pageYOffset < windowCoords-1) {
          window.scrollBy(0, 15);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);


   

    
})();




