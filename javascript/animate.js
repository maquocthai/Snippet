//.animate({'opacity':'1'},500);	
$('#div').animate({marginTop:'60px'}, 500, function(){
	$(this).addClass('page_include_contact');
	$('.section_main_content').css({'opacity':'0','display':'block'});
	$('#content_sign_in2, .section_main_content').animate({'opacity':'1'},500);	
});