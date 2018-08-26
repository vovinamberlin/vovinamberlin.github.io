// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// var images = [
//     'master-Chieu-blue-belt-exam-berlin-04-2017.jpg',
//     'master-Chieu-Du-training-with-vovinam-berlin-team-09-2017.jpg',
//     'master-Chieu-training-11-2016.jpg',
//     'Olympicpark_08_2016.jpg',
//     'vovinam-berlin-christmas-party-12-2016.jpg',
//     'vovinamberlin-team-nov2017.jpg',
// ];

// var index = 0;

// setInterval(rotateBannerBackgroundImages, 5000);

// function rotateBannerBackgroundImages(){

//     index = (index + 1 < images.length) ? index + 1 : 0;

//     $('.intro-header').fadeOut(300, function(){

//         $(this).css('background-image', 'url(../img/cover/'+ images[index] + ')')

//         $(this).fadeIn(300);

//     });
// }
