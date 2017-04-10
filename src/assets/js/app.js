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
	}, 400);
});
$('a#workMenu').on('click', function(e) {
	e.preventDefault();

	$("html,body").animate({
		scrollTop: $(".work").offset().top - 66
	}, 400);
});
$('a#contactMenu').on('click', function(e) {
	e.preventDefault();

	$("html,body").animate({
		scrollTop: $(".contact").offset().top - 66
	}, 400);
});

/* ---------- Work Section ---------- */

/* ---------- Contact Section ---------- */
$('.contactForm').on('submit', function(e) {
	e.preventDefault();

	var data = {
		name: $('#name').val(),
		email: $('#email').val(),
		message: $('#message').val()
	}

	$.post('/email.php', JSON.stringify(data), function(results) {
		console.log(results);

		if(results == 'true') {
			$('.contactResultsTrue').show();
		} else {
			$('.contactResultsFalse').show();
		}
	});
});