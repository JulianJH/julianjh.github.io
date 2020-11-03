var big = document.getElementById('bignav');
var small = document.getElementById('smallnav');
var width = window.innerWidth || document.body.clientWidth;
var height = screen.height;
var expanded = false;

// Window Functions
window.onresize = resize;
window.onload = resize;

function resize () {
	width = window.innerWidth || document.body.clientWidth;

	if (width <= 690) {
		if (!document.getElementById("header-nav").classList.contains("hidden") && !expanded) {
			hide(document.getElementById("header-nav"));
		}
	} else if (width > 690){
		if (expanded) {
			unfoldMenu(document.getElementById("menubar"));
		} else {
			unhide(document.getElementById("header-nav"));
		}
	}

    if (width <= 490) {
		hide(big);
		unhide(small);
		document.getElementById("branding").getElementsByTagName("h1")[0].innerHTML = "JP";
	} else {
		unhide(big);
		hide(small);
		if (width <= 985) {
			document.getElementById("branding").getElementsByTagName("h1")[0].innerHTML = "P";
		} else {
			document.getElementById("branding").getElementsByTagName("h1")[0].innerHTML = "Portfolio";
		}
	}
}

// Hiding elements
function unhide (element) {
	element.classList.remove('hidden')
}

function hide (element) {
	element.classList.add('hidden')
}

function toggleHide (element) {
	element.classList.toggle('hidden')
}

// Customizing forms
document.querySelector( "input" ).addEventListener( "invalid", function( event ) {
    event.preventDefault();
    console.log(this);
    this.classList.add("input-error");
});

//Animating MenuBar
document.getElementById("menubar").onclick = function() {unfoldMenu(document.getElementById("menubar"))};

function unfoldMenu(x) {
    x.classList.toggle("change");
    toggleHide(document.getElementById("header-nav"));
    expanded = !expanded;
}

function targetPopup(targ) {
	if (targ.getAttribute("filled") == "yes") {
    window.open('about:blank','formpopup','scroll=no,resizable=no,width=400,height=500,left = ' + ((width/2)-200) + ',top = ' + (height-500)/2);
    targ.target = 'formpopup';
	} else {
		event.preventDefault();
	}
}

function checkForm(form) {
	form = form.parentElement;
	var errors = form.getElementsByClassName("errors");
	errors = errors[0].getElementsByTagName("label");
	var fields = form.getElementsByClassName('required');
	for (i = fields.length - 1; i >= 0; i--) {
		if (!fields[i].value) {
			unhide(errors[i]);
			form.setAttribute("filled", "no");
		} else {
			hide(errors[i]);
		}
	}
	if (form.getAttribute("filled") == "") {
		form.setAttribute("filled", "yes");
	} else {
		form.setAttribute("filled", "");
	}
}
