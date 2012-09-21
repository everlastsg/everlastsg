$(function(){
	
	
	
	
	
	
	
	if(screen.width<1440)
	{
		
		
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
    	$('.active .catalog-items').animate({'opacity':1,'top':470},{duration: 500,easing: 'easeOutQuad'});
  	
  	},function () {
		$('#catalog li').removeClass('active');
		$('.catalog-items').css({'opacity':0,'top':640},400);
	});
	
	
	$('#catalog-next').click(function () {
		$('#catalog-prev').fadeIn();
		$catalogImageCounter-=1;
		
		if($catalogImageCounter==1)
		{
		$('#catalog').animate({'marginLeft':-($('#catalog li').length*414)+$catalogTotalWidth+'px'},{duration:500,easing: $catalogEffect});
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
			$('#catalog').animate({'marginLeft':0},{duration:500,easing: $catalogEffect});
		$(this).fadeOut();
		}
		else if($catalogImageCounter!=Math.ceil($('#catalog li').length/3))
		$('#catalog').animate({'marginLeft':'+='+$catalogTotalWidth+'px'},{duration:500,easing: $catalogEffect});
  	});
	

	
});