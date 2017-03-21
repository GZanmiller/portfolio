$(document).foundation();

$(window).scroll(function() {
	if($(window).scrollTop() > 200) {
		$('header').addClass('scrolling');
	} else {
		$('header').removeClass('scrolling');
	}
});

/* Menu scrolldown code */
$('a.aboutMenu').on('click', function(e) {
	e.preventDefault();

	$("html,body").animate({
		scrollTop: $(".about").offset().top - 66
	}, 600);
});
$('a#workMenu').on('click', function(e) {
	e.preventDefault();

	$("html,body").animate({
		scrollTop: $(".work").offset().top - 66
	}, 600);
});
$('a#contactMenu').on('click', function(e) {
	e.preventDefault();

	$("html,body").animate({
		scrollTop: $(".contact").offset().top - 66
	}, 600);
});

/* ---------- Work Section ---------- */
