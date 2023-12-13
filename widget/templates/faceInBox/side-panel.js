/*
This script build a side panel with FAQ
info@botgenes.com
fileUrl + '/' + botid + '/
*/

function setXtoBtnCloseSidePanel() {
	if (typeof noIconBtnCloseSidePanel !== 'undefined'){
		if (noIconBtnCloseSidePanel){
			$("#side-panel-closeButton").html("<span class='closeLetterX'>X</span>");
		}
	}
}
$.get(api_faq+"/bot/"+botid.replace("BG","")+"/faqs/api", function() {
             
	}).done(function(faq) {
				
		showMessageInConsole("building side panel");
		$("head").append($("<link rel='stylesheet' href='"+styled_path+"/side-panel.css' type='text/css' media='screen' />"));
		
		if(typeof tooltipFAQ !== "undefined") {
			var class_tooltip = "tooltip-toggle";
			var tooltip_call = "data-tooltip='"+tooltipFAQ+"'";
		} else {
			var class_tooltip = "";
			var tooltip_call = "";
		}

		//$( '' ).appendTo( ".BotHeader" );
		$('.primaryButton').last().after("<div class='faqIconButton BotMenuButton "+class_tooltip+"' id='side-panel-open' "+tooltip_call+" style='cursor:pointer;'><i class='fa fa-question-circle'></i></div>");
		
		$( '<div id="side-panel"><div class="side-panel-header"><span class="side-title-header">'+textFAQTitle+'</span><div class="faqIconCloseButton BotClose BotMenuButton" id="side-panel-closeButton"><i class="fa fa-times-circle"></i></div></div></div>' ).appendTo( "#BotWrapper" );

		$( '<div id="faq-list"><ul id="ul-faq-list"></ul></div>' ).appendTo( "#side-panel" );

			$.each( faq, function( key, item ) {
				$( '<a href="javascript:void(0);" onclick="helpMe(this)"><li>'+item.question+'</li></a>' ).appendTo( "#ul-faq-list" );
			});         

		$("#side-panel").css('display', 'visible');

		setXtoBtnCloseSidePanel();

		$("#side-panel-closeButton").click(function(){
			$("#side-panel").fadeOut(500);
		});
		$("#side-panel-open").click(function(){
			$("#side-panel").fadeToggle(500);
		});
		
		if (typeof withImageSidePanel != 'undefined') {
			if (withImageSidePanel == true) {
				$("#faq-list").after("<div id='imgSidePanel'><img src='"+styled_path+"/images/imgSidePanel.png' /></div>");
			}
		}


	}).fail(function(data, textStatus, xhr) {
		 //This shows status code eg. 403
		 showMessageInConsole("error", data.status);
		 //This shows status message eg. Forbidden
		 showMessageInConsole("Status: "+xhr);
	}).always(function() {
		 //TO-DO after fail/done request.
		 showMessageInConsole("ended side panel");
	});


