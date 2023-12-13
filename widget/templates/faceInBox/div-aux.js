/*
This script build a side panel with FAQ
info@botgenes.com
fileUrl + '/' + botid + '/
*/
//api_json = "https://i.botgenes.org"

function setXtoBtnCloseDivAux() {
	if (typeof noIconBtnCloseDivAux !== 'undefined'){
		if (noIconBtnCloseDivAux){
			$("#div-aux-closeButton").html("<span class='closeLetterX'>X</span>");
		}
	}
}

$.get(api_faq+"/bot/"+botid.replace("BG","")+"/faqs/api", function() {
             
	}).done(function(faq) {
				
	    // TO DO ON DONE
		console.log("BG: building div auxiliar");
		$("head").append($("<link rel='stylesheet' href='"+styled_path+"/div-aux.css' type='text/css' media='screen' />"));
		//$("head").append($("<link href='https://use.fontawesome.com/releases/v5.0.2/css/all.css' rel='stylesheet'>"));
		
		$( "#div_aux_show" ).append( '<div id="div-aux"><div class="div-aux-header"><span class="div-aux-title-header">'+textFAQTitle+'</span><div class="BotClose BotMenuButton" id="div-aux-closeButton"></div></div></div>' ).hide();
		
		//$( '<div class="closeButton BotMenuButton" id="div-aux-open" style="cursor:pointer;"><i class="fas fa-question-circle"></i></div>' ).appendTo( ".BotHeader" );

		$( '<div id="faq-list-aux"><ul id="ul-faq-list-aux"></ul></div>' ).appendTo( "#div-aux" );

			$.each( faq, function( key, item ) {
				$( '<a href="#/" class="closeAfterClick" onclick="helpMe(this)"><li>'+item.question+'</li></a>' ).appendTo( "#ul-faq-list-aux" );
			});
		
		if(firstChildListButton) $("#ul-faq-list-aux:first-child").css('border-top', cssFirstChildListButton);
		
		if(isMobile() && window.innerWidth > window.innerHeight){
			$("#ul-faq-list-aux")
				.css('height', window.innerHeight - 130);
		}
		
		if(isDraggableAux) $(".div-aux-header").css("cursor","move");
		
		setXtoBtnCloseDivAux();
		
		if (showIconButtonOnlyInMobile == false) {
			$(iconButtonClose).appendTo("#div-aux-closeButton");
		} else {
			if (isMobile() && window.innerWidth < 720) { 
				$(iconButtonClose).appendTo("#div-aux-closeButton");
			}
		}
		
		$("#div-aux-closeButton").click(function(){
			$("#div_aux_show")[methodEffectAux](speedEffectAux);
		});

		$(document).on('click', "a.closeAfterClick", function() {
			$("#div_aux_show")[methodEffectAux](speedEffectAux);
		});
	
		
	}).fail(function(data, textStatus, xhr) {
		 //This shows status code eg. 403
		 console.log("BG error", data.status);
		 //This shows status message eg. Forbidden
		 console.log("BG Status: "+xhr);
	}).always(function() {
		 //TO-DO after fail/done request.
		 console.log("BG ended");
	});


