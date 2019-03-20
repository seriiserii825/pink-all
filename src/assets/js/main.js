$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 90,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true
  });

	//show menu
	let closeMenu = $('#js-close-menu');
	let showMenu = $('#js-show-menu');
	let navList = $('#js-nav-list');
	let navMenu = $('#js-nav-menu');


	// closeMenu.show();

	showMenu.on('click', function(){
		navList.addClass('nav-list--show');
		navMenu.addClass('nav-menu--show');
		navList.slideDown()
		closeMenu.show();
		showMenu.hide();
	});

	closeMenu.on('click', function(){
		navList.removeClass('nav-list--show');
		navMenu.removeClass('nav-menu--show');
		navList.slideUp();
		closeMenu.hide();
		showMenu.show();
	});

	//reviews slider
	$('#js-reviews-slider').slick({
		fade: true,
		speed: 300,
		cssEase: 'linear',
		dots: false,
		responsive: [
				{
					breakpoint: 1200,
					settings: {
						arrows: false,
						dots: true
					}
				}
			]
	});


	//table slider
	$('#js-table').slick({
			dots: true,
      arrows: false,
      responsive: [{
        breakpoint: 1980,
        settings: "unslick" // destroys slick,
      },
      {
        breakpoint: 660,
        settings: {
					centerPadding: '20px',
					centerMode: true,
          dots: true
        },
      }
    ]
	});

	function redactorTabs(){
		$('#js-redactor-tabs .redactor__tabs-group .redactor__tabs-content').hide();
		$('#js-redactor-tabs .redactor__tabs-group:first-of-type .redactor__tabs-content').show();
		$('#js-redactor-tabs .redactor__tabs-button').on('click', function(){
			let $this = $(this);
			let $id = $(this).attr('data-tab');
			console.log($id);
			$('#js-redactor-tabs .redactor__tabs-group .redactor__tabs-content').fadeOut();
			$($id).fadeIn();
			$('#js-redactor-tabs .redactor__tabs-button').removeClass('redactor__tabs-button--active');
			$this.toggleClass('redactor__tabs-button--active');
		});
	}

	if($(window).width() < 660){
		redactorTabs();
	}

	// $(window).resize(function(){
	// 	if($(window).width() < 660){
	// 		redactorTabs();
	// 	}
	// })


	// var initTabs = false;

	// $(window).resize(function(){
	// 	if($(window).width() < 660){
	// 		initTabs = true;

	// 		if (!initTabs) {
	// 			redactorTabs();
	// 		}
	// 	} else {
	// 		initTabs = false;
	// 	}
	// })
});



