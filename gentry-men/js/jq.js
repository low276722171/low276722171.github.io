//导航下拉
$(function(){
	$('.head_top li').hover(function(){
		$('.head_top').stop().animate({height:102+$(this).children('.one').height()},300);
		$(this).children('.one').stop(false,true).slideToggle(300);
	},function(){
		$('.head_top').stop().animate({height:102},300);
		$(this).children('.one').stop(false,true).slideToggle(300);
	})
});

//index2.html页面返回底部效果

	window.onscroll=function(){
	    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	    //var man=document.getElementsByClassName('man')[0];
		var back_top=document.getElementsByClassName('back_top')[0];
	    var owh=window.innerHeight;
           	if(scrollTop>=owh){
        		back_top.style.display='block';
           	}else{
             	back_top.style.display='none';
           	}
       
    };
    //jquery实现
    	$(function(){
    		$('.man .back_top').click(function(){
    			$('html,body').animate({scrollTop: '0px'}, 800);
    		}); 
    	})