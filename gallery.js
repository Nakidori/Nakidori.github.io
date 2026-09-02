/* =========================================
   GALLERY CAROUSEL
========================================= */

const gallerySlides = {

    portrait: 0,

    landscape: 0,

    stilllife: 0

};


/* =========================================
   CHANGE SLIDE
========================================= */

function changeSlide(category, direction) {

    const carousel = document.getElementById(
        category + "-carousel"
    );

    const slides = carousel.querySelectorAll(
        ".carousel-image"
    );

    gallerySlides[category] += direction;


    if (gallerySlides[category] < 0) {

        gallerySlides[category] =
            slides.length - 1;

    }


    if (gallerySlides[category] >= slides.length) {

        gallerySlides[category] = 0;

    }


    updateCarousel(category);

}


/* =========================================
   UPDATE CAROUSEL
========================================= */

function updateCarousel(category) {

    const carousel = document.getElementById(
        category + "-carousel"
    );

    const slides = carousel.querySelectorAll(
        ".carousel-image"
    );

    const dots = document.getElementById(
        category + "-dots"
    ).querySelectorAll(
        ".carousel-dot"
    );


    slides.forEach((slide, index) => {

        slide.classList.toggle(
            "active",
            index === gallerySlides[category]
        );

    });


    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === gallerySlides[category]
        );

    });

}


/* =========================================
   CREATE DOTS
========================================= */

function createDots(category) {

    const carousel = document.getElementById(
        category + "-carousel"
    );

    const slides = carousel.querySelectorAll(
        ".carousel-image"
    );

    const dotContainer = document.getElementById(
        category + "-dots"
    );


    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");

        dot.setAttribute(
            "aria-label",
            "Go to photo " + (index + 1)
        );


        if (index === 0) {

            dot.classList.add("active");

        }


        dot.addEventListener(
            "click",
            function () {

                gallerySlides[category] = index;

                updateCarousel(category);

            }
        );


        dotContainer.appendChild(dot);

    });

}


/* =========================================
   EXPAND / COLLAPSE GALLERY
========================================= */

function toggleGallery(category) {

    const gallery = document.getElementById(
        category + "-gallery"
    );

    const button = gallery.previousElementSibling;


    gallery.classList.toggle("open");


    if (gallery.classList.contains("open")) {

        button.textContent =
            "Hide Photos ↑";

    } else {

        button.textContent =
            "View All " +
            category.charAt(0).toUpperCase() +
            category.slice(1) +
            " Photos ♡";

    }

}


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createDots("portrait");

        createDots("landscape");

        createDots("stilllife");

    }
);
