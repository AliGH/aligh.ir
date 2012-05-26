$(function(){
	
	$('.about').click(function(){
		//$('.content').animate({'margin-left':'15px'},800);why the animate is not working????????
		$('.about-page').animate({'right':'150px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.contact-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');//cubic is not working in any parts :(((((
		$('.service-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.work-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').css('margin-left','15px');
		$('.home').css('display','block');
	});
	
		$('.contact').click(function(){
		$('.contact-page').animate({'right':'150px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.about-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.service-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.work-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').css('margin-left','15px');
		$('.home').css('display','block');
	});
	
	$('.service').click(function(){
		$('.service-page').animate({'right':'150px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.contact-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.about-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.work-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').css('margin-left','15px');
		$('.home').css('display','block');
	});

	$('.work').click(function(){
		$('.work-page').animate({'right':'150px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.contact-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.service-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.about-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').css('margin-left','15px');
		$('.home').css('display','block');
	});

	$('.home').click(function(){
		$('.work-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.contact-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.service-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.about-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.content').css('margin-left','auto');
		$('.work').animate({'left':'405px','bottom':'70px'},600);
		$('.service').animate({'left':'405px','top':'70px'},600);
		$('.home').css('display','none');
	});

});