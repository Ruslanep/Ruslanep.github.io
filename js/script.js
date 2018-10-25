(function(){
    'use strict';

    var mainButton = document.querySelector('#main');
    var aboutButton = document.querySelector('#about');

    mainButton.addEventListener('click', function(){
      mainButton.classList.add('active');
      aboutButton.classList.remove('active');
    });
    aboutButton.addEventListener('click', function(){
      aboutButton.classList.add('active');
      mainButton.classList.remove('active'); 
    });


     ////////
    ////////
    

    $(document).ready(function(){
        $(".page-header__nav-wrapper").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;     
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 500);
        });
     });
    
    

    

    

    ////////
    ////////
    

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

    ////////
    ////////

    
           
})();









