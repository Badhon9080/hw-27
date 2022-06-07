$('.part_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
    nextArrow: '<i class="fa fa-angle-right  right_arrow"></i>',
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
},
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
},
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
}

]

});
    //About part slider
   

    $('.about_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]

    });
  



    $('.course_slider_container').slick({
        slidesToShow:3
    });
    //Calendar Activation
    $("#pb-calendar").pb_calendar({
        'next_month_button':'<i class="fa-solid fa-chevron-up"></i>',
        'prev_month_button':'<i class="fa-solid fa-chevron-down"></i>'
    });
  
        // counter js

        $('.count').counterUp({
            delay: 10,
            time: 2000,
        });

  // counter js

  $('.count_start').counterUp({
    delay: 10,
    time: 2000
});

// Course Slider
$('.course_slider_container').slick(); 

/*
$(function (){
    // Course SLIDER
    $('.course_slider_container').slick({
        slidesToShow:3
    });
    //Calendar Activation
    $("#pb-calendar").pb_calendar({
        'next_month_button':'<i class="fa-solid fa-chevron-up"></i>',
        'prev_month_button':'<i class="fa-solid fa-chevron-down"></i>'
    });
  
        // counter js

        $('.count').counterUp({
            delay: 10,
            time: 2000,
        });


})*/

