$(function () {

   //Звёздный рейтинг

   $(".rate-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
   });

   //Слайдер

   $('.product-slider__inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
   });

   //menu

   $('.menu__btn').on('click', function () {
      $('.menu__list').slideToggle();
   });

   $('.header__btn-menu').on('click', function () {
      $('.header__box').toggleClass('active');
   });



   //Фильтр продуктов

   var mixer = mixitup('.products__inner-box');


});