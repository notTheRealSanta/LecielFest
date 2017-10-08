var flag=0;
var contentanimationflag1=0;
var contentanimationflag2=0;
var contentanimationflag3=0;
var clicked=1;	
var contentPartOne = $(".contentpart1").position();
var contentPartTwo = $(".contentpart2").position();
var contentPartThree = $(".contentpart3").position();
var contentOneHeight = $(".contentpart1").height();
var contentTwoHeight = $(".contentpart2").height();
var contentThreeHeight = $(".contentpart3").height();
//$(".testing1").html(contentPartOne.top + " " + contentPartOne.left);
//$(".testing3").html(contentPartTwo.top + " " + contentPartTwo.left);
$(".contentpart1").addClass("displayhide");
$(".contentpart2").addClass("displayhide");
$(".contentpart3").addClass("displayhide");
$(".c-hamburger").on("click",function()
{
      if(!flag)
      {
        $(".menu").show("slide",{direction: "left"},500);
        flag=1;
       $(".menu-text").show("slide",{direction: "right"},700).animate({fontSize: '2em'},"slow");
      }
      else
      {
        $(".menu").hide("slide",{direction: "left"},500);
        flag=0;
      }
});
(function() 
{

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

})();
$(".scrollbtn").on('click', function(e) {
     e.preventDefault();
     if(flag)
     {
      $(".c-hamburger").click();
     }
     var target = $(this).attr('href');
     $('html, body').delay(100).animate({
       scrollTop: ($(target).offset().top)
     }, 800);
});
$(window).scroll("resize scroll",function()
{
  var homeBottom = $("#homeimg").height();
  var windowTop = $(window).scrollTop();
  windowTop = (windowTop);
  homeBottom = (0.5*homeBottom);
  if(homeBottom < windowTop)
  {
    $(".scrollhome").hide();
  }
  else
  {
    $(".scrollhome").show();
  }
});
$(window).scroll("scroll",function()
{
	var windowBottom = $(window).scrollTop() + $("#homeimg").height();
	if(contentanimationflag1==0)
	{
		
		var windowCord = windowBottom - contentOneHeight;
		//$(".testing2").html(windowCord);
		if(windowCord > contentPartOne.top)
		{
			
			$(".contentpart1").show("slide",{direction: "left"},600);
			contentanimationflag1=1;
		}
	}
	if(contentanimationflag2==0)
	{
		
		var windowCord = windowBottom - contentTwoHeight;
		if(windowCord > contentPartTwo.top)
		{
			
			$(".contentpart2").show("slide",{direction: "right"},600);
			contentanimationflag2=1;
		}
	}
	if(contentanimationflag3==0)
	{
		
		var windowCord = windowBottom - contentTwoHeight;
		if(windowCord > contentPartThree.top)
		{
			
			$(".contentpart3").show("slide",{direction: "down"},600);
			contentanimationflag3=1;
		}
	}
});
$("#menu-half").on("click",function()
{
	if(flag)
	{
		$(".c-hamburger").click();	
	}
});
$(window).on("keydown",function(e)
{
	//alert("here");
  if(flag && e.keyCode===27)
  {
    $(".c-hamburger").click();
  }
});

//checkbox js

$('input[type="checkbox"]').on('change', function(e){
   if(e.target.checked){
     $('#myModal_checkbox').modal();
   }
});


/*Detecting a Mobile device*/
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
$("#event1").on("click",function()
{
	$(".popupbtn").click();
});
$(".contentpart2").on("click",function()
{
	$(".popupbtn").click();
});
$(".contentpart3").on("click",function()
{
	$(".popupbtn").click();
});