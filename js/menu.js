var flag=0;
var clicked=1;
$(".c-hamburger").on("click",function()
{
      if(!flag)
      {
        $(".menu").show("slide",{direction: "left"},400);
       // $("menu-text").hide();
        flag=1;
       $(".menu-text").show("slide",{direction: "right"},500).animate({fontSize: '2em'},"slow");
      }
      else
      {
        $(".menu").hide("slide",{direction: "left"},400);
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
$("#content1").hover(function()
{
  $("#content1").find('p').hide();
  $(".popup1").show();
},function()
{
  $(".popup1").hide();
});
$("#content2").hover(function()
{
  $(".popup2").show();
},function()
{
  $(".popup2").hide();
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
/*Content and rules Hover*/
$(".content1_part1").hover(function()
{
  if(!detectmob())
  {
    $("#content2").hide();
    $(".popup1_1").show();
  }
},function()
{
  if(!detectmob())
  {
    $(".popup1_1").hide();
    $("#content2").show();
  }
});
$(".content1_part2").hover(function()
{
  if(!detectmob())
  {
    $("#content2").hide();
    $(".popup1_2").show();
  }
},function()
{
  if(!detectmob())
  {
    $(".popup1_2").hide();
    $("#content2").show();
  }
});
$(".content2_part1").hover(function()
{
  if(!detectmob())
  {
    $("#content1").hide();
    $(".popup2_1").show();
  }
},function()
{
  if(!detectmob())
  {
    $(".popup2_1").hide();
    $("#content1").show();
  }
});
$(".content2_part2").hover(function()
{
  if(!detectmob())
  {
    $("#content1").hide();
    $(".popup2_2").show();
  }
},function()
{
  if(!detectmob())
  {
    $(".popup2_2").hide();
    $("#content1").show();
  }
});
$(".modalclosebtn").on("click",function()
{ 
  if(detectmob())
  {
    $(".modal-title").html("");
    $(".modal-body").html("");
  }
});
$(".content1_part1").on("click",function()
{
  if(detectmob())
  {
    $(".modal-title").html("Rules for Event 1 of 1:");
    $(".modal-body").html("<p>Here <br> the rules <br> for event 1 of 1 <br></p>")
    $(".popupbtn").click();
  }
});
$(".content1_part2").on("click",function()
{
  if(detectmob())
  {
    $(".modal-title").html("Rules for Event 2 of 1:");
    $(".modal-body").html("<p>Here <br> the rules <br> for event 2 of 1 <br></p>")
    $(".popupbtn").click();
  }
});
$(".content2_part1").on("click",function()
{
  if(detectmob())
  {
    $(".modal-title").html("Rules for Event 1 of 2:");
    $(".modal-body").html("<p>Here <br> the rules <br> for event 1 of 2 <br></p>")
    $(".popupbtn").click();
  }
});
$(".content2_part2").on("click",function()
{
  if(detectmob())
  {
    $(".modal-title").html("Rules for Event 2 of 2:");
    $(".modal-body").html("<p>Here <br> the rules <br> for event 2 of 2 <br></p>")
    $(".popupbtn").click();
  }
});