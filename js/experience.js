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

//SETTING THE HEIGHT OF ICON CONTAINERS:

var uniHeight = $('.uni-desc').height(),
	hubHeight = $('.hub-desc').height(),
	accHeight = $('.acc-desc').height(),
	frHeight = $('.fr-desc').height(),
	decHeight = $('.dec-desc').height(),
	sklHeight = $('.skl-desc').height(),
	argHeight = $('.arg-desc').height();

$(document).ready(function(){
	if($(window).width() >= 768) {
	$('.uni-icon').css('height',(uniHeight+4));
	$('.hub-icon').css('height',(hubHeight+4));
	$('.acc-icon').css('height',(accHeight+4));
	$('.fr-icon').css('height',(frHeight+4));
	$('.dec-icon').css('height',(decHeight+4));
	$('.skl-icon').css('height',(sklHeight+4));
	$('.arg-icon').css('height',(argHeight+4));
	}
});

//FILTER FOR SM, MD, LG DEVICES:
$('.nav-pills li').click(function(){
  var category = $(this).attr('class');
  
  $('.nav-pills li').removeClass('active');
  $(this).addClass('active');
  
  if (category === 'nav-educational') {
    $('.exp').removeClass('visible');
  $('.educational').addClass('visible');
  } 
  
  else if (category === 'nav-professional') {
    $('.exp').removeClass('visible');
  $('.professional').addClass('visible');
  } 
  
  else if (category === 'nav-voluntary') {
    $('.exp').removeClass('visible');
  $('.voluntary').addClass('visible');
  } 
  
  else if (category === 'nav-extras') {
    $('.exp').removeClass('visible');
    $('.extras').addClass('visible');
  } 
  
  else if (category === 'nav-all') {
    $('.exp').addClass('visible');
  }
  
});


//FILTER FOR XS DEVICES:
$('.button').click(function(){
	$('.dropdown').toggleClass('open')
});


$('.dropdown-opt').click(function(){
  var categorymobile = $(this).attr('class');
  
  $('.dropdown-opt').removeClass('active-mobile');
  $(this).addClass('active-mobile');
  
  if (categorymobile === 'dropdown-opt mob-educational') {
    $('.exp').addClass('filter-out');
  $('.educational').removeClass('filter-out');
  } 
  
  else if (categorymobile === 'dropdown-opt mob-professional') {
    $('.exp').addClass('filter-out');
  $('.professional').removeClass('filter-out');
  } 
  
  else if (categorymobile === 'dropdown-opt mob-voluntary') {
    $('.exp').addClass('filter-out');
  $('.voluntary').removeClass('filter-out');
  } 
  
  else if (categorymobile === 'dropdown-opt mob-extras') {
    $('.exp').addClass('filter-out');
    $('.extras').removeClass('filter-out');
  } 
  
  else if (categorymobile === 'dropdown-opt mob-all') {
    $('.exp').removeClass('filter-out');
  }
  
  $('.dropdown').delay(500).removeClass("open");
  
});