$(function() {
    $(".header-navigation__item").on("click", function() {
        $(".header-navigation__item").removeClass("header-navigation__item--active"),
        $(this).addClass("header-navigation__item--active")   
      }
   );

})();
