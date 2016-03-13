$(document).ready(function(){ 
 
  /* SLIDER NEWS - home */
  $('.bxslider').bxSlider({
  	auto: true,
  	mode: 'fade',
  	responsive: true,
  	pager:false,
  	speed: 500,
  	nextSelector: '#slider-next', 
	prevSelector: '#slider-prev',
    onSliderLoad: function (currentSlideNumber) {
        $('.bxslider>li .slider-text').eq(currentSlideNumber).addClass('active-slide');
        $(".slider-text.active-slide").addClass("wow animated fadeInRight");
    },
    onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
        console.log(currentSlideHtmlObject);
        $('.active-slide').removeClass('active-slide');
        $('.bxslider>li .slider-text').eq(currentSlideHtmlObject).addClass('active-slide');
        $(".slider-text.active-slide").addClass("wow animated fadeInRight");
    },
    onSlideBefore: function () {
        $(".slider-text.active-slide").removeClass("wow animated fadeInRight");
        $(".one.slider-text.active-slide").removeAttr('style');
    }	  	
  });

  /* SLIDER LATEST SERIES - home */
  $('.slider-latest').bxSlider({
  	minSlides: 2,
  	maxSlides: 8,
  	slideWidth: 175,
  	slideMargin: 10,
  	infiniteLoop: false,
  });		  

  /* ON SCROLL - HEADER  */
	$(window).bind('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.tp-header').addClass('header-thin');
		}
		else {
			$('.tp-header').removeClass('header-thin');
		}
	});

	/* NAV MOBILE */
	$('.tp-nav-mobile-button').on('click', function(){
		$('.navbar-nav').slideToggle("slow");
	});


  /* MODAL LOGIN */
  $(".btn-login").click(function(){
    $("#myModal").modal('show');
  });  
  
});