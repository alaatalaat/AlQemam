$(document).ready(function(){
	$(".item").mouseenter(function(){
		$(this).css({
			"background":"#ee9919",
			"borderRadius":"20px",
			"paddingRight":"5px",
			"paddingLeft":"5px",
		});
	});
	$(".dropdown-item").mouseenter(function(){
		$(this).css("background","#ee9919");
	});
	$(".dropdown-item").mouseleave(function(){
		$(this).css("background","transparent");
	});
	$(".item").mouseleave(function(){
		$(this).css({
			"background":"transparent",
		});
	});
/*Start Who We Are?*/
	$("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".All-sectors #myCarousel .carousel-inner .carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".All-sectors #myCarousel .carousel-inner .carousel-item")
            .eq(i)
            .appendTo(".All-sectors #myCarousel .carousel-inner");
        } else {
          $(".All-sectors #myCarousel .carousel-inner .carousel-item")
            .eq(0)
            .appendTo($(this).find(".All-sectors #myCarousel .carousel-inner"));
        }
      }
    }
  });
/*End Who We Are?*/
/*Start Q Meters*/
var i = 1;
var c = setInterval(countUp, 100);
function countUp(){
  $('.card-text-first').text(i);
  i++;
  if (i>=351) {
     clearInterval(c);
  }
}
var y=1;
var a = setInterval(countSec, 100);
function countSec(){
  $('.card-text-second').text(y);
  y++;
  if (y>=201) {
     clearInterval(a);
  }
}
var x=1;
var b = setInterval(countThird, 100);
function countThird(){
  $('.card-text-third').text(x);
  x++;
  if (x>=401) {
     clearInterval(b);
  }
}
var z=1;
var d = setInterval(countForth, 100);
function countForth(){
  $('.card-text-forth').text(z);
  z++;
  if (z>=11) {
     clearInterval(d);
  }
}
/*End Q Meters*/

/*Start Section-tabs*/
$("#tile-1 .nav-tabs a").click(function() {
  var position = $(this).parent().position();
  var width = $(this).parent().width();
    $("#tile-1 .slider").css({"left":+ position.left,"width":width});
});
var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tile-1 .nav-tabs .active").position();
$("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});

$(".section-tabs ul .nav-item:first-of-type").addClass("active-tab");

$(".section-tabs ul .nav-item").click(function(){
  $(this).addClass("active-tab").siblings().removeClass("active-tab");
  //$(".section-tabs ul .nav-item a:nth-child(2)").css("color","black");
  $(".section-tabs ul .nav-item a:nth-child(2)").parent().siblings().find(".nav-link").css("color","black");
});
/*End Section-tabs*/
/*Start SOLUTIONS-WE-DELIVER*/
$('.rect1').mouseenter(function(){
    $(this).css('background','#005eb8');
    $('.1rect div').css('background','#005eb8'); // #0769c7
    $('.rect1 div p').css('color','#fff');
    $('.rect1 div i').css('color','#fff');
  });
  $('.rect1').mouseleave(function(){
    $(this).css('background','#fff');
    $('.rect1 div').css('background','#fff');
    $('.rect1 div p').css('color','#005eb8');
    $('.rect1 div i').css('color','#005eb8');
  });

  $('.rect2').mouseenter(function(){
    $(this).css('background','#005eb8');
    $('.2rect div').css('background','#005eb8'); // #0769c7
    $('.rect2 div p').css('color','#fff');
    $('.rect2 div i').css('color','#fff');
  });
  $('.rect2').mouseleave(function(){
    $(this).css('background','#fff');
    $('.rect2 div').css('background','#fff');
    $('.rect2 div p').css('color','#005eb8');
    $('.rect2 div i').css('color','#005eb8');
  });

  $('.rect3').mouseenter(function(){
    $(this).css('background','#005eb8');
    $('.3rect div').css('background','#005eb8'); // #0769c7
    $('.rect3 div p').css('color','#fff');
    $('.rect3 div i').css('color','#fff');
  });
  $('.rect3').mouseleave(function(){
    $(this).css('background','#fff');
    $('.rect3 div').css('background','#fff');
    $('.rect3 div p').css('color','#005eb8');
    $('.rect3 div i').css('color','#005eb8');
  });

  $('.rect4').mouseenter(function(){
    $(this).css('background','#005eb8');
    $('.4rect div').css('background','#005eb8'); // #0769c7
    $('.rect4 div p').css('color','#fff');
    $('.rect4 div i').css('color','#fff');
  });
  $('.rect4').mouseleave(function(){
    $(this).css('background','#fff');
    $('.rect4 div').css('background','#fff');
    $('.rect4 div p').css('color','#005eb8');
    $('.rect4 div i').css('color','#005eb8');
  });

  $('.rect5').mouseenter(function(){
    $(this).css('background','#005eb8');
    $('.5rect div').css('background','#005eb8'); // #0769c7
    $('.rect5 div p').css('color','#fff');
    $('.rect5 div i').css('color','#fff');
  });
  $('.rect5').mouseleave(function(){
    $(this).css('background','#fff');
    $('.rect5 div').css('background','#fff');
    $('.rect5 div p').css('color','#005eb8');
    $('.rect5 div i').css('color','#005eb8');
  });

  $('.rect6').mouseenter(function(){
    $(this).css('background','#005eb8');
    $('.6rect div').css('background','#005eb8'); // #0769c7
    $('.rect6 div p').css('color','#fff');
    $('.rect6 div i').css('color','#fff');
  });
  $('.rect6').mouseleave(function(){
    $(this).css('background','#fff');
    $('.rect6 div').css('background','#fff');
    $('.rect6 div p').css('color','#005eb8');
    $('.rect6 div i').css('color','#005eb8');
  });

  $('.rect7').mouseenter(function(){
    $(this).css('background','#005eb8');
    $('.7rect div').css('background','#005eb8'); // #0769c7
    $('.rect7 div p').css('color','#fff');
    $('.rect7 div i').css('color','#fff');
  });
  $('.rect7').mouseleave(function(){
    $(this).css('background','#fff');
    $('.rect7 div').css('background','#fff');
    $('.rect7 div p').css('color','#005eb8');
    $('.rect7 div i').css('color','#005eb8');
  });
  $('.rect8').mouseenter(function(){
    $(this).css('background','#005eb8');
    $('.8rect div').css('background','#005eb8'); // #0769c7
    $('.rect8 div p').css('color','#fff');
    $('.rect8 div i').css('color','#fff');
  });
  $('.rect8').mouseleave(function(){
    $(this).css('background','#fff');
    $('.rect8 div').css('background','#fff');
    $('.rect8 div p').css('color','#005eb8');
    $('.rect8 div i').css('color','#005eb8');
  });
  /*End SOLUTIONS-WE-DELIVER*/
});
/*Start SUCCESS STORIES*/
$(document).ready(function(){
  $('.reverse .card-one').mouseenter(function(){
    $(this).html('<div id="card1-js"><p>Connected Car Solution for On-board<br>Diagnostics</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2 mt-1"></div><ul><li>ASP.NET WEB API</li><li>SIGNALIR</li><li>MICROSOFT AZURE CLOUD SERVICES</li><li>AZURE SERVICES BUS</li></ul><a href="#">LEARN MORE <i class="fas fa-arrow-right"></i></a></div>');
    $(this).css('background','#fff');
  });
  $('.reverse .card-one').mouseleave(function(){
    $(this).css({
      "background-image":"url(images/img1.png)",
      "background-size":"cover",
      "background-repeat":"no-repeat",
    });
    $(this).html('<div class="text-white" style="padding-top:38%;padding-left:20px;"><p style="font-size:24px;font-weight:bold;">Connected Car Solution for On-board<br>Diagnostics</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2"></div><p style="font-weight:500;">IOT DEVELOPMENT</p><div>');
  });

  $('.reverse .card-two').mouseenter(function(){
    $(this).html('<div id="card1-js"><p>Full-cycle Automation Of Cancer Drug and TPN Order and<br>Manufacturing</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2 mt-1"></div><ul><li>ASP.NET</li><li>VISUAL BASICS.NET</li><li>CITIRX SERVER API</li><li>CRYSTAL REPORTS</li></ul><a href="#" style="position:absolute;bottom:20px;right:40px;">LEARN MORE <i class="fas fa-arrow-right"></i></a></div>');
    $(this).css('background','#fff');
  });
  $('.reverse .card-two').mouseleave(function(){
    $(this).css({
      "background-image":"url(images/img2.png)",
      "background-size":"cover",
      "background-repeat":"no-repeat",
    });
    $(this).html('<div class="text-white" style="padding-top:25%;padding-left:20px;"><p style="font-size:24px;font-weight:bold;">Full-cycle Automation Of Cancer Drug and TPN Order and<br>Manufacturing</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2"></div><p style="font-weight:500;">HEALTHCARE</p><div>');
  });

  $('.reverse .card-three').mouseenter(function(){
    $(this).html('<div id="card1-js"><p>Develop,ent Of Java Back End for a Hotel Guest<br>Self-Services Application</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2 mt-1"></div><ul><li>JAVA 8</li><li>SPRINGBOOT 2.1</li><li>WEBFLUX</li><li>KUBERNETES</li></ul><a href="#" style="position:absolute;bottom:20px;right:40px;">LEARN MORE <i class="fas fa-arrow-right"></i></a></div>');
    $(this).css('background','#fff');
  });
  $('.reverse .card-three').mouseleave(function(){
    $(this).css({
      "background-image":"url(images/img3.png)",
      "background-size":"cover",
      "background-repeat":"no-repeat",
    });
    $(this).html('<div class="text-white" style="padding-top:25%;padding-left:20px;"><p style="font-size:24px;font-weight:bold;">Develop,ent Of Java Back End for a Hotel Guest<br>Self-Services Application</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2"></div><p style="font-weight:500;">REACTIVE PROGRAMMING</p><div>');
  });

  $('.reverse .card-four').mouseenter(function(){
    $(this).html('<div id="card1-js"><p>Modernization Of<br>Saas Gaming<br>Platform to SOA</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2 mt-1"></div><ul><li>.NET</li><li>WCF</li><li>ASP.MVC</li><li>TEAMCITY</li></ul><a href="#" style="position:absolute;bottom:20px;right:40px;">LEARN MORE <i class="fas fa-arrow-right"></i></a></div>');
    $(this).css('background','#fff');
  });
  $('.reverse .card-four').mouseleave(function(){
    $(this).css({
      "background-image":"url(images/img4.png)",
      "background-size":"cover",
      "background-repeat":"no-repeat",
    });
    $(this).html('<div class="text-white" style="padding-top:25%;padding-left:20px;"><p style="font-size:24px;font-weight:bold;">Modernization Of<br>Saas Gaming<br>Platform to SOA</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2"></div><p style="font-weight:500;">REACTIVE PROGRAMMING</p><div>');
  });

  $('.reverse .card-five').mouseenter(function(){
    $(this).html('<div id="card1-js"><p>Managed Testing<br>Services for Us<br>Multi-Industry<br>Corporation</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2 mt-1"></div><ul><li>MICROSOFT DYNAMIC 365</li><li>MAGENTO 2</li><li>IOS 9-11</li><li>ANDROID 7-8</li></ul><a href="#" style="position:absolute;bottom:20px;right:40px;">LEARN MORE <i class="fas fa-arrow-right"></i></a></div>');
    $(this).css('background','#fff');
  });
  $('.reverse .card-five').mouseleave(function(){
    $(this).css({
      "background-image":"url(images/img5.png)",
      "background-size":"cover",
      "background-repeat":"no-repeat",
    });
    $(this).html('<div class="text-white" style="padding-top:25%;padding-left:20px;"><p style="font-size:24px;font-weight:bold;">Managed Testing<br>Services for Us<br>Multi-Industry<br>Corporation</p><div style="width:40px;height:2px;background:#ed8b00" class="my-2"></div><p style="font-weight:500;">QA AND SOETWARE TESTING</p><div>');
  });
  $('.reverse-btn .btn').mouseenter(function(){
    $(this).css('background','#fff');
  });
  $('.reverse-btn .btn').mouseleave(function(){
    $(this).css('background','transparent');
  });
});
/*End SUCCESS STORIES*/
$(document).ready(function(){
  
  /*Start INDUSTRY EXPERTISE*/
  $(".thumbnails img").on('click',function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $(".master-img img").attr('src',$(this).attr('src'));
  });
  $(".thumbnails img:first-child").on('click',function(){
    $(".master-img div p:first-child").css('display','block').siblings().css('display','none')
    $(".master-img>p").css('display','none')
  });
  $(".thumbnails img:nth-child(2)").on('click',function(){
    $(".master-img div p:nth-child(2)").css('display','block').siblings().css('display','none')
    $(".master-img>p").css('display','none')
  });
  $(".thumbnails img:nth-child(3)").on('click',function(){
    $(".master-img div p:nth-child(3)").css('display','block').siblings().css('display','none')
    $(".master-img>p").css('display','none')
  });
  $(".thumbnails img:nth-child(4)").on('click',function(){
    $(".master-img div p:nth-child(4)").css('display','block').siblings().css('display','none')
    $(".master-img>p").css('display','none')
  });
  $(".thumbnails img:nth-child(5)").on('click',function(){
    $(".master-img div p:nth-child(5)").css('display','block').siblings().css('display','none')
    $(".master-img>p").css('display','none')
  });
  $(".thumbnails img:nth-child(6)").on('click',function(){
    $(".master-img div p:nth-child(6)").css('display','block').siblings().css('display','none')
    $(".master-img>p").css('display','none')
  });
  $(".thumbnails img:nth-child(7)").on('click',function(){
    $(".master-img div p:nth-child(7)").css('display','block').siblings().css('display','none')
    $(".master-img>p").css('display','none')
  });
  $(".thumbnails img:nth-child(8)").on('click',function(){
    $(".master-img div p:nth-child(8)").css('display','block').siblings().css('display','none')
    $(".master-img>p").css('display','none')
  });
  /*Next & Prev in INDUSTRY EXPERTISE*/
  $('.master-img .fa-angle-right').on('click',function(){
    if($('.thumbnails .selected').is(':last-child')){
      $('.thumbnails img').eq(0).click();
    }else{
      $('.thumbnails .selected').next().click();
    }
  }); 
  $('.master-img .fa-angle-left').on('click',function(){
    if($('.thumbnails .selected').is(':first-child')){
      $('.thumbnails img:last').click();
    }else{
      $('.thumbnails .selected').prev().click();
    }
  });
  /*End INDUSTRY EXPERTISE*/
  /*Start OUR CUSTOMERS SAY*/
  $('.CUSTOMERS .fa-plus').on('click',function(){
    $(this).toggleClass('fa-plus fa-minus').next('p').slideToggle();
  });
  /*End OUR CUSTOMERS SAY*/
});


$(document).ready(function(){
$('.FEATURED .card').hover(function(){
    $(this).find('.spanEffect').animate({
      width : '100%'
    }, 300);
    $(this).find('a span').css('display','inline-block');
  }, function(){
    $(this).find('.spanEffect').animate({
      width : 0
    }, 300);
    $(this).find('a span').css('display','none');
  });
$('.FEATURED div button').hover(function(){$(this).css('background','#fff')},function(){$(this).css('background','transparent')});


});
























/*------------------------------------------------ Start Vue Code----------------------------------------------------*/
/* Start Carousel Component*/
Vue.component('carousel-item',{
	template:`
     	<div class="row">
     		<div class="col-xs-6 col-sm-6 col-md-6">
     			<div>
     				<p>{{carouselData.p1}}</p>
     				<h1>{{carouselData.h1}}</h1>
     				<div><p>{{carouselData.p2}}</p></div>
     				<a href="#" type="button" class="btn px-3 py-2">Get Started</a>
     			</div>
     		</div>
     		<div class="col-xs-6 col-sm-6 col-md-6">
     			<img :src="carouselData.src" width="85%" height="500px">
     		</div>
     	</div>`,
	props:{
		carouselData:{type:Object,required:true}
	}
});
new Vue({
	el:'#carousel-inner',
	data:{
		carouselFirst:{
			p1:'Our New Innovative Solutions',
			h1:'Q-Makeen,',
			p2:'E-Correspondence System',
			src:"https://www.alqemam.com/alqemam/wp-content/uploads/2019/05/header.png"
		},
		carouselSecond:{
			p1:'Our New Innovative Solutions',
			h1:'Q-Desk,',
			p2:'Get Started',
			src:"https://www.alqemam.com/alqemam/wp-content/uploads/2019/08/Q-Desk-Slide.png"
		},
		carouselThird:{
			p1:'Our New Innovative Solutions',
			h1:'Careery,',
			p2:'First Online Career Toolbox For Arabs',
			src:"https://www.alqemam.com/alqemam/wp-content/uploads/2019/08/Careery-Slide.png"
		}
	},
});
/*Start MANAGED IT SERVICES*/
new Vue({
	el:'.SERVICES .row div div div:nth-of-type(3)',
	data:{
		Comprehensive : 'Comprehensive care of your cloud or on-premises infrastructure and applications with our consulting, implementation, management and support, security, and help desk services. High service availability and timely change implementation. Flexible cooperation options and proactive approach.'
	},
});
/*End MANAGED IT SERVICES*/
/*Start Sectiontab in small screen*/
Vue.component('carousel-item-tab',{
  template:`
  <div class="carousel-item  mt-4 ml-3">
    <div class="d-block w-100">
              <div>
                <img :src="data.img" width="70" height="70">
                <span class="font-weight-bold ml-3">{{data.span}}</span>
              </div>
              <div class="mt-3"><p>{{data.parag1}}</p></div>
              <div class="mt-3 font-weight-bold"></div>
              <div style="width:40px;height:2px;background:#f18e00;" class="mt-2"></div>
              <div class="mt-3">
                <ul>
                  <li class="mt-2"><p>{{data.parag2}}</p></li>
                  <li class="mt-2"><p>{{data.parag3}}</p></li>
                  <li class="mt-2"><p>{{data.parag4}}</p></li>
                  <li class="mt-2" :class="data.none" ><p>{{data.parag5}}</p></li>
                </ul>
              </div>
              <div class="text-center"><a href="#">FIND OUT MORE</a><i class="fas fa-arrow-right ml-2"></i></div>
        </div>
    </div>
  `,
  props:{
    data:{type:Object,required:true}
  }
});
new Vue({
  el:'#small-section-tab',
  data:{
    carouselTabFirst:{
      img:'images/img_544517.png',
      span:'Big Data',
      parag1:'Tame your big data through robust solutions that empower data collection, storage, processing and analysis.',
      div:'SERVICES WE OFFER:',
      parag2:'Consulting and implementation',
      parag3:'Data governance',
      parag4:'Support and evolution',
      parag5:'Data security',

    },
    carouselTabSecond:{
      img:'images/986812-200.png',
      span:'Machine Learning',
      parag1:'Get solutions that can depict the trickiest patterns and dependencies.',
      div:'SELECTED SOLUTIONS:',
      parag2:'Forecasting tools',
      parag3:'Image recognition',
      parag4:'Fraud detection',
      parag5:'Predictive maintenance',
    },
    carouselTabThird:{
      img:'images/AI.webp',
      span:'Artificial Intelligence',
      parag1:'Benefit from improved decision-making and revamped business processes.',
      div:'SELECTED SOLUTIONS:',
      parag2:'Analytical AI',
      parag3:'Interactive AI',
      parag4:'Functional AI',
      parag5:'Text and visual AI',
    },
    carouselTabForth:{
      img:'images/18-Vision-512.png',
      span:'Computer Vision',
      parag1:'Derive actionable insights from images and videos.',
      div:'SELECTED SOLUTIONS:',
      parag2:'Detection of visual defects and anomalies',
      parag3:'Barcode verification and validation',
      parag4:'Recognition of item location and positioning',
      parag5:'3D modelling and mapping',
    },
    carouselTabFifth:{
      img:'images/IOT-23-512.png',
      span:'Internet Of Things',
      parag1:'Collect, store, analyze sensor data and build ‘smart’ operations.',
      div:'SERVICE WE OFFER:',
      parag2:'IoT consulting',
      parag3:'IoT analytics',
      parag4:'IoT solution deployment',
      none:'d-none'
    },
    carouselTabSixth:{
      img:'images/AR-augmented-reality-smartphone-VR-hand-512.png',
      span:'Augmented Reality',
      parag1:'Blur the line between the virtual world and reality to represent and interpret content in a new way.',
      div:'OUR AR APPS ARE CAPABLE OF:',
      parag2:'Environmental understanding',
      parag3:'Image recognition',
      parag4:'Motion tracking',
      parag5:'Light estimation',
    },
  },
});
/*End Sectiontab in small screen*/
/*Start Pla*/
new Vue({
    el:'.platform',
    data:{
      photos :["https://www.scnsoft.com/---home-page-illustrations/platforms/sharepoint-logo.svg",
        "images/dynamics-365.svg",
        "images/salesforce.svg",
        "images/servicenow-logo.svg",
        "images/magento-logo.svg"],
    },
  });
/*End Platforms*/






































