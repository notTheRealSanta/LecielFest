var flag=0;

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
	$(".modal-title").html("Rules for PULSE");
	$(".modal-body").html("<ul> \
  <li>Time limit: </li> \
</ul>");
	$(".popupbtn").click();
});
$("#event2").on("click",function()
{
	$(".modal-title").html("Rules for SYMPHONY");
	$(".modal-body").html("<ul> \
  <li>Time limit: 5</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event3").on("click",function()
{
	$(".modal-title").html("Rules for MÉLOPACTÉ");
	$(".modal-body").html("<ul> \
  <li>Max number per group/band: 10</li> \
  <li>Time limit: 10mins + 5min ( setup )</li> \
  <li>Prior information about group/band</li> \
  <li>After Registration a small piece of information about the band must be sent to: lecielfest@gmail.com</li> \
  <li>Pre recorded sounds not allowed</li> \
  <li>Types of instruments allowed: Any</li> \
  <li>Band members must be from within the same college </li> \
  <li>A person can perform for only one band</li> \
  <li>Judges decision are final and will not be available for review.</li> \
  <li>Instrument provided : Keyboard, Electric guitar, Electric Bass and Drum kit. </li> \
</ul>");
	$(".popupbtn").click();
});
$("#event4").on("click",function()
{
	$(".modal-title").html("Rules for SQUADROP");
	$(".modal-body").html("<ul> \
  <li> Props can be used during the dance. But the contestants has to arrange by themselves</li> \
  <li>Max time limit: 8 min</li> \
  <li>Songs have to be provided 1 hour before the commencement of the program</li> \
  <li>There is no restriction on the language and the form of dance.</li> \
  <li>A person participating in either duet or solo can perform in group dance also.</li> \
  <li>All the participants must belong to the same college.</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event5").on("click",function()
{
	
	$(".modal-title").html("Rules for STOMP");
	$(".modal-body").html("<ul> \
  <li>Props can be used during the dance. But the contestants have to arrange by themselves</li> \
  <li>Max time limit: 5 min</li> \
  <li>Songs have to be provided 1 hour before the commencement of the program</li> \
  <li>There is no restriction on the language and the form of dance</li> \
  <li>A person who is participating in solo can perform in group dance also. But they are not allowed to participate in duet dance.</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event6").on("click",function()
{
	$(".modal-title").html("Rules for PASdeDEUX");
	$(".modal-body").html("<ul> \
  <li>Both the participants should be of same college</li> \
  <li>Props can be used during the dance. But the contestants has to arrange by themselves</li> \
  <li>Max time limit: 5 min</li> \
  <li>There is no restriction on the language and the form of dance.</li> \
  <li>Songs have to be provided 1 hour before the commencement of the program.</li> \
  <li>A person who is participating in duet can perform in group dance also. But they are not allowed to participate in solo dance.</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event7").on("click",function()
{
	$(".modal-title").html("Rules for Light Camera Action");
	$(".modal-body").html("<ul> \
  <li>No restriction on topic. However topics that are offensive to certain community, religion, gender etc are strictly prohibited and will lead to direct disqualification.</li> \
  <li>Max time limit: 15 min</li> \
  <li>The language must be English only</li> \
  <li>A brief description of the topic chosen must be provided during the registration to lecielfest@gmail.com</li> \
  <li>The script must be original</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event8").on("click",function()
{
	$(".modal-title").html("Rules for MASK");
	$(".modal-body").html("<ul> \
  <li>Maximum of 12 participants per team ( 10 on stage and 2 back stage)</li> \
  <li>Language must be English only.</li> \
  <li>Max time limit: 15 mins</li> \
  <li>A brief description of the topic chosen must be provided during the registration to lecielfest@gmail.com</li> \
  <li>No restriction on topic. However topics that are offensive to certain community, religion, gender etc are strictly prohibited and will lead to direct disqualification.</li> \
  <li>The script must be original</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event9").on("click",function()
{
	$(".modal-title").html("Rules for STROKE");
	$(".modal-body").html("<ul> \
  <li>This event is open for both school (senior secondary level) and college students</li> \
  <li>The topic will be provided on spot. However, 10 minutes will be provided for planning</li> \
  <li>Max time limit: 1 hour</li> \
  <li>No restriction on type of colors used (water colors, crayons, pencil shading , oil pastels). However use of sketch pens are only allowed for highlighting but the entire sketch should not be of sketch colors.</li> \
  <li>The participants must bring their own stationaries</li> \
  <li>A2 size sheet will be provided at the venue</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event10").on("click",function()
{
	$(".modal-title").html("Rules for Talento");
	$(".modal-body").html("All the necessary equipments will be provided. ");
	$(".popupbtn").click();
});
$("#event11").on("click",function()
{
	$(".modal-title").html("Rules for Online Events");
	$(".modal-body").html("<ul> \
  <li>Photographs are to submit their photographs to the given link. ( give link)</li> \
  <li> While submitting the photograph the following to be mentioned \
    <ul> \
      <li>Caption</li>  \
      <li> Date,time and place of photograph</li> \
      <li>Details of photographer(Name,College,Branch,Year)</li> \
    </ul> \
  </li> \
  <li>The photograph must be clicked within the time span of 25th September to 10th October, and must be submitted before 11th October.</li> \
  <li>Evaluation will be done on the basis of creativity, Caption and originality of the photograph. </li> \
  <li>Mixing of photograph using Photoshop or any other software is prohibited</li> \
  <li>Photograph must be original. If the photograph is not found to be original, the photographer will be disqualaified.</li> \
  <li>Once uploaded the photograph can be shared using the hashtag #NITPy_PhotoArt for public viewing, but the evaluation will NOT be on the basis of likes, shares and comments.</li> \
</ul>");
	$(".popupbtn").click();
});
$(window).on("resize scroll",function()
{
  //alert("here");
  //alert($("#homeimg").height());
  var windowTop = $(window).scrollTop();
  windowTop += $("")
  var eventOne = $("#event3").offset();
  var eventHeight = $("#event3").height();
  $(".testing1").html(eventHeight);
  $(".testing3").html(eventOne.top);
  $(".testing2").html(windowTop);
  var windowTopToFadeIn = (($("#event1").offset()).top) + $("#event1").height(); 
  if(windowTop > windowTopToFadeIn)
  {
    alert("here");
    if(!eventOneAnimation)
    {
      $("#event1").fadeIn(300);
      eventOneAnimation=1;
    }
  }
});