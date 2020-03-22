$(document).ready(function(){
    $('.burger').click(function(event){
        $('.nav-links').toggleClass('nav-active');
        $('.burger').toggleClass('toggle');
        $( '.nav-links li' ).each(function(index) {
           if (this.style.animation){
            this.style.animation='';
           }
           else{
               var vasa = (index/7 + 0.3);
            this.style.animation=`navLinksFade .5s ease forwards ${index/7 + 0.3}s`
            console.log(index/7 + 0.3); 
           }
          });
    });
});