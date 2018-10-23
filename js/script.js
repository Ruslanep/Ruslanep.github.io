

// var navButton = document.querySelector(".amout-me");
// var mainBlock = document.querySelector(".page-main__intro");
// var aboutMeBlock = document.querySelector(".page-main__intro2");

// navButton.addEventListener("click", function(){

    

// });

// function toggleDisplay() {
//     this.style.display = "flex";


//     this.style.display = "none";
// }

$(document).ready(function(){
  setTimeout(function(){
      window.scrollTo(0, 0);
  }, 1);
});

$('.about-me').click(function() {
    if( !$('.about-me').hasClass('active') ) {

        $('.intro__right').slideToggle(0);
        $('.intro__right2').slideToggle(0);
        $('.about-me').addClass('active') ;
        $('.main').removeClass('active') ;
        $('.contacts').removeClass('active') ;
}
});

$('.main').click(function(){
    if( !$('.main').hasClass('active') ) {

        $('.intro__right2').slideToggle(0);
        $('.intro__right').slideToggle(0);
        
        $('.main').addClass('active') ;
        $('.about-me').removeClass('active') ;
       
}
});

$('.contacts').click(function(){
  if( !$('.contacts').hasClass('active') ) {
      $('.contacts-block').slideToggle(0);  
    }
    else {
      $('.contacts-block').slideToggle(0); 
    }
});


$('.intro__left-contacts').click(function(){

        $('.intro__left-contacts--item').addClass('display');

});

$('.intro__left-contacts--item').click(function(){

    $('.intro__left-contacts--item').removeClass('display');
    
    });




