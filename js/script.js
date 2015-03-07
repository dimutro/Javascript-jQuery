var squareCount = 256;
function getRandom()
	{
	  return Math.floor(Math.random() * (999999 - 0 + 1)) + 0;
	}
$(document).ready(function(){
	for(var i=0; i < squareCount; i++) {
		$('.mainblock').append('<div id="square"></div>');
	}
	$('.mainblock > #square').mouseenter(function(){
		var color = getRandom();
		$(this).css("background-color","#" + color);
	});
});