import Splide from '@splidejs/splide';

const heroSlider = new Splide('.hero-slider', {
  type: 'fade',
  rewind: true,
  arrows: false,
  pagination: true,
  rewindSpeed: 3000,
});

heroSlider.mount();
