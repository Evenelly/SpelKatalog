let slideIndex = 0;
showSlides(slideIndex);

function navSlides(n){
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("slideShowImage");
    let text = document.getElementsByClassName("slideShowText")

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        text[i].style.display="none";
    } 

    if(slideIndex > slides.length - 1){
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block"; 
    text[slideIndex].style.display = "block";
}



