window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const navo = document.querySelectorAll('#jojo1, #jojo2, #jojo3, #jojo4, #jojo5');


    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('navobaro').style.backgroundColor = "#fff";
        for (i = 0; i < navo.length; i++) {
            navo[i].style.color = "#000";
        }
        document.getElementById('logo').src = 'images/1.png'
    }
    else {
        document.getElementById('navobaro').style.backgroundColor = "rgba(0, 0, 0, 0.15)";
        for (i = 0; i < navo.length; i++) {
            navo[i].style.color = "#fff";
        }
        document.getElementById('logo').src = 'images/2.png'
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('service-img');
    let dots = document.getElementsByClassName('dots');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' act', '');
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += ' act';
}
