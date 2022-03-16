$(function(){
    $('.slider_main').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        spreed:500
      });

      const r = rolly({
        view: document.querySelector('.app'),
        native: true,
        // other options
      });
      r.init();

      AOS.init({
          duration:1500
        });
      
})