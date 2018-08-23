$(document).ready(function() 
{
	$('#slides').superslides(
	{
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", 
	{
		strings: ["Software Engineer", "Student", "Web Developer", "Veteran"],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel(
	{
	    loop:true,
	    items: 4,
	    responsive:
	    {
	        0:
	        {
	            items:1
	        },
	        480:
	        {
	            items:2
	        },
	        768:
	        {
	            items:3
	        },
	        938:
	        {
	            items:4
	        }
	    }
	});

	var skillsTopOffset = $(".skillsSection").offset().top;

	$(window).scroll(function()
	{
		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200)
		{
			$('.chart').easyPieChart(
			{
		        easing: 'easeInOut',
		        barColor: '#FFFFFF',
		        trackColor: '#0044C4',
		        scaleColor: false,
		        lineWidth: 5,
		        size: 152,
		        onStep: function(from, to, percent)
		        {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
		}
	});

	$("[data-fancybox]").fancybox();

	$(".items").isotope(
	{
		filter: '*',
		animationOptions:
		{
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	})

});

