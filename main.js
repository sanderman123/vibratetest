$(document).ready(function(){
	$(document).click(function(event){
		var target = $( event.target );
		if(target.is("div")){
			target.fadeOut("slow",function(){						
			});
			navigator.notification.vibrate(500);
		} else {
			$("div").fadeIn("slow");	
		}
	})			
});