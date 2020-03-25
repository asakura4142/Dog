$(document).ready(function(){
    $('.burger').click(function(event){
        $('.nav-links').toggleClass('nav-active');
        $('.burger').toggleClass('toggle');
        $( '.nav-links li' ).each(function(index) {
           if (this.style.animation){
            this.style.animation='';
           }
           else{
            this.style.animation=`navLinksFade .5s ease forwards ${index/7 + 0.3}s`
           }
          });
    });

 $('.pets-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst:true,
    responsive: [
       
        {
          breakpoint:1440,
          settings: {
            slidesToShow: 3
          }  
          },
        {
          breakpoint:1024,
          settings: {
            slidesToShow: 2
          }  
          },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 1,
            arrows: true
          }  
          },
     
        { 
          breakpoint:425,
          settings: {
            slidesToShow: 1,
            arrows:false
          }
        },
        { 
          breakpoint:320,
          settings: {
            slidesToShow: 1,
            arrows:false
          }
        },
    ]    
  });
  
});new WOW().init();