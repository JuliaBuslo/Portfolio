//mobile menu
document.querySelector('.header__burger').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('open');
});

document.querySelectorAll('.header__link').forEach(function (btn) {
	btn.addEventListener('click', function () {
		document.querySelector('.header__burger').classList.remove('active');
		document.querySelector('.header__menu').classList.remove('open');
	});
});

// active menu item
$(window).scroll(function () {
	let $sections = $('section');
	$sections.each(function (i, el) {
		let top = $(el).offset().top - 100;
		let bottom = top + $(el).height();
		let scroll = $(window).scrollTop();
		let id = $(el).attr('id');
		if (scroll > top && scroll < bottom) {
			$('.header__link.current').removeClass('current');
			$('.header__link[href="#' + id + '"]').addClass('current');
		}
	})
});


$("nav, .scroll-up, .promo__scroll-down").on("click", "a", function (event) {
	// исключаем стандартную реакцию браузера
	event.preventDefault();

	// получем идентификатор блока из атрибута href
	var id = $(this).attr('href'),

		// находим высоту, на которой расположен блок
		top = $(id).offset().top - 60;

	// анимируем переход к блоку, время: 800 мс
	$('body,html').animate({ scrollTop: top }, 800);
});

// fixed header
$(document).ready(function ($) {
	let
		$window = $(window), // Основное окно
		$target = $(".header"), // Блок, который нужно фиксировать при прокрутке

		$h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)

	$window.on('scroll', function () {

		// Как далеко вниз прокрутили страницу
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
		if (scrollTop > $h) {

			$target.addClass("header_fixed");

			// Иначе возвращаем всё назад
		} else {

			$target.removeClass("header_fixed");
		}
	});
});


// easyPieChart for Skills section
$('.skills').waypoint(function () {
	$(function () {
		$('.chart').easyPieChart({
			size: 150,
			scaleColor: false,
			barColor: '#FFAD40',
			trackColor: 'transparent',
			lineWidth: 10,
			lineCap: 'circle',
			animate: 2000
		});
	});
}, { offset: '80%' });


// scroll-up button
$(window).scroll(function () {
	if ($(this).scrollTop() > 600) {
		$('.scroll-up').fadeIn();
	} else {
		$('.scroll-up').fadeOut();
	}
});

// wow init
wow = new WOW({
	mobile: false
});
wow.init();