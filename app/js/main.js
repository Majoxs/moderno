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

  //tabs

  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  //costomize selects

  $('input[type="file"], select').styler();

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