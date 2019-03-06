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
		// if(navList.hasClass('nav-list--show')){
		// 	navList.removeClass('nav-list--show');
		// 	navMenu.removeClass('nav-menu--show');
		// 	navList.slideUp();
		// 	closeMenu.hide();
		// 	showMenu.show();
		// }else{
		// 	navList.addClass('nav-list--show');
		// 	navMenu.addClass('nav-menu--show');
		// 	navList.slideDown()
		// 	closeMenu.show();
		// 	showMenu.hide();
		// }
	});

	closeMenu.on('click', function(){
		navList.removeClass('nav-list--show');
		navMenu.removeClass('nav-menu--show');
		navList.slideUp();
		closeMenu.hide();
		showMenu.show();
	});

});

