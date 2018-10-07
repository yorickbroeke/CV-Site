function tileToggle(x) {
    var i;
    var tileCount = document.getElementsByClassName("explain");
    for (i = 0; i < tileCount.length; i++) {
        tileCount[i].style.display = "none";  
    }								
    tileCount[x-1].style.display = "inline-block";  
}
			
function itemToggle(x){
    var i;
    var itemCount = document.getElementsByClassName("explain");
    for (i = 0; i < itemCount.length; i++) {
        itemCount[i].style.display = "none";  
    }
    
    
    itemCount[x-1].style.display = "inline-block";  
}

var slideIndex = 2;
showSlides(slideIndex);

function slideCount(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideOn");
    if (n > slides.length) {
        slideIndex = 1;
    }   
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }				
    
    slides[slideIndex-1].style.display = "block";  
}
