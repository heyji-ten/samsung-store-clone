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

// tab #sec02 best

var tabList = document.querySelectorAll('#sec02 .tab_list')

Array.prototype.forEach.call(tabList, function(list) {

  list.children[0].addEventListener('click', function(e) {
  e.preventDefault()

  var tabContent = document.querySelectorAll('#sec02 .tab_container .goods_list')
  var tabNum = this.parentElement.getAttribute('data-tabnum')
  
  Array.prototype.forEach.call(tabContent, function(cont, i) {
    cont.style.display = 'none'
    tabList[i].className = 'tab_list'
  })

  tabContent[tabNum].style.display = 'block'

  if(list.className.indexOf('tab_active') == -1) {
    list.className = 'tab_list tab_active'
  }
})
})