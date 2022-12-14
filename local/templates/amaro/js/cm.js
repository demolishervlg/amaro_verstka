$(function(){
	//Открытие мобильного меню
	$('.nav-btn-mobile').click(function() {
		$('.mobimenu').addClass('active');
		$('body').addClass('mobi-menu-active');
		return false;
	});
	
	//Закрытие мобильного меню
	$('.mobimenu__close').click(function() {
		$('.mobimenu').removeClass('active');
		$('body').removeClass('mobi-menu-active');
		return false;
	});
	
	//Показ подменю в моби-меню
	$('.submenu-btn').click(function() {
		$(this).next('.submenu').addClass('active');
		return false;
	});
	//Закрытие подменю в моби-меню
	$('.submenu__back').click(function() {
		$(this).closest('.submenu').removeClass('active');
		return false;
	});
	
	
	//Раскрытие меню в футере на мобилках
	$('.footer-menu__title').click(function() {
		if ($(this).children('i').is(':visible')) {
			$(this).parent('.footer-menu__head').toggleClass('active');
			if ($(this).parent('.footer-menu__head').hasClass('active')) {
				$(this).parent('.footer-menu__head').next('.footer-menu__list').slideDown(250);
			} else {
				$(this).parent('.footer-menu__head').next('.footer-menu__list').slideUp(250);
			}
			return false;
		}
	});
}); 
