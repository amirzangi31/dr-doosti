
// اسلاید معرفی
const swiper = new Swiper('.swiper-one', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// اسلاید تخفیف شگفت انگیز
const swiperOne = new Swiper('.slider-offer', {
  // Optional parameters
  direction: 'horizontal',


  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
    500: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },

    768: {
      slidesPerView: 2,

      grid: {
        rows: 2,
      },
    },
    850: {
      slidesPerView: 2,

      grid: {
        rows: 2,
      },
    },

    // when window width is >= 640px

  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// اسلاید جشنواره  
const swiperTwo = new Swiper('.slider-festival', {
  // Optional parameters
  direction: 'horizontal',


  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
    500: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },

    768: {
      slidesPerView: 2,

      grid: {
        rows: 2,
      },
    },
    850: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween : 25
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween : 25
    },

    // when window width is >= 640px

  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const swiperThree = new Swiper('#sliderThree', {
  // Optional parameters
  direction: 'vertical',

  slidesPerView : 2,


  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperFour = new Swiper('#sliderFour', {
  // Optional parameters
  direction: 'vertical',

  slidesPerView : 2,


  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const article = new Swiper('.slider-article', {
  // Optional parameters
  direction: 'horizontal',

  slidesPerView : 4,
  // spaceBetween : 10,
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      
    },
    320: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,

    },
    850: {
      slidesPerView: 2,
      
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },

    // when window width is >= 640px

  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});