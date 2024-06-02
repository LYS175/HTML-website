//banner controller
let slideIndex1 = 0;
let slideIndex2 = 0;

function showSlides1() {
    const slides1 = document.querySelectorAll("#main_banner .slide");
    if (slideIndex1 >= slides1.length) { slideIndex1 = 0; }
    if (slideIndex1 < 0) { slideIndex1 = slides1.length - 1; }
    const offset1 = -slideIndex1 * 100;
    document.querySelector('.slideContainer1').style.transform = `translateX(${offset1}%)`;
}

function showSlides2() {
    const slides2 = document.querySelectorAll("#sub_banner .slide");
    if (slideIndex2 >= slides2.length) { slideIndex2 = 0; }
    if (slideIndex2 < 0) { slideIndex2 = slides2.length - 1; }
    const offset2 = -slideIndex2 * 100;
    document.querySelector('.slideContainer2').style.transform = `translateX(${offset2}%)`;
}

function plusSlides1(n) {
    slideIndex1 += n;
    showSlides1();
}

function plusSlides2(n) {
    slideIndex2 += n;
    showSlides2();
}

function autoSlide1() {
    slideIndex1++;
    showSlides1();
}

function autoSlide2() {
    slideIndex2++;
    showSlides2();
}

setInterval(autoSlide1, 2000); // Change main_banner slide every 5 seconds
setInterval(autoSlide2, 4000); // Change sub_banner slide every 5 seconds

// Initial call to display the first slide
showSlides1();
showSlides2();

//header controller
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
        // Scrolling down and not at the top of the page
        header.classList.add('hidden');
    } else {
        // Scrolling up or at the top of the page
        header.classList.remove('hidden');
    }

    if (scrollTop > header.offsetHeight) {
        // Scroll down beyond the header
        header.classList.add('sticky');
    } else {
        // Scroll up to the top of the page
        header.classList.remove('sticky');
    }

    lastScrollTop = scrollTop;
});