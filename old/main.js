$('.scrollable').slick({
      dots: true,
      infinite: true,
      speed: 300,
      variableWidth: true,
      appendArrows: $('#controls'),
      appendDots: $('#controls'),
      autoplay: true,
      prevArrow: '<button type="button" class="slick-prev">Prev</button>',
      centerMode: true,
      slidesToShow: 1,
      customPaging: function(argument) {
            // console.log(argument.);
            return '<button></button>'
      },
      responsive: [
            {
                  breakpoint: 768,
                  settings: {
                        dots: false
                  }
            }
      ]
});

// $('.slick-dots li button').text('○');
// $('.slick-dots li.slick-active button').text('•');