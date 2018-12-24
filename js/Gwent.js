var Responsive = //Responsive Navigation Javascript on all pages
{
	init: function()
	{
		var link = document.getElementsByClassName("topnav");
		$(link).bind("click", clickListener);
		function clickListener()
		{
			document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
		} //end clickListener
	} //end init function
}; // end Responsive Var
Responsive.init();

var RequiredField = //Form Validation Javascript on Contact.html
{
	init:function()
	{
		var theForm = document.getElementById("formTest");
		$(theForm).bind("submit", submitListener);
		
		function submitListener(event)
		{
			var requiredField = document.getElementById("requiredfield").value;
			var requiredField2 = document.getElementById("requiredfield2").value;
			var requiredField3 = document.getElementById("requiredfield3").value;
			var requiredField4 = document.getElementById("requiredfield4").value;
			var requiredField5 = document.getElementById("requiredfield5").value;
			
			if (requiredField === "" || requiredField.placeholder)
			{
				document.getElementById("errorMessage").innerHTML= "Please enter first name";
				this.requiredfield.focus();
				this.requiredfield.setAttribute("class", "format");
				event.preventDefault();
			}
			else if (requiredField2 === "" || requiredField2.placeholder)
			{
				document.getElementById("errorMessage").innerHTML= "Please enter second name";
				this.requiredfield2.focus();
				this.requiredfield2.setAttribute("class", "format");
				event.preventDefault();
			}
			else if (requiredField3 === "" || requiredField3.placeholder)
			{
				document.getElementById("errorMessage").innerHTML= "Please enter an email address";
				this.requiredfield3.focus();
				this.requiredfield3.setAttribute("class", "format");
				event.preventDefault();
			}
			else if (requiredField5 === "" || requiredField5.placeholder)
			{
				document.getElementById("errorMessage").innerHTML= "Please enter a comment";
				this.requiredfield5.focus();
				this.requiredfield5.setAttribute("class", "format");
				event.preventDefault();
			}
		} //end submitListener function
	} //end init function
}; //end RequiredField var
RequiredField.init();

var ImgLink = //Image Rotate Javascript on NorthernRealms.html
{
	init: function()
	{
		 $(window).bind("load",  loadListener); 

		function loadListener()
		{
			var thisAd=0;

			function  rotate()  
			{
				var adImages = ["images/gifs/Mastercard.gif","images/gifs/TaytoPark.gif","images/gifs/VirginMedia.gif"];

				thisAd++;
			
				if (thisAd == adImages.length) 
				{
					thisAd = 0;
				}
		
				document.getElementById("adBanner").setAttribute("src", adImages[thisAd]);
		
				if (document.getElementById("adBanner").parentNode.tagName == "A")
				{
		
					var imageClick= document.getElementById("adBanner").parentNode;
					$(imageClick).bind("click", newLocation);			  
				}
			} //end of rotate function
	
			function newLocation()
			{
				var adURL = ["Mastercard.com","Tayto.com","Virgin.com"];
				document.location.href = "http://www." + adURL[thisAd];
				event.preventDefault();
				// adURL.target = "_blank";
		
			} //end newLocation Function

		setInterval(rotate, 25000);	 //25 second rotate speed
		
		} // end loadListener function
	} //end init function
};  // end object

ImgLink.init();

var GifSlideshow = //Manual Slideshow Javascript on Monsters.html
{
	init : function()
	{
		$(window).bind("load", clickListenerTwo);
	
		function clickListenerTwo()
		{		
			var myGif = ["images/gifs/Mastercard.gif","images/gifs/TaytoPark.gif","images/gifs/VirginMedia.gif"]; 
			var thisGif = 0;
	
			function prevLink()
			{
				if (thisGif == 0)
				{
					thisGif = myGif.length;
				}
		
				thisGif--;
		
				document.getElementById("myGif").src = myGif[thisGif];
				event.preventDefault();
			}  //end prevLink function
	
			function forwardLink()
			{
				thisGif++;
				if (thisGif == myGif.length)
				{
					thisGif = 0;
				}
				document.getElementById("myGif").src = myGif[thisGif];
				event.preventDefault();  
			} //end NextLink function
	
			var prev= document.getElementById("prevLink");
			$(prev).bind("click", prevLink); 
	
			var next = document.getElementById("nextLink");
			$(next).bind("click", forwardLink);  
	
		}// end click Listener function
	} // end init function
}; //end Object 

GifSlideshow.init();  // calling Object

var RandomImages = //Random Images Javascript on Skellige.html
{
	init: function()
	{
		$(window).bind("load", loadListener);	
	
		function loadListener()
		{
			var myGifsTwo = ["images/gifs/Mastercard.gif","images/gifs/TaytoPark.gif","images/gifs/VirginMedia.gif"];
			var thisAdTwo =0;
	
			function rotateTwo()
			{
			
			thisAdTwo = Math.floor((Math.random() * myGifsTwo.length));  // Math.floor as you want it to get a zero
			document.getElementById("adBannerTwo").src = myGifsTwo[thisAdTwo];
			}
		
		setInterval(rotateTwo, 25000); //25 second generation speed
		}//end loadListener
	} //end init
}; // end object

RandomImages.init();  //calling object

var Rollover = //Rollover image in to gif on Index.html
{
	init: function()
	{
		var image = document.getElementById("myimage");
		$(image).bind("mouseover", overListener);
		$(image).bind("mouseout", outListener);
		
		$(image).bind("tap", tapListener);
		$(image).bind("click", clickListener);
		
		function overListener()
		{
			if (image.src.match("back"))
			{
				image.src="images/gifs/pic_front.gif";
			}
		}
		function outListener()
		{
			if (image.src.match("front"))
			{
				image.src="images/gifs/pic_back.gif";
			}
		}
	} //end init
} //end Rollover var
Rollover.init();