$(function(){
	
	$('.about').click(function(){
		//$('.content').animate({'margin-left':'15px'},1000);why the animate is not working????????
		$('.about-page').animate({'right':'150px'},1000,(1,.03,1,.16));
		$('.contact-page').animate({'right':'-720px'},1000,(1,.03,1,.16));//cubic is not working in any parts :(((((
		$('.service-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		$('.work-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').css('margin-left','15px');

	});
	
		$('.contact').click(function(){
		$('.contact-page').animate({'right':'150px'},1000,(1,.03,1,.16));
		$('.about-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		$('.service-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		$('.work-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').css('margin-left','15px');
	});
	
	$('.service').click(function(){
		$('.service-page').animate({'right':'150px'},1000,(1,.03,1,.16));
		$('.contact-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		$('.about-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		$('.work-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').css('margin-left','15px');
	});

	$('.work').click(function(){
		$('.work-page').animate({'right':'150px'},1000,(1,.03,1,.16));
		$('.contact-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		$('.service-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		$('.about-page').animate({'right':'-720px'},1000,(1,.03,1,.16));
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').css('margin-left','15px');
	});

});