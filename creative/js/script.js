(function(){
    'use strict';

    var btnScrollDown = document.querySelector('.scroll_down');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      
      (function scroll() {
        if (window.pageYOffset < windowCoords-0.7) {
          window.scrollBy(0, 10);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);


    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            document.querySelector(".fixed-top-scroller").style.display = "block";
        } else {
            document.querySelector(".fixed-top-scroller").style.display = "none";
        }
    }
    
    var topScroller = document.querySelector(".fixed-top-scroller");
    
    topScroller.addEventListener("click", topFunction);

    function topFunction() {
        if(!document.documentElement.scrollTop == 0 || !document.body.scrollTop == 0) {
             window.scrollBy(0, -50);
             setTimeout(topFunction, 0);
            }

    }

    
})();




