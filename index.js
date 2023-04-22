// import Swiper from "swiper";
import Swiper, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
// const swiper = new Swiper(".mySwiper", {
//   modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 8,
  loop: true,
  centeredSlides: true,
  speed: 1000,
  grabCursor: true,
  loopFillGroupWithBlank: true,

  effect: "coverflow",
  coverflowEffect: {
    rotate: 20,
    scale: 0.6,
    slideShadows: false,
    depth: 400,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    enabled: false,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      spaceBetween: 18,
      navigation: {
        enabled: true,
      },
    },
    1280: {
      spaceBetween: 32,
      navigation: {
        enabled: true,
      },
    },
  },
});
