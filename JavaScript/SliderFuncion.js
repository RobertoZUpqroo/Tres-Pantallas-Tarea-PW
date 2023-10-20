document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const sliderInner = document.querySelector(".slider-inner");
    const images = document.querySelectorAll(".slider-inner img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let index = 0;

    function showImage() {
        const percentage = index * -100;
        sliderInner.style.transform = "translateX(" + percentage + "%)";
    }

    function nextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        showImage();
    }

    function prevImage() {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        showImage();
    }

    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);

    setInterval(nextImage, 5000);
});




