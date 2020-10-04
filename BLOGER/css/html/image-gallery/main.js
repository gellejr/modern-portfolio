const current = document.querySelector("#current");
const imgs    = document.querySelectorAll(".imgs img");
const opacity = 0.6;

//set first inmage opacity
imgs[0].style.opacity = opacity;

 imgs.forEach(img => img.addEventListener("click", imgClick));

 function imgClick(e) {
   // Reset the opacity 
   imgs.forEach(img => (img.style.opacity = 1));
 	// Change current image to src of clicked image
 	current.src = e.target.src;

 	// add fade in calss
 	current.classList.add("fade-in")

 	// remove fade-in class after 0.5 second
 	setTimeout(() => current.classList.remove("fade-in"),
 		500);
 	// Change the opacity to opacity var
 	e.target.style.opacity = opacity;
 }  

