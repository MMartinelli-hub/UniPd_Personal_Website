function showPubCount(){
	
	currentYear = new Date().getFullYear();

	var firstYear = document.getElementById('pubYears').getAttribute("first-year");
	var yearsCount = currentYear - firstYear;

	var years = new Array();

	for (var i = 0; i <= yearsCount; i++) {
	   year = parseInt(firstYear)+i;
	   var selector = "div[data-year=\'"+year+"\']";
	   
	   var pubs = document.querySelectorAll(selector);
		// count the number of pub
		var pubsNum = pubs.length;
		
		var selector2 = "option[value=\'year"+year+"\']";
		var option = document.querySelectorAll(selector2);
		if(option[0]!=undefined){
			option[0].innerHTML=year + " (" + pubsNum + ")";
		}
	}

	// ALL YEARS
	var selector = "div[data-year]";
	var pubs = document.querySelectorAll(selector);
	var pubsNum = pubs.length;
		
	var selector2 = "option[type=\'allYears\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="All Years (" + pubsNum + ")";
	}

	// ALL TYPES
	var selector2 = "option[type=\'allTypes\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="All Types (" + pubsNum + ")";
	}

	// JOURNAL
	var pubs = document.getElementsByClassName("jpaper");
    var pubsNum = pubs.length;
		
	var selector2 = "option[value=\'jpaper\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="Journal (" + pubsNum + ")";
	}

	// CONFERENCE
	var pubs = document.getElementsByClassName("cpaper");
	    var pubsNum = pubs.length;
		
	var selector2 = "option[value=\'cpaper\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="Conference (" + pubsNum + ")";
	}

	// WORKSHOP
	var pubs = document.getElementsByClassName("wpaper");
	    var pubsNum = pubs.length;
		
	var selector2 = "option[value=\'wpaper\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="Workshop (" + pubsNum + ")";
	}

	// BOOK CHAPTER
	var pubs = document.getElementsByClassName("bookchapter");
	    var pubsNum = pubs.length;
		
	var selector2 = "option[value=\'bookchapter\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="Chapter (" + pubsNum + ")";
	}

	// BOOK 
	var pubs = document.getElementsByClassName("book");
	    var pubsNum = pubs.length;
		
	var selector2 = "option[value=\'book\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="Book (" + pubsNum + ")";
	}

		// DISSEMINATION 
	var pubs = document.getElementsByClassName("dpaper");
	    var pubsNum = pubs.length;
		
	var selector2 = "option[value=\'dpaper\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="Journal (no peer-rev.) (" + pubsNum + ")";
	}

	// Miscellaneous 
	var pubs = document.getElementsByClassName("misc");
	    var pubsNum = pubs.length;
		
	var selector2 = "option[value=\'misc\']";
	var option = document.querySelectorAll(selector2);
	if(option[0]!=undefined){
		option[0].innerHTML="Miscellaneous (" + pubsNum + ")";
	}
}