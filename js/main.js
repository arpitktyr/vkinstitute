/*
Theme Name: gardener
Version: 1.2.0
Author: awaittheme
Author URI: 
Description: Multi-Purpose Theme by awaittheme
*/

/*	IE 10 Fix*/

/* 
	-----------------------------------------------------------
		[Table of contents]
	-----------------------------------------------------------

		1. Preloader
		2. ACCORDION TAB 
		3. ACCORDION TAB HEADING COLOR CHANGE
		4. MAGNIFIC POPUP
		5. CUBEPORTFOLIO
		6. CUBEPORTFOLIO FULLWIDTH
		7. CLIENT SAY SLIDE
		8. INDEX4 TESTIMONIAL SLIDE
		9. BRAND LOGO SLIDE
	   10. LATEST NEWS SLIDE
	   11. RELATED ITEM SLIDE
	   12. Fun Facts
	   
		
*/

var $window = $(window),
$winWidth = $window.width(),
$page = $("#page");

(function($){
	
	"use strict";
		/* ==============================================
	Preloader
	=============================================== */
		$("#preloader").delay(500).fadeOut(1500);
		/* ==============================================
	Sticky
	=============================================== */
		$(".navbar-sticky, .navbar-sticky-bottom").sticky({
			topSpacing: 0,
			className: 'sticky'
		});
	
		/* ==============================================
	ACCORDION TAB
	=============================================== */
		$('.collapse').on('shown.bs.collapse', function() {
			$(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
		}).on('hidden.bs.collapse', function() {
			$(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
		});
	
		/* ==============================================
	ACCORDION TAB HEADING COLOR CHANGE
	=============================================== */
		$('.collapse').on('shown.bs.collapse', function() {
			$(this).parent().find(".panel-heading").addClass("panel-active");
		}).on('hidden.bs.collapse', function() {
			$(this).parent().find(".panel-heading").removeClass("panel-active")
		});
		
		/* ==============================================
	MAGNIFIC POPUP
	=============================================== */
		$(".image-popup").magnificPopup({
			type: "image",
			closeOnContentClick: false,
			removalDelay: 600,
			fixedContentPos: true,
			fixedBgPos: true,
			mainClass: "my-mfp-slide-bottom",
			image: {
				verticalFit: false
			}
		});
		/* ==============================================
	CUBEPORTFOLIO
	=============================================== */
		// init cubeportfolio
		$('#isotope-container').cubeportfolio({
			filters: '#js-filters-masonry-projects',
			loadMore: '#js-loadMore-masonry-projects',
			loadMoreAction: 'click',
			layoutMode: 'grid',
			
			gridAdjustment: 'responsive',
			mediaQueries: [{
				width: 1500,
				cols: 4
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			defaultFilter: '*',
			animationType: 'rotateSides',
			gapHorizontal: 30,
			gapVertical: 30,
			caption: 'zoom',
			displayType: 'sequentially',
			displayTypeSpeed: 100,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

			// singlePage popup
			singlePageDelegate: '.cbp-singlePage',
			singlePageDeeplinking: true,
			singlePageStickyNavigation: true,
			singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
			singlePageCallback: function(url, element) {
				// to update singlePage content use the following method: this.updateSinglePage(yourContent)
				var t = this;

				$.ajax({
						url: url,
						type: 'GET',
						dataType: 'html',
						timeout: 30000
					})
					.done(function(result) {
						t.updateSinglePage(result);
					})
					.fail(function() {
						t.updateSinglePage('AJAX Error! Please refresh the page!');
					});
			},
		});
		
		/* ==============================================
	CUBEPORTFOLIO FULLWIDTH
	=============================================== */	
		// init cubeportfolio
		$('#isotope-fullwidth').cubeportfolio({
			filters: '#js-filters-masonry-projects',
			loadMore: '#js-loadMore-masonry-projects',
			loadMoreAction: 'click',
			layoutMode: 'grid',
			
			gridAdjustment: 'responsive',
			mediaQueries: [{
				width: 1500,
				cols: 4
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			defaultFilter: '*',
			animationType: 'rotateSides',
			gapHorizontal: 0,
			gapVertical: 0,
			caption: 'zoom',
			displayType: 'sequentially',
			displayTypeSpeed: 100,

			// lightbox
			lightboxDelegate: '.cbp-lightbox',
			lightboxGallery: true,
			lightboxTitleSrc: 'data-title',
			lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

			// singlePage popup
			singlePageDelegate: '.cbp-singlePage',
			singlePageDeeplinking: true,
			singlePageStickyNavigation: true,
			singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
			singlePageCallback: function(url, element) {
				// to update singlePage content use the following method: this.updateSinglePage(yourContent)
				var t = this;

				$.ajax({
						url: url,
						type: 'GET',
						dataType: 'html',
						timeout: 30000
					})
					.done(function(result) {
						t.updateSinglePage(result);
					})
					.fail(function() {
						t.updateSinglePage('AJAX Error! Please refresh the page!');
					});
			},
		});
		$('.shareSelector').socialShare({
			social: 'facebook,twitter,google,pinterest,stumbleupon,delicious,friendfeed,digg,linkedin',
			whenSelect: true,
			selectContainer: '.shareSelector',
			blur: true
		});
		/* ==============================================
	CLIENT SAY SLIDE
	=============================================== */
		
		$(".client-say-slide").owlCarousel({
			items: 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			pagination: true,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 100
		});
		/* ==============================================
	INDEX4 TESTIMONIAL SLIDE
	=============================================== */
		
		$(".index4-testimonial-slide").owlCarousel({
			items: 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			stopOnHover: true,
			pagination: true,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 100,
			transitionStyle: "backSlide"
		});
		/* ==============================================
	BRAND LOGO SLIDE
	=============================================== */
		$(".brand-slider").owlCarousel({
			items: 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			pagination: true,
			stopOnHover: true,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 100
		});
		$(".brand-slider-2").owlCarousel({
			items: 5,
			navigation: false,
			pagination: false,
			singleItem:false,
			stopOnHover: true,
			autoPlay: true,
			slideSpeed: 100
		});
		/* ==============================================
	LATEST NEWS SLIDE
	=============================================== */
		$(".news-slide").owlCarousel({
			items: 5,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			margin:10,
			navigation: false,
			pagination: false,
			singleItem:false,
			stopOnHover: true,
			autoPlay: true,
			slideSpeed: 5
		});
		/* ==============================================
	LATEST NEWS SLIDE
	=============================================== */
		
		$(".blog-slide").owlCarousel({
			items: 2,
			itemsDesktop : [1199,2],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			margin:10,
			navigation: false,
			pagination: true,
			stopOnHover: true,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 5
		});
		/* ==============================================
	RELATED ITEM SLIDE
	=============================================== */
		
		$(".related-item-slide").owlCarousel({
			items: 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			pagination: true,
			stopOnHover: true,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 100
		});
		/* ==============================================
	INDEX4 ABOUT SLIDE
	=============================================== */
		
		$(".index4-about-slide").owlCarousel({
			items: 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			pagination: false,
			stopOnHover: true,
			singleItem:false,
			autoPlay: true,
			transitionStyle: "backSlide",
			slideSpeed: 100
		});
		/* ==============================================
	INDEX5 TESTIMONIAL SLIDE
	=============================================== */
		$(".index5-testimonial-slide").owlCarousel({
			items: 3,
			itemsDesktop : [1199,2],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			pagination: true,
			stopOnHover: true,
			singleItem:false,
			autoPlay: true,
			transitionStyle: "backSlide",
			slideSpeed: 100
		});
		/* ==============================================
	OUR SERVICE CLIENT SLIDE
	=============================================== */
		$(".service-client-slider").owlCarousel({
			items: 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			navigation: false,
			pagination: true,
			stopOnHover: true,
			singleItem:false,
			autoPlay: true,
			transitionStyle: "backSlide",
			slideSpeed: 100
		});
		/* ==============================================
	Main TEAM SLIDe
	=============================================== */
		$(".main-team-slider").owlCarousel({
			items: 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			margin:10,
			navigation: false,
			pagination: true,
			stopOnHover: true,
			singleItem:false,
			autoPlay: true,
			slideSpeed: 5
		});
		/* ==============================================
	Fun Facts
	=============================================== */
		$('.touch .fun-number').each(function(){
			var thisNo = $(this).text();
			$(this).animateNumber({number: thisNo},4000);
		});
		$('.no-touch .staff-1').waypoint(function() {
			$(this).find('.fun-number').each(function(){
				var thisNo = $(this).text();
				$(this).animateNumber({number: thisNo},4000);
			});
		},{offset: '90%',triggerOnce: true});
	
		/* ==============================================
	SKILL BARS
	=============================================== */
		$('.progress-col').waypoint(function() {
		   jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},2000);
			});
			
			}, { offset: '100%' 
		});	
		/* ==============================================
	Google Map Styles
	=============================================== */		
		$('#map').gmap3({
			map:{
			options:{
			center:[1.350720, 103.847761],
			zoom: 14,
			scrollwheel:false,
			styles: 
				[
					{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"off"}]},
					{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},
					{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
					{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},
					{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":-18},{"visibility":"on"}]},
					{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"off"}]},
					{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
					{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20},{"saturation":-100}]},
					{"featureType":"water","elementType":"geometry","stylers":[{"hue": "#6aaf08" },{"lightness":-60},{"saturation":0}]}
				]
			}
		  },
		  marker:{
			values:[
			  {address:"1.357509, 103.867194", data:"Perpignan ! <br> GO USAP !", options:{icon: "assets/images/marker.png"}}
			],
			options:{
			  draggable: false
			}
		  }
		});
		/* ==============================================
	Google Map Styles Two
	=============================================== */		  
		$('#map-2').gmap3({
			map:{
			options:{
			center:[1.357509, 103.867194],
			zoom: 14,
			scrollwheel:false,
			styles: 
				[
					{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"off"}]},
					{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},
					{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
					{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},
					{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":-18},{"visibility":"on"}]},
					{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"off"}]},
					{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
					{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20},{"saturation":-100}]},
					{"featureType":"water","elementType":"geometry","stylers":[{"hue": "#6aaf08" },{"lightness":-60},{"saturation":0}]}
				]
			}
		  },
		  marker:{
			values:[
			  {address:"1.357509, 103.867194", data:"Perpignan ! <br> GO USAP !", options:{icon: "assets/images/marker.png"}}
			],
			options:{
			  draggable: false
			}
		  }
		});
		/* ==============================================
	REVOLUTION CUSTOM
	=============================================== */
		if($("#rev_slider_4_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_4_1");
		}else{
			$("#rev_slider_4_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"../../revolution/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					
					,
					bullets: {
						enable: true,
						hide_onmobile: false,
						style: "hebe",
						hide_onleave: false,
						direction: "horizontal",
						h_align: "left",
						v_align: "bottom",
						h_offset: 100,
						v_offset: 70,
						space: 10,
						tmp: '<span class="tp-bullet-image"></span>'
					}
				},
				responsiveLevels:[1240,1024,778,480],
				gridwidth:[1400,1240,778,480],
				gridheight:[768,768,960,720],
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
			
		/* ==============================================
	Cart Item Quantity Control
	=============================================== */	
		
		$(".cart-item-quantity button, .cart-item-quantity-1 button").on('click',function() {
			var currentVal = parseInt($(this).prev(".cart-quantity").val(),10);

			if (!currentVal || currentVal == "" || currentVal == "NaN") currentVal = 0;

			$(this).prev(".cart-quantity").val(currentVal + 1);
		});

		$(".cart-item-minus").on('click',function() {
			var currentVal = parseInt($(this).next(".cart-quantity").val(),10);
			if (currentVal == "NaN") currentVal = 0;
			if (currentVal > 0) {
				$(this).next(".cart-quantity").val(currentVal - 1);
			}
		});
	
		/* ==============================================
	PAGE SCROLLING EFFECT
	=============================================== */
		
		$('.main-menu li a, .LandingPage-Button-1 a, .onepage-button a, .single-authors-content .media-body a, #back-top a').smoothScroll({
			speed: 1000,
			easing: 'swing',
			offset: -5
		});
	
})(jQuery);