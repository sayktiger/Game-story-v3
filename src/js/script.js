document.addEventListener(`DOMContentLoaded`, () => {

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        centeredSlides: true,
        effect: 'slide',
        slidesPerView: 'auto',
      
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

});