var width = window.innerWidth || document.body.clientWidth;
var height = screen.height;

// Window Functions
window.onresize = resize;
window.onload = resize;

function resize () {
  width = window.innerWidth || document.body.clientWidth;

  if (width <= 385) {
    document.getElementById('extension').getElementsByTagName('h1')[0].getElementsByTagName('a')[0].innerHTML = "Extensión";
  } else {  
    document.getElementById('extension').getElementsByTagName('h1')[0].getElementsByTagName('a')[0].innerHTML = "Extensión (Servicios a la Comunidad)";
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