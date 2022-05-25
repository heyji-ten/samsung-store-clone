'use strict';

// scroll menu
var header = document.querySelector('#header');
var navbar = document.querySelector('.menu_sec');
var headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
    header.classList.add('on');
    } else {
    header.classList.remove('on');
    }
});


// popup - top banner open & close
var popupClose = document.querySelector('.popup_close');
var popupOpen = document.querySelector('.popup_open');
var popup = document.querySelector('.popup_img');

popupClose.addEventListener('click', () => {
    popup.classList.add('close');
    popupOpen.classList.add('open');
});

popupOpen.addEventListener('click', () => {
    popup.classList.remove('close');
    popupOpen.classList.remove('open');
})

// sidebar open & close
var sidebar = document.querySelector('#sidebar');
var sideOpen = document.querySelector('.side_open');
var sideClose = document.querySelector('.side_close');

sideOpen.addEventListener('click', () => {
    sidebar.classList.add('open');
});

sideClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
})

// slider
$('.center').slick({
    arrows:true,
    centerMode: true,
    centerPadding: '17.2%',
    slidesToShow: 1,
    dots: true,
    autoplay:true,
    autoplaySpeed:5000,
    speed:1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });