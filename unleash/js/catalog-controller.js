$(function(){
	//height 1024 viewport, all OK
	//height 900 viewport
	if(screen.height==900 && jQuery.browser.mozilla)//FF
			$('html, body').animate({scrollTop: $("#catalog-container").offset().top-80}, 1000);	
	
	else if(screen.height==900  && $.browser.msie)//IE
			$('html, body').animate({scrollTop: $("#catalog-container").offset().top-30}, 1000);
	
	//height 768 viewport
	else if(screen.height==768 && !jQuery.browser.mozilla && !$.browser.msie)//webkit
			$('html, body').animate({scrollTop: $("#catalog-container").offset().top+30}, 1000);
			
	else if(screen.height==768 && jQuery.browser.mozilla)//FF
			$('html, body').animate({scrollTop: $("#catalog-container").offset().top+60}, 1000);
					
	else if(screen.height==768  && $.browser.msie)//IE
			$('html, body').animate({scrollTop: $("#catalog-container").offset().top+100}, 1000);
			
	//height 720 viewport
	else if(screen.height==720 && !jQuery.browser.mozilla && !$.browser.msie)//webkit
			$('html, body').animate({scrollTop: $("#catalog-container").offset().top+50}, 1000);
			
	else if(screen.height==720 && jQuery.browser.mozilla)//FF
			$('html, body').animate({scrollTop: $("#catalog-container").offset().top+100}, 1000);
					
	else if(screen.height==720  && $.browser.msie)//IE
			$('html, body').animate({scrollTop: $("#catalog-container").offset().top+120}, 1000);

	

		
	if(screen.width<=1280)
	{
	$('#catalog-constraint').css({'left':10});
	$('#catalog-next').css({'right':18});
	$('#catalog-prev').css({'left':0});
	}
	//fancybox pop up
	$('.fancybox').fancybox();
	var $catalogImageCounter=Math.ceil($('#catalog li').length/3);
	var $catalogTotalWidth=1242;
	var $catalogEffect='easeInSine';

		//fade in images one by one
		$('#catalog li:lt(3)').css({'opacity':0});
	$('#catalog li').each(function(index){
                $(this).delay(index*900).animate({'opacity':1});				
	});
	$('#catalog-next').delay(1900).fadeIn();
	
	//catalog image brighten up
	$('.catalog-pic').hover(function () {
    	$(this).css({'opacity':1});
  	},
  	function () {
    	$(this).css({'opacity':0.9});
		//$('.catalog-items img').css({'opacity':1});
  	});
	
	//catalog image remain highlighted
	$('.catalog-items').hover(function () {
		$(this).parent().children('img').css({'opacity':1});
	});
	
	$('#catalog li').hover(function () {
		$('#catalog li').removeClass('active');		
		$(this).addClass('active');
    	$('.active .catalog-items').animate({'opacity':1,'top':460},{duration: 500,easing: 'easeOutQuad'});
  	
  	},function () {
		$('#catalog li').removeClass('active');
		$('.catalog-items').css({'opacity':0,'top':640},400);
	});
	
	
	$('#catalog-next').click(function () {
		$('#catalog-prev').fadeIn();
		$catalogImageCounter-=1;
		
		if($catalogImageCounter==1)
		{
		$('#catalog').animate({'marginLeft':'-2898px'},{duration:500,easing: $catalogEffect});
		$('#catalog-next').fadeOut();
		}
		else if($catalogImageCounter!=1)
		$('#catalog').animate({'marginLeft':'-='+$catalogTotalWidth+'px'},{duration:500,easing: $catalogEffect});

		
  	});
	

	
	$('#catalog-prev').click(function () {
    	
		$('#catalog-next').fadeIn();
		$catalogImageCounter+=1;
		if ($catalogImageCounter==Math.ceil($('#catalog li').length/3))
		{
		$('#catalog').animate({'marginLeft':'1px'},{duration:500,easing: $catalogEffect});
		$(this).fadeOut();
		}
		else if($catalogImageCounter!=Math.ceil($('#catalog li').length/3))
		$('#catalog').animate({'marginLeft':'+='+$catalogTotalWidth+'px'},{duration:500,easing: $catalogEffect});
  	});
	

	
});