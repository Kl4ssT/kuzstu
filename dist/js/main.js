$(window).on('load', function() {
    var preloader = $('.preloader');
    var body = $('body');
    body.removeClass('no-scroll');
    preloader.fadeOut('slow');
});

$(function() {
	$('.news__item').hover(function() {
		$('.news__item').removeClass('active');
		$(this).addClass('active');
	});

	$('.toggleMenu').click(function() {
		$('.menu-main').toggleClass('showed');
		return false;
	});

	$('.institutes__item').hover(function() {
		$('.institutes__item').addClass('no-hovered');
		$(this).removeClass('no-hovered').addClass('hovered');
	}, function() {
		$(this).removeClass('hovered');
		$('.institutes__item').removeClass('no-hovered');
	});

	$('.menu__item').hover(function() {
		$('.menu__list').addClass('active');
		$(this).find('.menu__sublist').addClass('active');
	}, function() {
		$('.menu__list').removeClass('active');
		$(this).find('.menu__sublist').removeClass('active');
	});

	$('.menu-close').click(function() {
		$('.menu-main').removeClass('showed');
		return false;
	});

	$('.gallery img').each(function() {
		if($(this).width() > $(this).height())
			$(this).addClass('vertical');
		else
			$(this).addClass('horizontal');
	});

	$('.widget__news').hover(function() {
		$(this).addClass('hovered');
	}, function() {
		$(this).removeClass('hovered');
	});

	$('.paginator__item').mPageScroll2id({
		scrollSpeed : 300
	});

	var isCrement = false;

	$(window).on('scroll', function() {
		var show = true;

		if($(window).scrollTop() > 55) {
			$('nav.menu, .header__uses.in-menu').addClass('fixeble');
		}
		else {
			$('nav.menu, .header__uses').removeClass('fixeble');
			$('.menu-main').removeClass('showed');
		}

		if($(window).scrollTop() >= 0) {
			$('.paginator').addClass('fixed');
		}
		else {
			$('.paginator').removeClass('fixed');
		}

		if(show) {
			if($(window).scrollTop() >= $('.numbers').offset().top - $(window).height()){
				show = false;
				$(".numbers__number").spincrement({
					duration: 1200
				});
	
			}
		}
        
	});

	$('.partners__slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
	    slidesToShow: 10,
	    slidesToScroll: 1,
	    variableWidth: true,
	    arrows: true,
	    prevArrow: '<a href="#" class="partners__prev"></a>',
	    nextArrow: '<a href="#" class="partners__next"></a>',
	});

	$(".calendar-block").datepicker($.datepicker.regional["ru"]);
	$('.datepicker').datepicker({
		showOn: 'button',
		buttonText: '<i class="fa fa-calendar"></i>'
	})

	$('.socials__block').masonry({
		itemSelector: '.socials__item',
		columnWidth: 340,
		gutter: 2
	});

	$('.gallery__block').masonry({
		itemSelector: '.gallery__item',
		gutter: 0
	});
});