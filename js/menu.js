var flag=0;
var eventAnimation = new Array(11);
for (var i = eventAnimation.length - 1; i >= 0; i--) 
{
	eventAnimation[i]=0;
}
var eventOneTop = $("#event1").offset().top;
var eventTwoTop = $("#event2").offset().top;
var eventThreeTop = $("#event3").offset().top;
var eventFourTop = $("#event4").offset().top;
var eventFiveTop = $("#event5").offset().top;
var eventSixTop = $("#event6").offset().top;
var eventSevenTop = $("#event7").offset().top;
var eventEightTop = $("#event8").offset().top;
var eventNineTop = $("#event9").offset().top;
var eventTenTop = $("#event10").offset().top;
var eventElevenTop = $("#event11").offset().top;


//Event Height

var eventOneHeight = $("#event1").height();
var eventTwoHeight = $("#event2").height();
var eventThreeHeight = $("#event3").height();
var eventFourHeight = $("#event4").height();
var eventFiveHeight = $("#event5").height();
var eventSixHeight = $("#event6").height();
var eventSevenHeight = $("#event7").height();
var eventEightHeight = $("#event8").height();
var eventNineHeight = $("#event9").height();
var eventTenHeight = $("#event10").height();
var eventElevenHeight = $("#event11").height();

/*$(".testing1").html(eventOneTop);
$(".testing2").html(eventFiveTop);
$(".testing3").html(eventThreeTop);*/
$("#event1").addClass("displaynone");
$("#event2").addClass("displaynone");
$("#event3").addClass("displaynone");
$("#event4").addClass("displaynone");
$("#event5").addClass("displaynone");
$("#event6").addClass("displaynone");
$("#event7").addClass("displaynone");
$("#event8").addClass("displaynone");
$("#event9").addClass("displaynone");
$("#event10").addClass("displaynone");
$("#event11").addClass("displaynone");
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
$(document).ready(function()
{
	$(window).scrollTop(0);
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
     $('html, body').delay(200).animate({
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
$("#reg_btn").on("click",function()
{
	$(".modal-title").html("Register Now!");
	$(".modal-body").html('<iframe class=googleform frameborder=0 height=500 marginheight=0 marginwidth=100 src="https://docs.google.com/forms/d/e/1FAIpQLSd43yjKJr0Vehf454k6bqfoVSGLa_syoUVovumybZWhHLpmIQ/viewform?embedded=true">Loading...</iframe><div style=font-size:2em>Pay through Online SBI at : <a href=https://www.onlinesbi.com/prelogin/institutiontypedisplay.htm style=background-color:#fff target=_blank>Click Here</a></div>');
});
$("#event1").on("click",function() //event1 pulse solo singing
{
	$(".modal-title").html("Rules for PULSE");
	$(".modal-body").html("<ul> \
	<li>Time limit: </li> \
  		<ul> \
			<li>Prelims: 2 min</li> \
			<li>Finals: max 5 min</li> \
		</ul> \
	<li>Types allowed ( Carnatic, Hindustani, western)</li> \
	<li>Insruments allowed</li> \
	<li>No abusive words in the music</li> \
	<li>Instrumental karaoke is allowed. However vocal karaoke is not allowed.<li> \
	<li>No provocative attire </li> \
	<li>Participants should possess their college id card while reporting for the event.</li> \
	<li>proof  for registering  for the event must be produced at the time of reporting.</li> \
	<li>No refund will be given</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event2").on("click",function() //event2 symphony duet singing
{
	$(".modal-title").html("Rules for SYMPHONY");
	$(".modal-body").html("<ul> \
	<li>Both the participants should be of same college</li> \
	<li>Types allowed ( Carnatic, Hindustani, western)</li> \
	<li>Instruments allowed</li> \
	<li>No abusive words in the music</li> \
	<li>Instrumental karaoke is allowed .however vocal karaoke is not allowed.</li> \
	<li>No provocative attire </li> \
	<li>Participants should possess their college id card while reporting for the event.</li> \
	<li>proof  for registering  for the event must be produced at the time of reporting.</li> \
	<li>No refund will be given</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event3").on("click",function() // Group Singing Band event3
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
  <li>Obscenity on stage strictly prohibited</li> \
  <li>Forging of identity will disqualify the group.</li> \
  <li>Participants has to bring their college id cards as well as the proof for the registration while reporting.</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event4").on("click",function() //Group Dancing event4
{
	$(".modal-title").html("Rules for SQUADROP");
	$(".modal-body").html("<ul> \
	<li>Props can be used during the dance. But the contestants has to arrange by themselves.However props like fire,water etc are not allowed.</li> \
	<li>Max time limit: 10min</li> \
	<li>Additional 2 min will be given to the participants to arrange the props.</li> \
	<li>Songs have to be provided 1 hour before the commencement of the program</li> \
	<li>There is no restriction on the language and the form of dance.</li> \
	<li>No provocative attire</li> \
	<li>Forging of identity will disqualify the participants.</li> \
	<li>All the participants must belong to the same college.</li> \
	<li>Participants should possess their college id card while reporting for the event.</li> \
	<li>Proof  for registering  for the event must be produced at the time of reporting.</li> \
	<li>No refund will be given.</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event5").on("click",function() //event5 solo Dancing
{
	
	$(".modal-title").html("Rules for STOMP");
	$(".modal-body").html("<ul> \
  <li>Props can be used during the dance. But the contestants have to arrange it by themselves.However props like fire, water etc are not allowed</li> \
  <li>Max time limit: </li> \
  		<ul> \
  			<li>Prelims: 3 min</li> \
  			<li>Finals: max 5 min</li> \
  		</ul> \
  <li>Additional 2 minutes will be given to the participants for setting their prop.</li> \
  <li>Songs have to be provided 1 hour before the commencement of the program</li> \
  <li>There is no restriction on the language and the form of dance</li> \
  <li>No abusive words in the music</li> \
  <li>No provocative attire</li> \
  <li>Participants should possess their college id card while reporting for the event.</li> \
  <li>Proof  for registering  for the event must be produced at the time of reporting.</li> \
  <li>No refund will be given</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event6").on("click",function() //event6 duet dancing
{
	$(".modal-title").html("Rules for PASdeDEUX");
	$(".modal-body").html("<ul> \
  <li>Both the participants should be of same college</li> \
  <li>Props can be used during the dance. But the contestants has to arrange by themselves</li> \
  <li>Max time limit: 3-5 min</li> \
  <li>Additional 2 min will be given for arranging the </li> \
  <li>There is no restriction on the language and the form of dance.</li> \
  <li>Songs have to be provided 1 hour before the commencement of the program.</li> \
  <li>No abusive words in the music.</li> \
  <li>No provocative attire</li> \
  <li>Participants should possess their college id card while reporting for the event.</li> \
  <li>Proof  for registering  for the event must be produced at the time of reporting.</li> \
  <li>No refund will be given</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event7").on("click",function() //light camera action  event7
{
	$(".modal-title").html("Rules for Light Camera Action");
	$(".modal-body").html("<ul> \
  <li>No restriction on topic. However topics that are offensive to certain community, religion, gender etc are strictly prohibited and will lead to direct disqualification.</li> \
  <li>Max time limit: 15 min</li> \
  <li>The language preffered is English.however other languages are also allowed only if there is English subtitles.</li> \
  <li>A brief description of the topic chosen must be provided during the registration to lecielfest@gmail.com</li> \
  <li>The script must be original</li> \
  <li>Forging of identity will disqualify the participants.</li> \
  <li>Participants should possess their college id card while reporting for the event.</li> \
  <li>Proof  for registering  for the event must be produced at the time of reporting.</li> \
  <li>No refund will be given</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event8").on("click",function() //event8 Mask Skit
{
	$(".modal-title").html("Rules for MASK");
	$(".modal-body").html("<ul> \
  <li>Maximum of 12 participants per team ( 10 on stage and 2 back stage)</li> \
  <li>Language must be English only.</li> \
  <li>Max time limit: 15 mins</li> \
  <li>A brief description of the topic chosen must be provided during the registration to lecielfest@gmail.com</li> \
  <li>No restriction on topic. However topics that are offensive to certain community, religion, gender etc are strictly prohibited and will lead to direct disqualification.</li> \
  <li>The script must be original</li> \
  <li>No provocative attire </li> \
  <li>Forging of identity will disqualify the participants.</li> \
  <li>Participants should possess their college id card while reporting for the event.</li> \
  <li>Proof  for registering  for the event must be produced at the time of reporting.</li> \
  <li>No refund will be given</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event9").on("click",function() // event9 Stoke
{
	$(".modal-title").html("Rules for STROKE");
	$(".modal-body").html("<ul> \
  <li>This event is open for both school (senior secondary level) and college students</li> \
  <li>The topic will be provided on spot. However, 10 minutes will be provided for planning</li> \
  <li>Max time limit: 2 hour</li> \
  <li>No restriction on type of colors used (water colors, crayons, pencil shading , oil pastels). However use of sketch pens are only allowed for highlighting but the entire sketch should not be of sketch colors.</li> \
  <li>The participants must bring their own stationaries</li> \
  <li>A2 size sheet will be provided at the venue</li> \
</ul>");
	$(".popupbtn").click();
});
$("#event10").on("click",function() //event10 Talento
{
	$(".modal-title").html("Rules for Talento");
	$(".modal-body").html("<ul> \
	<li>The exhibits must be already have been prepared.</li> \
	<li>Either an Individual or a maximum of 3 people can participate.</li> \
	<li>All the necessary material ( ex:- a bangle stand for the bangles you make ) should be brought by the participants.</li> \
	<li>The decision of judges are final.</li> \
	<li>Innovative and creative exhibits of low price will be encouraged.</li> \
	<li>Reduce, Reuse and Recycle : exhibits with this quality will be encouraged.</li> \
  </ul>");
	$(".popupbtn").click();
});
$("#event11").on("click",function() //Online events event11
{
	$(".modal-title").html("Rules for Online Events");
	$(".modal-body").html("<ul><li>Online events commences from 10th October,2017<li>There are three online events:<ul><li>Musically(No rules)<li>Photography:<ul><li>THEME: Photograph your favourite object in the most fascinating way possible.<li>Photographers are to submit their photographs to the given - photoart.leciel@gmail.com<li>While submitting the photograph the following is to be mentioned:<ul><li>Caption<li>Date,time and place of photograph<li>Which category the photo belongs.DSLR segment or Mobile Segment.<li>Details of the photographer(Name,College,Branch,Year)</ul><li>The photograph must have the object being displayed as the prime subject, and the caption appropriately describing it.<li>The photograph must be clicked within the time span of 9th October to 13th October, and must be submitted before 13th October afternoon.<li>Evaluation will be done on the basis of creativity, Caption and originality of the photograph.<li>Mixing of photograph using Photoshop or any other software is prohibited<li>Photograph must be original. If the photograph is not found to be original, the photographer will be disqualaified.<li>Once uploaded the photograph can be shared using the hashtag #NITPy_PhotoArt for public viewing, but the evaluation will NOT be on the basis of likes, shares and comments.<li>An example can be found in the given <a target="+"_blank" + " href="+ "https://www.instagram.com/p/BZNBRz8FkoVAsZbb-dQ2T2e3TAyBXm199sWZsg0" + ">link</a> </ul><li>Caption Writing(Picture will be posted on the facebook page at 8:00 am)</ul><li>The entries should be mailed to lecielfest@gmail.com<li>Points to be mentioned with the entry:<ul><li>Name<li>College and Contact Number and mail-id</ul></ul>");
	$(".popupbtn").click();
});
$(window).on("scroll resize",function()
{
	var windowBottom = $(window).scrollTop() + $("#homeimg").height();
	if(!eventAnimation[0])
	{
		//alert("here");

		if(windowBottom > (eventOneTop+(eventOneHeight/2) ))
		{
			$("#event1").show("slide",{direction: "left"},1000);
			eventAnimation[0]=1;		
			/*$(".screen1").removeClass("screen1");*/
		}
	}
	if(!eventAnimation[1])
	{
		//alert("here");

		if(windowBottom > (eventTwoTop+(eventTwoHeight/2) ))
		{
			$("#event2").show("slide",{direction: "left"},1000);
			eventAnimation[1]=1;		
			/*$(".screen2").removeClass("screen2");*/
		}
	}
	if(!eventAnimation[2])
	{
		//alert("here");

		if(windowBottom > (eventThreeTop+(eventThreeHeight/2) ))
		{
			$("#event3").show("slide",{direction: "right"},1000);
			eventAnimation[2]=1;		
			/*$(".screen3").removeClass("screen3");*/
		}
	}
	if(!eventAnimation[3])
	{
		//alert("here");

		if(windowBottom > (eventFourTop+(eventFourHeight/2) ))
		{
			$("#event4").show("slide",{direction: "left"},1000);
			eventAnimation[0]=1;		
			/*$(".screen4").removeClass("screen4");*/
		}
	}
	if(!eventAnimation[4])
	{
		//alert("here");

		if(windowBottom > (eventFiveTop+(eventFiveHeight/2) ))
		{
			$("#event5").show("slide",{direction: "right"},1000);
			eventAnimation[4]=1;		
			/*$(".screen5").removeClass("screen5");*/
		}
	}
	if(!eventAnimation[5])
	{
		//alert("here");

		if(windowBottom > (eventSixTop+(eventSixHeight/2) ))
		{
			$("#event6").show("slide",{direction: "right"},1000);
			eventAnimation[5]=1;		
			/*$(".screen6").removeClass("screen6");*/
		}
	}
	if(!eventAnimation[6])
	{
		//alert("here");

		if(windowBottom > (eventSevenTop+(eventSevenHeight/2) ))
		{
			$("#event7").show("slide",{direction: "left"},1000);
			eventAnimation[6]=1;
			/*$(".screen7").removeClass("screen7");		*/
		}
	}
	if(!eventAnimation[7])
	{
		//alert("here");

		if(windowBottom > (eventEightTop+(eventEightHeight/2) ))
		{
			$("#event8").show("slide",{direction: "right"},1000);
			eventAnimation[6]=1;		
			/*$(".screen8").removeClass("screen8");*/
		}
	}
	if(!eventAnimation[8])
	{
		//alert("here");

		if(windowBottom > (eventNineTop+(eventNineHeight/2) ))
		{
			$("#event9").show("slide",{direction: "right"},1000);
			eventAnimation[6]=1;		
			/*$(".screen9").removeClass("screen9");*/
		}
	}
	if(!eventAnimation[9])
	{
		//alert("here");

		if(windowBottom > (eventTenTop+(eventTenHeight/2) ))
		{
			$("#event10").show("slide",{direction: "left"},1000);
			eventAnimation[6]=1;		
			/*$(".screen10").removeClass("screen10");*/
		}
	}
	if(!eventAnimation[10])
	{
		//alert("here");

		if(windowBottom > (eventElevenTop+(eventElevenHeight/2) ))
		{
			$("#event11").show("slide",{direction: "left"},1000);
			eventAnimation[6]=1;		
			/*$(".screen11").removeClass("screen11");*/
		}
	}
	/*
	$("#event1").show("slide",{direction: "left"},1500);
	$("#event2").show("slide",{direction: "left"},1500);
	$("#event3").show("slide",{direction: "right"},1500);
	$("#event4").show("slide",{direction: "left"},1500);
	$("#event5").show("slide",{direction: "right"},1500);
	$("#event6").show("slide",{direction: "right"},1500);
	
	
	
*/
});
