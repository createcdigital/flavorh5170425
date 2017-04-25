var app = app || {};

/*-- html5-template
====================================================== */
app.template = function(){};

//swiper
app.template.swiper = function(){};
app.template.swiper.mySwiper = {};
app.template.swiper.init = function(){
	app.template.swiper.bind();
};
app.template.swiper.bind = function(){
    $(".swiper-container").css("display", "block");
    app.template.swiper.mySwiper = new Swiper ('.swiper-container', {
        speed:500,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        resistance : true,
        resistanceRatio : 0,
        direction : 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
            app.template.swiper.on_pageslideend(0);
        },
        onSlideChangeStart: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            app.template.swiper.on_pageslideend(swiper.activeIndex);
        }
    });

};
app.template.swiper.on_pageslideend = function(index){};

/* Landscape  引导用户竖屏显示 */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
	$(document).bind('orientationchange',function(){
        if(window.orientation==90 || window.orientation==-90){
            $(".swiper-container").css("display", "none");
        }else if(window.orientation==0 || window.orientation==180){
        	    $(".swiper-container").css("display", "block");
        }
    });
    var Landscape = new landscape({
        pic: 'js/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });   
};

//audio
app.template.audioPlay = function(){};
app.template.audioPlay.init = function(){
	app.template.audioPlay.autoPlay("audio-player");
	app.template.audioPlay.toggle();
};
app.template.audioPlay.autoPlay = function(id){
	var audio = document.getElementById(id),
	play = function(){
		audio.play();
		document.removeEventListener("touchstart",play,false);
	};
	audio.play();
	document.addEventListener("WeixinJSBridgeReady",function(){
		play();
	},false);
	document.addEventListener("touchstart",play,false);
};
app.template.audioPlay.toggle = function(){
	$(".audio-icon").addClass("audio-icon-animation");
	var audio = document.getElementById("audio-player");
	$(".audio-icon").on("touchend",function(){
		$(this).toggleClass("audio-icon-animation");
		if(audio!==null){
			if(!audio.paused){
				audio.pause();
			}else {
				audio.play();
			}
		}
	});
};
/* Landscape  引导用户竖屏显示 */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new landscape({
        pic: 'js/landscape.png',
        picZoom: 3,
        mode:'portrait',
        prefix:'Shine'
    });   
};
//touch
app.template.touch = function(){};

app.template.touch.eventlistener_handler = function(e){
    e.preventDefault();
};

app.template.touch.init = function(){
   document.body.addEventListener("touchmove", app.template.touch.eventlistener_handler, false);
};

/*-- p1
====================================================== */
app.p1 = function(){};
app.p1.init = function(){
   $(".p1-btn").addClass("p1-btn-animation");
};
app.p1.bind_touch_event = function(){
	
};
app.p1.destory = function(){
	$(".p1-btn").removeClass("p1-btn-animation");
};
/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){
    $(".p2-text1").addClass("p2-text1-animation");
    $(".p2-text2").addClass("p2-text2-animation");
    $(".p2-text3").addClass("p2-text3-animation");
    $(".p2-text4").addClass("p2-text4-animation");
    $(".p2-btn").addClass("p2-btn-animation");
};
app.p2.bind_touch_event = function(){
	
};
app.p2.destory = function(){
	$(".p2-text1").removeClass("p2-text1-animation");
	$(".p2-text2").removeClass("p2-text2-animation");
	$(".p2-text3").removeClass("p2-text3-animation");
	$(".p2-text4").removeClass("p2-text4-animation");
	$(".p2-btn").removeClass("p2-btn-animation");
	$(".p2-text1,.p2-text2,.p2-text3,.p2-text4").css("opacity","0");
};
/*-- p3
====================================================== */
app.p3 = function(){};
app.p3.init = function(){
	$(".p3-text1").addClass("p3-text1-animation");
	$(".p3-text2").addClass("p3-text2-animation");
	$(".p3-text3").addClass("p3-text3-animation");
	$(".p3-qi").addClass("p3-qianimation");
    $(".p3-btn").addClass("p3-btn-animation");
};
app.p3.bind_touch_event = function(){
	
};
app.p3.destory = function(){
	$(".p3-text1").removeClass("p3-text1-animation");
	$(".p3-text2").removeClass("p3-text2-animation");
	$(".p3-text3").removeClass("p3-text3-animation");
	$(".p3-qi").removeClass("p3-qianimation");
	$(".p3-btn").removeClass("p3-btn-animation");
	$(".p3-qi,.p3-text1,.p3-text2,.p3-text3").css("opacity","0");
};
/*-- p4
====================================================== */
app.p4 = function(){};
app.p4.init = function(){
    $(".p4-qingtext,.p4-qing").delay(4000).fadeOut("slow");
    $(".p4-yingtext,.p4-ying").delay(8000).fadeOut("slow");
    $(".p4-yangtext,.p4-yang").delay(12000).fadeOut("slow");
//  setTimeout(app.p4.addSomething,14000);
    $(".p4-btn").addClass("p4-btn-animation");
};
app.p4.bind_touch_event = function(){
	
};
app.p4.addSomething = function(){
	$(".p4-d2,.p4-d4,.p4-d6,.p4-d7").addClass("p4-danimation");
}
app.p4.destory = function(){
//	$(".p4-d2,.p4-d4,.p4-d6,.p4-d7").removeClass("p4-danimation");
	$(".p4-btn").removeClass("p4-btn-animation");
};
/*-- p5
====================================================== */
app.p5 = function(){};
app.p5.init = function(){
    $(".p5-btn").addClass("p5-btn-animation");
};
app.p5.bind_touch_event = function(){
	
};
app.p5.destory = function(){
	$(".p5-btn").removeClass("p5-btn-animation");
};

/*-- p6
====================================================== */
app.p6 = function(){};
app.p6.init = function(){
    $(".p6-btn").addClass("p6-btn-animation");
};
app.p6.bind_touch_event = function(){
	
};
app.p6.destory = function(){
	$(".p6-btn").removeClass("p6-btn-animation");
};
/*-- p7
====================================================== */
app.p7 = function(){};
app.p7.init = function(){
   $(".p7-btn").addClass("p7-btn-animation");
};
app.p7.bind_touch_event = function(){
	
};
app.p7.destory = function(){
	$(".p7-btn").removeClass("p7-btn-animation");
};
/*-- p8
====================================================== */
app.p8 = function(){};
app.p8.init = function(){
   $(".p8-j").addClass("p8-j-animation");
   $(".p8-btn").addClass("p8-btn-animation");
};
app.p8.bind_touch_event = function(){
	
};
app.p8.destory = function(){
   $(".p8-j").removeClass("p8-j-animation");
   $(".p8-btn").removeClass("p8-btn-animation");
};
/*-- p9
====================================================== */
app.p9 = function(){};
app.p9.init = function(){
   
};
app.p9.bind_touch_event = function(){
	
};
app.p9.destory = function(){
	
};

// init
(function(){
	 // 框架
	app.template.Landscape.init();
    app.template.swiper.init();
    app.template.touch.init();
    app.template.audioPlay.init();
    
	
	/* page init */
    app.template.swiper.on_pageslideend = function(index){
        switch(index)
        {
            case 0:
                app.p2.destory();
                app.p1.init();
                break;
            case 1:
                app.p1.destory();
                app.p3.destory();
                app.p2.init();
                break;
            case 2:
                app.p2.destory();
                app.p4.destory();
                app.p3.init();
                break;
            case 3:
                app.p3.destory();
                app.p5.destory();
                app.p4.init();
                break;
            case 4:
                app.p4.destory();
                app.p6.destory();
                app.p5.init();
                break;
            case 5:
                app.p5.destory();
                app.p7.destory();
                app.p6.init();
                break;
            case 6:
                app.p6.destory();
                app.p8.destory();
                app.p7.init();
                break;
            case 7:
                app.p7.destory();
                app.p9.destory();
                app.p8.init();
                break;
            case 8:
                app.p8.destory();
                app.p9.init();
                break;
        }
    };
   
    app.p1.init();
	//点击事件初始化	
	app.p1.bind_touch_event();
	app.p2.bind_touch_event();
	app.p3.bind_touch_event();
	app.p4.bind_touch_event();
	app.p5.bind_touch_event();
	app.p6.bind_touch_event();
	app.p7.bind_touch_event();
	app.p8.bind_touch_event();
	app.p9.bind_touch_event();
	
})();