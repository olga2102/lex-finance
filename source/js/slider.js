new Swiper(".portfolio__swiper", {
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },
  pagination: {
    el: '.swiper-pag',
    clickable: true,
  },
  breakpoints: {
    360: {
    slidesPerView: 1,
    },
    770: {
      slidesPerView: 2,
      },
    // 978: {
    //   slidesPerView: 3,
    // },
    1024: {
      slidesPerView: 4,
    }
  },
  spaceBetween: 35,
  loop: true,
});

