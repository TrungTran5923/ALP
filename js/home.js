// slide banner
const slideBanner = document.querySelectorAll(".b-banner-slide");
const dots = document.querySelectorAll(".dot");
let currentBanner = 0;
const interval = 3000;

function changeSlide(n) {
    for (var i = 0; i < slideBanner.length; i++) {
        // reset
        slideBanner[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(" active", "");
    }

    currentBanner = n;

    slideBanner[currentBanner].style.opacity = 1;
    dots[currentBanner].className += " active";
}

// let timer = setInterval(changeSlide, interval);
// currentBanner = (currentBanner + 1) % slideBanner.length;

// if (n != undefined) {
//     clearInterval(timer);
//     timer = setInterval(changeSlide, interval);
//     currentBanner = n;
// }

// setInterval(function () {
//     if (currentBanner <= slideBanner.length) {
//         currentBanner += 1;
//         slideBanner[currentBanner].style.opacity = 1;
//         dots[currentBanner].className += " active";
//     } else {
//         currentBanner = 0;
//         slideBanner[currentBanner].style.opacity = 1;
//         dots[currentBanner].className += " active";
//     }
// }, 2000);

// new product tab
const tabBtn = document.querySelectorAll(".s_newproduct-type h5");
const tabContent = document.querySelectorAll(".s_newproduct-list");
tabBtn.forEach((tab) => {
    tab.addEventListener("click", function () {
        tabBtn.forEach((tab2) => {
            tab2.classList.remove("active");
        });
        tab.classList.add("active");
        tabContent.forEach((content) => {
            if (tab.getAttribute("id") == content.getAttribute("data-id")) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });
    });
});

//  countdown
let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

setInterval(() => {
    let now = new Date();
    let to = new Date(2023, 9, 8, 0, 0, 0);
    let timeRemain = to.getTime() - now.getTime();
    day.innerHTML = Math.floor(timeRemain / 86400000);
    hour.innerHTML = Math.floor((timeRemain % 86400000) / 3600000);
    minute.innerHTML = Math.floor((timeRemain % 3600000) / 60000);
    second.innerHTML = Math.floor((timeRemain % 60000) / 1000);
});

// change testi

const slideTesti = document.querySelectorAll(".b-testi-slide");
const changeDots = document.querySelectorAll(".b-change div");
let currentTesti = 0;

function changeSlideTesti(n) {
    for (var i = 0; i < slideTesti.length; i++) {
        // reset
        slideTesti[i].style.opacity = 0;
        changeDots[i].className = changeDots[i].className.replace("active", "");
    }

    currentTesti = n;

    slideTesti[currentTesti].style.opacity = 1;
    changeDots[currentTesti].className += "active";
}

// gallery

const galleryImg = document.querySelectorAll(".b-galleryshow img");
const popUp = document.querySelector(".b-popup");
const popUpImg = document.querySelector(".b-popup-img img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentIndex = 0;

function showPopup(params) {
    popUp.classList.add("active");
    popUpImg.src = galleryImg[currentIndex].src;
    // setInterval(() => {
    //     nextGallery();
    // }, 2000);
}
galleryImg.forEach((element, index) => {
    element.addEventListener("click", function () {
        currentIndex = index;
        showPopup();
    });
});
function nextGallery() {
    if (currentIndex < galleryImg.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showPopup();
}
function prevGallery() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = galleryImg.length - 1;
    }
    showPopup();
}
nextBtn.addEventListener("click", nextGallery);
prevBtn.addEventListener("click", prevGallery);
popUp.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        popUp.classList.remove("active");
        // clearInterval();
    }
});
document.addEventListener("keydown", function (event) {
    var keyCode = event.keyCode || event.which;
    if (keyCode === 27) {
        popUp.classList.remove("active");
    } else if (keyCode === 39) {
        nextGallery();
    } else if (keyCode == 37) {
        prevGallery();
    }
});
