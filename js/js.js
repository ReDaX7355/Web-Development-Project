$(document).ready(function() {


	$('.menu-tr').click(function(){
		$('nav ul').slideToggle(300);
		$('.menu-tr').toggleClass('rotate');
	});
	$(window).resize(function(){
		if ($(window).width() > 890) {
			$('nav ul').removeAttr('style');
			$('.menu').removeAttr('style');
		}
	});

	$('#submit').click(function() {
		if($('#name') == "" && $('#email') == "" && $('#text') == ""){
			alert("Все поля должны быть заполнены.");
		} else {

		}
	});

		var navPos, winPos;
		navPos = $('header').offset().top;
	function move(){
		winPos = $(window).scrollTop();


		if(winPos >= navPos){
			$('.menu').addClass('box-sh');
		}
		else{
			$('.menu').removeClass('box-sh');
		}
	};

	$(window).scroll(move);


	$('#h').click(function(){
		// скорость скролла
		var speed = 1000;
		
		// место скролла
		var top = $('#1').offset().top;
		$('.menu-tr').toggleClass('rotate');
		if($(window).width() < 890){
			$('nav ul').slideToggle(300);
			$('html, body').animate({scrollTop: top}, speed);
		} else{
			$('html, body').animate({scrollTop: top}, speed);
		} 	
		
		return false;
	});
	$('#a').click(function(){
		// скорость скролла
		var speed = 1000;
		
		// место скролла
		var top = $('#2').offset().top;
		$('.menu-tr').toggleClass('rotate');
		if($(window).width() < 890){
			$('nav ul').slideToggle(300);
			$('html, body').animate({scrollTop: top}, speed);
		} else{
			$('html, body').animate({scrollTop: top}, speed);
		}
		
		return false;
	});
	$('#s').click(function(){
		// скорость скролла
		var speed = 1000;
		
		// место скролла
		var top = $('#3').offset().top;
		$('.menu-tr').toggleClass('rotate');
		if($(window).width() < 890){
			$('nav ul').slideToggle(300);
			$('html, body').animate({scrollTop: top}, speed);
		} else{
			$('html, body').animate({scrollTop: top}, speed);
		}
		
		return false;
	});
	$('#p').click(function(){
		// скорость скролла
		var speed = 1000;
		
		// место скролла
		var top = $('#4').offset().top;
		$('.menu-tr').toggleClass('rotate');
		if($(window).width() < 890){
			$('nav ul').slideToggle(300);
			$('html, body').animate({scrollTop: top}, speed);
		} else{
			$('html, body').animate({scrollTop: top}, speed);
		}
		
		return false;
	});
	$('#b').click(function(){
		// скорость скролла
		var speed = 1000;
		
		// место скролла
		var top = $('#5').offset().top;
		$('.menu-tr').toggleClass('rotate');
		if($(window).width() < 890){
			$('nav ul').slideToggle(300);
			$('html, body').animate({scrollTop: top}, speed);
		} else{
			$('html, body').animate({scrollTop: top}, speed);
		}
		
		return false;
	});
	$('#c').click(function(){
		// скорость скролла
		var speed = 1000;
		
		// место скролла
		var top = $('#6').offset().top;
		$('.menu-tr').toggleClass('rotate');
		if($(window).width() < 890){
			$('nav ul').slideToggle(300);
			$('html, body').animate({scrollTop: top}, speed);
		} else{
			$('html, body').animate({scrollTop: top}, speed);
		}
		return false;
	});


$('.our-services div:nth-child(1)').on('mouseenter', function(){
	$('.our-services div:nth-child(1) img').attr('src', 'img/icons/service-tel-w.png');
});
$('.our-services div:nth-child(1)').on('mouseleave', function(){
	$('.our-services div:nth-child(1) img').attr('src', 'img/icons/service-tel.png');
});
$('.our-services div:nth-child(2)').on('mouseenter', function(){
	$('.our-services div:nth-child(2) img').attr('src', 'img/icons/service-tel-w.png');
});
$('.our-services div:nth-child(2)').on('mouseleave', function(){
	$('.our-services div:nth-child(2) img').attr('src', 'img/icons/service-tel.png');
});
$('.our-services div:nth-child(3)').on('mouseenter', function(){
	$('.our-services div:nth-child(3) img').attr('src', 'img/icons/service-tel-w.png');
});
$('.our-services div:nth-child(3)').on('mouseleave', function(){
	$('.our-services div:nth-child(3) img').attr('src', 'img/icons/service-tel.png');
});
$('.our-services div:nth-child(4)').on('mouseenter', function(){
	$('.our-services div:nth-child(4) img').attr('src', 'img/icons/service-tel-w.png');
});
$('.our-services div:nth-child(4)').on('mouseleave', function(){
	$('.our-services div:nth-child(4) img').attr('src', 'img/icons/service-tel.png');
});
$('.our-services div:nth-child(5)').on('mouseenter', function(){
	$('.our-services div:nth-child(5) img').attr('src', 'img/icons/service-tel-w.png');
});
$('.our-services div:nth-child(5)').on('mouseleave', function(){
	$('.our-services div:nth-child(5) img').attr('src', 'img/icons/service-tel.png');
});
$('.our-services div:nth-child(6)').on('mouseenter', function(){
	$('.our-services div:nth-child(6) img').attr('src', 'img/icons/service-tel-w.png');
});
$('.our-services div:nth-child(6)').on('mouseleave', function(){
	$('.our-services div:nth-child(6) img').attr('src', 'img/icons/service-tel.png');
});


$('.main-header .content .icon').on('click', function(){
	if($('.main-header').hasClass('img')){
		$('.main-header').css('backgroundImage', 'url(img/bg-header.jpg)');
		$('.main-header').removeClass('img');
	} else{
		$('.main-header').css('backgroundImage', 'url(img/bg-header-2.jpg)');
		$('.main-header').addClass('img');
	}
});

	
});