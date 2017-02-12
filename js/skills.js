//NAVIGATION:

//NAVIGATION:

$(window).bind("load", function() {
	//nav shrinks 0.5 secs after page loads
	$('.nav-dropdown').delay(500).slideUp(600, "swing");
	setTimeout(function () {$('.logo').css('height','17vh');}, 500);
	setTimeout(function () {$('.logo').css('width','17vh');}, 500);
	setTimeout(function () {$('.menuglyph1').delay(1000).css('opacity','1');}, 500);
});

var scrollLog = 0;
$(window).scroll(function(){
   var scrollUpdate = $(this).scrollTop();
   //when user scrolls down nav shrinks:
   if (scrollUpdate > scrollLog){
	   $('.nav-dropdown').slideUp(600, "swing");
       $('.logo').css('height','17vh');
	   $('.logo').css('width','17vh');
	   $('.menuglyph1').css('opacity','1');
   } 
   //when user scrolls up more than 10px nav expands:
   else if (scrollUpdate < (scrollLog- 10)) {
	   $('.nav-dropdown').slideDown(600, "swing");
       $('.logo').css('height','25vh');
	   $('.logo').css('width','25vh');
	   $('.menuglyph1').css('opacity','0');
   }
   scrollLog = scrollUpdate;
   
   //footer transition:
   if($(this).scrollTop() + $(this).innerHeight() >= $(document).height()) {
  $('.footer').removeClass('closed');
   } else if($(this).scrollTop() + $(this).innerHeight() < $(document).height()-30){
  $('.footer').addClass('closed');
   }
});

//when user clicks on navUpButton the nav shrinks:
$('.navUpButton').click(function(){
	$('.nav-dropdown').slideUp(600, "swing");
	$('.logo').css('height','17vh');
	   $('.logo').css('width','17vh');
	$('.menuglyph1').css('opacity','1');
});

//when user clicks on menu-down glyphicon the nav shrinks:
$('.menuglyph1').click(function(){
	$('.nav-dropdown').slideDown(600, "swing");
	$('.logo').css('height','25vh');
	   $('.logo').css('width','25vh');
	   $('.menuglyph1').css('opacity','0');
});


//**NAV FOR XS & SM:
$('.menuglyph-mob').click(function(){
	$('.nav-mobile-menu').toggleClass('nav-dropdown-mobile-open');
});

$('.glyphicon-remove-circle').click(function(){
	$('.nav-mobile-menu').removeClass('nav-dropdown-mobile-open');
});


//SKILL ICONS FADE IN/OUT ON SCROLL / TOUCH DEVICE SCROLLING

$(document).ready(function(){
	
 $(window).on('scroll',function(){
  $('.skill').each(function(){
   var thisTop = $(this).offset().top - $(window).scrollTop();
   
   if((thisTop >= $(window).height()*0.01) && (thisTop + $(this).height() <= $(window).height())) {
	   $(this).css('opacity','1');
   } else if ((thisTop < $(window).height()*0.01) || (thisTop > $(window).height()*0.7)) {
	   $(this).css('opacity','0');
   }
  });
 });
 
 $(window).trigger('scroll');	
	
 $("body").on('touchmove',function(){
  $('.skill').each(function(){
   var thisTop = $(this).offset().top - $(window).scrollTop();
   
   if((thisTop >= $(window).height()*0.01) && (thisTop + $(this).height() <= $(window).height())) {
  $(this).css('opacity','1');
   } else if ((thisTop < $(window).height()*0.01) || (thisTop > $(window).height()*0.7)) {
  $(this).css('opacity','0');
   }
  });
});

});