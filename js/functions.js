$(document).ready(function() {

	/*----------------------------------------------------*/
    /*	Fancybox media
    /*----------------------------------------------------*/
    $(".fancybox").fancybox();


    /*----------------------------------------------------*/
    /*	OWL Carousel
    /*----------------------------------------------------*/
    $(".owl-carousel.clients").owlCarousel({
        items : 6,
        autoPlay : true,
        navigation : false,
        navigationText : ["<i class='icon-chevron-left'></i>","<i class='icon-chevron-right'></i>"],
        rewindNav : true,
        scrollPerPage : false,
        pagination : false,
        paginationNumbers: false
    });

    $(".owl-carousel.fw").owlCarousel({
        autoPlay : false,
        stopOnHover : true,
        navigation:false,
        paginationSpeed : 1000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
        transitionStyle:"backSlide"
    });


    var owl_post = $(".owl-carousel.post");
    owl_post.owlCarousel({
        items : 1,
        pagination:false
     });
    $(".next2").click(function(){
        owl_post.trigger('owl.next');
    });
    $(".prev2").click(function(){
        owl_post.trigger('owl.prev');
    });
	

    var owl_portfolio_fs = $(".owl-carousel.portfolio.fs");
    owl_portfolio_fs.owlCarousel({
        items : 4,
        lazyLoad : true,
        pagination:false
     });
    $(".next").click(function(){
        owl_portfolio_fs.trigger('owl.next');
    });
    $(".prev").click(function(){
        owl_portfolio_fs.trigger('owl.prev');
    });

    var owl_sustentable = $(".owl-carousel.sustentable");
    owl_sustentable.owlCarousel({
        items : 1,
         pagination:false
     });

    $(".next3").click(function(){
        owl_sustentable.trigger('owl.next');
    });
    $(".prev3").click(function(){
        owl_sustentable.trigger('owl.prev');
    });
	
	var owl_c_media = $(".owl-carousel.c_media");
    owl_c_media.owlCarousel({
        items : 1,
         pagination:false
     });

    $(".next4").click(function(){
        owl_c_media.trigger('owl.next');
    });
    $(".prev4").click(function(){
        owl_c_media.trigger('owl.prev');
    });


    var owl_single = $(".owl-carousel.single");
    owl_single.owlCarousel({
        autoPlay : false,
        stopOnHover : true,
        navigation:true,
        navigationText: [
              "<i class='icon-chevron-left icon-white'></i>",
              "<i class='icon-chevron-right icon-white'></i>"
              ],
        pagination : false,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
        transitionStyle:"fadeUp"

     });
    $(".next").click(function(){
        owl_single.trigger('owl.next');
    });
    $(".prev").click(function(){
        owl_single.trigger('owl.prev');
    });


 	/*----------------------------------------------------*/
    /*	Scroll Up
    /*----------------------------------------------------*/
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '', // Text for element
            activeOverlay: true // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });

    /*----------------------------------------------------*/
    /*	Revolution Slider
    /*----------------------------------------------------*/
    if ($.fn.cssOriginal!=undefined) $.fn.css = $.fn.cssOriginal;
    $('.fullwidthbanner').revolution({
        delay:19000,
        startwidth:1160,
        startheight:600,

        onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

        thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
        thumbHeight:50,
        thumbAmount:3,

        hideThumbs:0,
        navigationType:"none",				        // bullet, thumb, none
        navigationArrows:"solo",				    // nexttobullets, solo (old name verticalcentered), none

        navigationStyle:"square-old",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom

        navigationHAlign:"center",				    // Vertical Align top,center,bottom
        navigationVAlign:"bottom",					// Horizontal Align left,center,right
        navigationHOffset:0,
        navigationVOffset:130,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:0,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:0,
        soloArrowRightVOffset:0,

        touchenabled:"on",						// Enable Swipe Function : on/off

        stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
        stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

        hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
        hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
        hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value

        fullWidth:"on",

        shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

    });

  /*----------------------------------------------------*/
    /*	Animate appeared elements within viewport
    /*----------------------------------------------------*/
    function testAnim(x, selector) {

        selector.removeClass('animated').addClass(x + ' animated');
   		var wait = window.setTimeout( function(){
                   selector.removeClass('animated')},
   			1300
   		);
   	}

    var $appeared       = $('#appeared');
    $('.transition-cnt').appear();

    $(document.body).on('appear', '.transition-cnt', function(e, $affected) {

        $affected.find('.transition').each($).wait(250, function(index) {
            testAnim(this.attr('data-transition'), this);
            this.removeClass('transition');
        });

        $('.progress-bar').each($).wait(550, function(index) {
            this.animate({width : this.attr('aria-valuenow')+'%'}, {duration: 0,easing: 'swing'});
        });

        $('.chart').each($).wait(550, function(index) {
            this.easyPieChart({
                lineWidth: 10,
                size:150,
                trackColor: '#cccccc',
                barColor: '#'+$('input[name=chart_color]').val(),
                scaleColor: false,
                lineCap: 'but'
            });
        });
        $(this).removeClass('transition-cnt');

    });

    $('.autoload').each($).wait(150, function(index) {
        testAnim(this.attr('data-transition'), this);
        this.removeClass('autoload');
    });


    $('.accordion').on('shown.bs.collapse', function (e) {
        $(e.target).prev().addClass('active');
        $(e.target).prev().find('.switch').removeClass('icon-plus');
        $(e.target).prev().find('.switch').addClass('icon-minus');
    });
    $('.accordion').on('hidden.bs.collapse', function (e) {
        $(e.target).prev().removeClass('active');
        $(e.target).prev().find('.switch').addClass('icon-plus');
        $(e.target).prev().find('.switch').removeClass('icon-minus');
    });

    $(window).on("scroll", function(){
        var windowScroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (windowScroll >= 200) {
            $('header').animate({top : '-44px'}, {duration: 0,easing: 'easeInOutQuart'});
        } else {
            $('header').animate({top : '0px'}, {duration: 0,easing: 'easeInOutQuart'});
        }

    });

});