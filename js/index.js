//**PRELOADER:

jQuery(document).ready(function() {  
$(window).load(function(){
	$('.loading').hide();
	$('.ready').show();
	setTimeout(function(){$('.preloader-container').slideUp('slow','swing');},2000);
});
});

//**LAZY LOAD PARALLAX IMGS:

$(function() {
	$('.lazy').lazy();
});

//**NAV & FOOTER FOR LG & MD:

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


//PARALLAX:
$(window).on('scroll', function () {

	window.requestAnimationFrame(function () {

		var winTop = $(window).scrollTop(),
			winHeight = $(window).height(),
			winWidth = $(window).width();
		
		if (winWidth > 786) {
			$('.bakery-img').css({
				'transform': 'translate3d(0,' + (winTop + (winHeight - winWidth*0.4)/2 - $('.bakery-img').offset().top) * -0.08 + 'px, 0)'
    		});
			$('.bakery-text-container').css({
				'transform': 'translate3d(0,' + (winTop + (winHeight - winWidth*0.25)/2 - $('.bakery-text-container').offset().top) * -0.4 + 'px, 0)'
    		});
			$('.borough-img').css({
				'transform': 'translate3d(0,' + (winTop + winHeight - $('.borough-img').offset().top) * -0.08 + 'px, 0)'
    		});
			$('.borough-text-container').css({
				'transform': 'translate3d(0,' + (winTop + (winHeight - winWidth*0.25)/2 - $('.borough-text-container').offset().top) * -0.4 + 'px, 0)'
    		});
			$('.tree-img').css({
				'transform': 'translate3d(0,' + (winTop + (winHeight - winWidth*0.4)/2 - $('.tree-img').offset().top) * -0.08 + 'px, 0)'
    		});
			$('.tree-text-container').css({
				'transform': 'translate3d(0,' + (winTop + (winHeight - winWidth*0.25)/2 - $('.tree-text-container').offset().top) * -0.4 + 'px, 0)'
			});
			$('.tube-img').css({
				'transform': 'translate3d(0,' + (winTop + (winHeight - winWidth*0.4)/2 - $('.tube-img').offset().top) * -0.08 + 'px, 0)'
    		});
			$('.tube-text-container').css({
				'transform': 'translate3d(0,' + (winTop + (winHeight - winWidth*0.25)/2 - $('.tube-text-container').offset().top) * -0.4 + 'px, 0)'
			});
		}
  });
});

//MOBILE NAV DROPDOWN:

$(window).scroll(function(){
	if($(this).scrollTop() >= $(this).innerHeight()*0.5){
	   $('.nav-mobile').removeClass('closed');
	   $('.logo-mobile').removeClass('closed');
	   setTimeout(function(){$('.nav-name-mobile').css('opacity','1');},600);
	   setTimeout(function(){$('.menuglyph-mob').css('opacity','1');},600);
   } else if($(this).scrollTop() < $(this).innerHeight()*0.5){
	   $('.nav-mobile').addClass('closed');
	   $('.logo-mobile').addClass('closed');
	   $('.nav-name-mobile').css('opacity','0');
	   $('.menuglyph-mob').css('opacity','0');
   }
});

$("body").on('touchmove',function(){
	if($(window).scrollTop() >= ($('.mobile-header').offset().top + $('.mobile-header').innerHeight() - 80)) 
	{ $('.nav-mobile').removeClass('closed');
	   	$('.logo-mobile').removeClass('closed');
	   	$('.nav-name-mobile').css('opacity','1');
	   	$('.menuglyph-mob').css('opacity','1');}
	else if ($(window).scrollTop() < ($('.mobile-header').offset().top + $('.mobile-header').innerHeight() - 80)){	$('.nav-mobile').addClass('closed');
	   	$('.logo-mobile').addClass('closed');
	   	$('.nav-name-mobile').css('opacity','0');
	   	$('.menuglyph-mob').css('opacity','0');}
});