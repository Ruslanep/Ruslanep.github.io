(function(){
    'use strict';

  

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 2000|| document.documentElement.scrollTop > 1000) {
            document.querySelector(".button-slide-down").style.display = "block";
        } else {
            document.querySelector(".button-slide-down").style.display = "none";
        }
    }
    
    var topScroller = document.querySelector(".button-slide-down");
    topScroller.addEventListener("click", topFunction);


    function topFunction() {
        if(!document.documentElement.scrollTop == 0 || !document.body.scrollTop == 0) {
             window.scrollBy(0, -50);
             setTimeout(topFunction, 0);
            }

    }

    
})();









