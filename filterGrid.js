/**
*
* Responsive Grid with Animated Filtering
* ----------------- 
* Copyright (c) 2014 CodeNorris.com
* Licensed under MIT (https://github.com/CodeNorris/FilterGrid/blob/master/LICENSE)
* ----------------- 
* Use any effect found on http://daneden.github.io/animate.css/
* or try the samples below!
*
**/

/* zoom in/out effect */
$(".filterLink").click(function(){
	//get the id of the filter selected
	var currentItem = $(this).attr("id");
	//hide all items
	$(".filterGrid li").removeClass("animated zoomIn").addClass("animated zoomOut");
	//when the animation is complete, hide the items to reset the grid
	$(".filterGrid li").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$(".filterGrid li").hide();
		//then show filtered items
		$("."+currentItem).show().removeClass("animated zoomOut").addClass("animated zoomIn");
	});
});

/* flip in/out effect */
/*
$(".filterLink").click(function(){
	//get the id of the filter selected
	var currentItem = $(this).attr("id");
	//hide all items
	$(".filterGrid li").removeClass("animated flipInX").addClass("animated flipOutX");
	//when the animation is complete, hide the items to reset the grid
	$(".filterGrid li").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$(".filterGrid li").hide();
		//then show filtered items
		$("."+currentItem).show().removeClass("animated flipOutX").addClass("animated flipInX");
	});
});
*/

/* fade in up/down effect */
/*
$(".filterLink").click(function(){
	//get the id of the filter selected
	var currentItem = $(this).attr("id");
	//hide all items
	$(".filterGrid li").removeClass("animated fadeInDown").addClass("animated fadeOutUp");
	//when the animation is complete, hide the items to reset the grid
	$(".filterGrid li").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$(".filterGrid li").hide();
		//then show filtered items
		$("."+currentItem).show().removeClass("animated fadeOutUp").addClass("animated fadeInDown");
	});
});
*/

/* rotate in/out effect */
/*
$(".filterLink").click(function(){
	//get the id of the filter selected
	var currentItem = $(this).attr("id");
	//hide all items
	$(".filterGrid li").removeClass("animated rotateIn").addClass("animated rotateOut");
	//when the animation is complete, hide the items to reset the grid
	$(".filterGrid li").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$(".filterGrid li").hide();
		//then show filtered items
		$("."+currentItem).show().removeClass("animated rotateOut").addClass("animated rotateIn");
	});
});
*/

/* bounce in/out effect */
/*
$(".filterLink").click(function(){
	//get the id of the filter selected
	var currentItem = $(this).attr("id");
	//hide all items
	$(".filterGrid li").removeClass("animated bounceIn").addClass("animated bounceOut");
	//when the animation is complete, hide the items to reset the grid
	$(".filterGrid li").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$(".filterGrid li").hide();
		//then show filtered items
		$("."+currentItem).show().removeClass("animated bounceOut").addClass("animated bounceIn");
	});
});
*/

/* rotate in/out effect */
/*
$(".filterLink").click(function(){
	//get the id of the filter selected
	var currentItem = $(this).attr("id");
	//hide all items
	$(".filterGrid li").removeClass("animated rotateIn").addClass("animated rotateOut");
	//when the animation is complete, hide the items to reset the grid
	$(".filterGrid li").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
		$(".filterGrid li").hide();
		//then show filtered items
		$("."+currentItem).show().removeClass("animated rotateOut").addClass("animated rotateIn");
	}
	);
});
*/
