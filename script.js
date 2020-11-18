
// $(document).ready(function(){
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
// });


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        navigation: true,
        loop: true,
        center: true,
        // autoWidth: true,
        // responsive:{ 1000:{items: 1}},
        autoplay: true,
        autoplayTimeout: 7000,

    });
  });

