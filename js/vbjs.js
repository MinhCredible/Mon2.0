

//time on front page
function displayTime () {
   var now = new Date();    
   var elt = $("#clock").text(now.toLocaleTimeString());        
   setTimeout (displayTime, 1000);
};
displayTime();

//navigation bar
function menu(){
	var menu = $('nav ul')
	$('.tMenu').click(function(){
		$('nav ul').slideToggle();
	})
	$(window).resize(function(){
		var w = $(window).width();
		if (w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	})
}
menu(); 

/*
var navBar = function() {
    var menu = $('nav ul');

    $('#pull').on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
    }
    }); 
};

$(document).ready(navBar);*/


//slider main page
var main = function(){


	$('.arrow-next').click(function(){
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();

		if (nextSlide.length === 0) {
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		}

		currentSlide.fadeOut(500).removeClass('active-slide');
		nextSlide.fadeIn(500).addClass('active-slide');

		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});

	$('.arrow-prev').click(function(){
		var currentSlide = $('.active-slide');
		var prevSlide = currentSlide.prev();

		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();

		if(prevSlide.length === 0) {
     	 	prevSlide = $('.slide').last();
     		prevDot = $('.dot').last();
     	}
     	currentSlide.fadeOut(500).removeClass('active-slide');
     	prevSlide.fadeIn(500).addClass('active-slide');

     	currentDot.removeClass('active-dot');
     	prevDot.addClass('active-dot');
	});


	$('.dot').click(function(){
		var index = $(this).index(); // get the index or position of the current element that has the class .dot
		$('.slide').fadeOut(500); // to hide all elements with class .slide
		$('.dot').removeClass('active-dot');
		$('.slide').removeClass('active-slide').addClass('active');
		$('#slide' + (index+1)).fadeIn(500); 
		$('#slide' + (index+1)).removeClass('active').addClass('active-slide');
		$(this).addClass('active-dot');
		});

/*
	function autoPlaySlide(){
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if (nextSlide.length === 0) {
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(500).removeClass('active-slide');
    nextSlide.fadeIn(500).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

	}
	setInterval(autoPlaySlide, 5000 ); */
};

$(document).ready(main);

/*
function mode() {
$('.btn').click(function (){
	$('.modal').on('shown.bs.modal', function() {
		$(this).find('iframe').attr('src', 'https://www.youtube.com/embed/1gPXUA0L2mU')
	});
}
};
mode();*/


//resume page click toggle
function resume(){
	$('.skills').click(function(){
		$('.skills').removeClass('current');
		$('.info').hide();
	$(this).addClass('current');
	$(this).children('.info').show();
	})
};

resume();
