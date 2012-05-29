$(function(){
	
	$('.about').click(function(){
		$('.about-page').animate({'right':'150px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.contact-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.service-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.work-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').animate({'margin-left':'15px'},600);
		$('.home').animate({'opacity':'1'},400);
		$('.home').css('cursor','pointer');
	});
	
		$('.contact').click(function(){
		$('.contact-page').animate({'right':'150px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.about-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.service-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.work-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').animate({'margin-left':'15px'},600);
		$('.home').animate({'opacity':'1'},400);
		$('.home').css('cursor','pointer');
	});
	
	$('.service').click(function(){
		$('.service-page').animate({'right':'150px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.contact-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.about-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.work-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').animate({'margin-left':'15px'},600);
		$('.home').animate({'opacity':'1'},400);
		$('.home').css('cursor','pointer');
	});

	$('.work').click(function(){
		$('.work-page').animate({'right':'150px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.contact-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.service-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.about-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').animate({'margin-left':'15px'},600);
		$('.home').animate({'opacity':'1'},400);
		$('.home').css('cursor','pointer');
	});

	$('.home').click(function(){
		$('.work-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.contact-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.service-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		$('.about-page').animate({'right':'-720px'},800,'cubic-bezier(.27,.82,.6,.42)');
		
		$('.content').animate({'margin-left':'250px'},600);
		$('.work').animate({'left':'405px','bottom':'80px'},600);
		$('.service').animate({'left':'405px','top':'80px'},600);
		$('.home').css('cursor','auto');
		$('.home').animate({'opacity':'0'},400);
	});

});