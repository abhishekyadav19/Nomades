$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:5,
    responsiveClass:true,
    dots: false,
    nav:false,
    smartSpeed:100,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2 ,
            nav:false
        },
        1024:{
            items:3,
            nav:false,
        },
        1200:{
            items:4,
            nav:false,

        }
    }
})