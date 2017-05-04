$(document).ready(function(){
	var timeLeft = 599;
	setInterval(function () {
			var minAmount = Math.floor(timeLeft / 60);
			var secAmount = timeLeft % 60;
			if(minAmount <= 0 && secAmount <= 0){
				$("#minutes_count").html("00");
		    	$("#seconds_count").html("00");
		    	window.open("http://amzn.to/2q33naY");
			}else{
				$("#minutes_count").html("0"+minAmount);
			    if(secAmount < 10){
			    	$("#seconds_count").html("0"+secAmount);
			    }else{
			    	$("#seconds_count").html(""+secAmount);
			    }
			}
			if(minAmount == 9 && secAmount == 45) {
				window.open("http://amzn.to/2q33naY");
			}
		    timeLeft--;
    }, 1000);
});