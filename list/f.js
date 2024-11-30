// Slider 1
const prevBtn1 = document.querySelector(".prev-btn-1");
const nextBtn1 = document.querySelector(".next-btn-1");
const sliderContainer1 = document.querySelector(".slider-container-1");

prevBtn1.addEventListener("click", () => {
    sliderContainer1.scrollBy({ left: -200, behavior: "smooth" });
});

nextBtn1.addEventListener("click", () => {
    sliderContainer1.scrollBy({ left: 200, behavior: "smooth" });
});

// Slider 2
const prevBtn2 = document.querySelector(".prev-btn-2");
const nextBtn2 = document.querySelector(".next-btn-2");
const sliderContainer2 = document.querySelector(".slider-container-2");

prevBtn2.addEventListener("click", () => {
    sliderContainer2.scrollBy({ left: -200, behavior: "smooth" });
});

nextBtn2.addEventListener("click", () => {
    sliderContainer2.scrollBy({ left: 200, behavior: "smooth" });
});
