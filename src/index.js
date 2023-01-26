import './sass/main.scss';
import Swiper, { Pagination } from 'swiper';
const swiper = new Swiper('.mySwiper', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
});
