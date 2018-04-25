	//返回顶部按钮
	window.onscroll=function(){
	    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	    //var neir=document.getElementsByClassName('neir')[0];
		var back_top=document.getElementsByClassName('back_top')[0];
	    var owh=window.innerHeight;
           	if(scrollTop>=owh){
        		back_top.style.display='block';
           	}else{
             	back_top.style.display='none';
           	}

			// function GoTop(){
				
			// 	//clearInterval(timer);
   //  			timer=setInterval(function(){
   //  				var scr=Math.floor(scrollTop/8);
			//     	if(scrollTop==0){ 
			//         	clearInterval(timer);
			//     	}else{
			// 			scrollTop-=scr;
			//         	console.log("2")
			//     	}
			//     	clearInterval(timer);
					
   //  			},20); 
    			
			// }
			// back_top.onclick=function(){
	  //      		GoTop();
   //          }
       
    };
    //jquery实现
    	$(function(){
    		$('.back_top').click(function(){
    			$('html,body').animate({scrollTop: '0px'}, 800);
    		}); 
    	})

      	//固定导航栏
      	var head=document.getElementsByClassName('head')[0];
  		var head_top=document.getElementsByClassName('head_top')[0];
		//获取窗口滚动高度
			function getScrollTop(){
			    var scrollTop=0;
			    if(document.documentElement&&document.documentElement.scrollTop){
			        scrollTop=document.documentElement.scrollTop;
			    }
			    else if(document.body){
			        scrollTop=document.body.scrollTop;
			    }
			    return scrollTop;
			}
		
			var getscroll=getScrollTop();
			if(window.getscroll==0 && window.getscroll>=100){
				head_top.style.position="relative";
			}else{
				head_top.style.position="fixed";

			}
  
		// //登录、注册
		// var head_del=document.getElementsByClassName('head_del')[0];
		// var login=head_del.getElementsByClassName('login')[0].getElementsByClassName('del')[0];
		// var zhuc=head_del.getElementsByClassName('login')[0].getElementsByClassName('zhuc')[0];
		// function del(){
		// 	layer.open({
	 //        	type:1,
	 //        	title:"登录页面", 
	 //        	area:["400px","400px"],
	 //        	shadeClose: true, //点击遮罩关闭
	 //        	content:$("#del_zhuc .login_del")
						
  //       	});
  //       }

  	
	//新品首发/移入移除效果
	var neir_new=document.getElementsByClassName('neir_new')[0];
	var new_one=neir_new.getElementsByClassName('new_one')[0];
	var new_li=new_one.getElementsByTagName('li');
	for(var i=0;i<new_li.length;i++){
		new_li[i].onmouseover=function(){	
			this.childNodes[3].style.display="block";
		}
		new_li[i].onmouseout=function(){	
			this.childNodes[3].style.display="none";
		}
	}
	//新品首发/懒加载

   	//微信二维码显示
   	var foot_left=document.getElementsByClassName('foot_left')[0];
   	var left_one=foot_left.getElementsByClassName('left_one')[3]; 
   	var img=foot_left.getElementsByClassName('one_img')[0];
   	var left_two=left_one.getElementsByClassName('left_two')[0].getElementsByTagName('a')[0];
   	left_two.onmouseover=function(){ 		
   			img.style.display="block";		
   	}
   	left_two.onmouseout=function(){		
   			img.style.display="none"; 		
   	}
