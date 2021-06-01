
var jb = jQuery.noConflict();
jb(document).ready(function(){

      jb('#rollingNotice').slick({
        autoplay:true,
        vertical:true,
      });


      jb('#mainBanner').slick({
        slidesToShow: 1,
        slidesToScroll : 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass : "slick-dots",
        draggable : true,
        dots : true,
          // fade: true, /* 슬라이드가 아닌 fade효과처리*/
        });


});

// var jb = jQuery.noConflict();
// jb("#icon_search").bind('click', function(e) {
//   e.preventDefault();
//   jb('#quick_search').bPopup({
//     follow: [true, true],
//     position: ['auto', 'auto'],
//     closeClass : '.quick_searchClose',
//     modalClose: true,
//     modalColor : '#000',
//     opacity: 0.7,
//     positionStyle: 'fixed',
//     transition : 'fadeIn'
//   });
// });
