import './sass/main.scss';
import Swiper, { Pagination, EffectFlip } from 'swiper';
const swiper = new Swiper('.mySwiper', {
  modules: [Pagination, EffectFlip],
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
