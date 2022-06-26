
function mouseOver() {
  document.getElementById("rs-list").style.display = "block";
}
function mouseOut() {
  document.getElementById("rs-list").style.display = "none";
}

/* MENU OPACITY ON SCROLL AND BTN TO TOP*/
var mybutton = document.getElementById("topBtn");
var nav = document.getElementById("top-menu");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
    //nav.classList.add("navbar-opacity");
    nav.style.display = "block";
  } else {
    mybutton.style.display = "none";
    nav.style.display = "none";
    //nav.classList.remove("navbar-opacity");
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* END MENU OPACITY ON SCROLL AND BTN TO TOP*/
/* OPEN FRAME */
function openFrame(event) {
  document.getElementById(event).style.display = "block";
}
/* END OPEN FRAME */
/* CLOSE FRAME */
function closeFrame(){
  document.querySelector(".frame-project").style.display = "none";  
  document.querySelector(".frame-project2").style.display = "none";  
  document.querySelector(".frame-project3").style.display = "none";  
}
/* END CLOSE FRAME */
/* GO TO LINKS */
function goRepo(event){
  window.open(event, "_blank");
}
/* END TO LINKS */
