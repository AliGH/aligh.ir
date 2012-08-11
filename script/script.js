$(function(){
	
	$('.about').click(function(){
		$('.about-page').animate({'right':'150px'},800,'easeInOut');
		$('.contact-page').animate({'right':'-720px'},800,'easeInOut');
		$('.service-page').animate({'right':'-720px'},800,'easeInOut');
		$('.work-page').animate({'right':'-720px'},800,'easeInOut');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').animate({'margin-left':'15px'},600);
		$('.home').animate({'opacity':'1'},400);
		$('.home').css('cursor','pointer');
	});
	
		$('.contact').click(function(){
		$('.contact-page').animate({'right':'150px'},800,'easeInOut');
		$('.about-page').animate({'right':'-720px'},800,'easeInOut');
		$('.service-page').animate({'right':'-720px'},800,'easeInOut');
		$('.work-page').animate({'right':'-720px'},800,'easeInOut');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').animate({'margin-left':'15px'},600);
		$('.home').animate({'opacity':'1'},400);
		$('.home').css('cursor','pointer');
	});
	
	$('.service').click(function(){
		$('.service-page').animate({'right':'150px'},800,'easeInOut');
		$('.contact-page').animate({'right':'-720px'},800,'easeInOut');
		$('.about-page').animate({'right':'-720px'},800,'easeInOut');
		$('.work-page').animate({'right':'-720px'},800,'easeInOut');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').animate({'margin-left':'15px'},600);
		$('.home').animate({'opacity':'1'},400);
		$('.home').css('cursor','pointer');
	});

	$('.work').click(function(){
		$('.work-page').animate({'right':'150px'},800,'easeInOut');
		$('.contact-page').animate({'right':'-720px'},800,'easeInOut');
		$('.service-page').animate({'right':'-720px'},800,'easeInOut');
		$('.about-page').animate({'right':'-720px'},800,'easeInOut');
		
		$('.work').animate({'bottom':'-20px','left':'155px'},500);
		$('.service').animate({'top':'-20px','left':'155px'},500);
		$('.content').animate({'margin-left':'15px'},600);
		$('.home').animate({'opacity':'1'},400);
		$('.home').css('cursor','pointer');
	});

	$('.home').click(function(){
		$('.work-page').animate({'right':'-720px'},800,'easeInOut');
		$('.contact-page').animate({'right':'-720px'},800,'easeInOut');
		$('.service-page').animate({'right':'-720px'},800,'easeInOut');
		$('.about-page').animate({'right':'-720px'},800,'easeInOut');
		
		$('.content').animate({'margin-left':'250px'},600);
		$('.work').animate({'left':'405px','bottom':'80px'},600);
		$('.service').animate({'left':'405px','top':'80px'},600);
		$('.home').css('cursor','auto');
		$('.home').animate({'opacity':'0'},400);
	});

});

window.onload = function(){

	var myform = document.forms.item(0);
	
	myform.onsubmit = function(){
		
		var ret = true;
		
		for(var i=0;i<myform.elements.length;i++){
			if(myform.elements.item(i).className!='ok'){
				ret = false;
				break;
			}
		}
		
		return ret;
	}
	
	for (var i=0;i<myform.elements.length;i++){
		
		var inp = myform.elements.item(i);
		
		if (inp.type!='text' && inp.type!='textarea'){
			continue;
		}
		
		inp.onfocus = function(){
			if (this.value == this.defaultValue){
				this.value = '';
			}
		}

		inp.onblur = function(){
			
			if (this.value!=''){
				this.className='ok';
			}else{
				this.className='nok'
			}
			
			if (this.value == ''){
				this.value = this.defaultValue;
			}
			
		}
	}
}
