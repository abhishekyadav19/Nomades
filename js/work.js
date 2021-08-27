$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:5,
    responsiveClass:true,
    dots: false,
    nav:false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1100:{
            items:4,
            nav:false,
            loop:true
        }
    }
})