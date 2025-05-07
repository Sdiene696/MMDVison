

var menuBtn = document.querySelector(".menubtn")
var navLinks = document.querySelector(".navlinks")
var loGo = document.querySelector(".logo")

 menuBtn.addEventListener("click",toggleNav)

function toggleNav(){
	navLinks.classList.toggle("active")	
	loGo.classList.toggle("active")
}