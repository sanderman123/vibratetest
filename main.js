$(document).ready(function(){
	$(document).click(function(event){
		var target = $( event.target );
		if(target.is("div")){
			target.fadeOut("slow",function(){						
			});
			vibrate(2000);
		} else {
			$("div").fadeIn("slow");	
		}
	})			
});

function vibrate(milliseconds){
	navigator.notification.vibrate(milliseconds);
}