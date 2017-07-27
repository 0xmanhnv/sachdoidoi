$(document).ready(function() {
	var flag = true;
	window.onscroll = function() {

		if($(document).scrollTop() >= ($(document).height() / 2)) {
	  		if( flag == true) {
	    		$("#sdd_more_articles").show();
	    	}

	        $('#btn-hide').click(function() {
	        	$("#sdd_more_articles").fadeOut();
	        	flag = false;
	        });
	  	}else {
		    $("#sdd_more_articles").fadeOut();
		}
	};
});