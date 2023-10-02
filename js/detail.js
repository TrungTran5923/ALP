//img change
const subImg = document.querySelectorAll(".b-subimg img");
const mainImg = document.querySelector(".b-mainimg ");

subImg.forEach((element) => {
    element.addEventListener("click", function () {
        mainImg.style.backgroundImage = `url('${element.getAttribute("src")}')`;
    });
});
//zoom img
mainImg.addEventListener("mousemove", function (e) {
    let width = mainImg.offsetWidth;
    let height = mainImg.offsetHeight;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    let bgPosX = (mouseX / width) * 100;
    let bgPosY = (mouseY / height) * 100;
    mainImg.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
});
mainImg.addEventListener("mouseleave", function () {
    mainImg.style.backgroundPosition = "center";
});

// amount cal

let amountNum = document.querySelector(".amount span");

const amountBtn = document.querySelectorAll(".amount-btn i");

amountBtn.forEach((element) => {
    element.addEventListener("click", function () {
        let calNum = parseInt(amountNum.innerHTML);
        if (element.getAttribute("id") == "minus" && calNum > 1) {
            amountNum.innerHTML = calNum -= 1;
        } else {
            amountNum.innerHTML = calNum += 1;
        }
    });
});

// change tab
const tabBtn = document.querySelectorAll(".b-tab p");
const tabContent = document.querySelectorAll(".b-info p");
tabBtn.forEach((tab) => {
    tab.addEventListener("click", function () {
        tabBtn.forEach((tab2) => {
            tab2.classList.remove("active");
        });
        tab.classList.add("active");
        tabContent.forEach((content) => {
            if (tab.getAttribute("data-tab") == content.getAttribute("data-tab")) {
                content.classList.add("active");
            } else {
                content.classList.remove("active");
            }
        });
    });
});

//show btn
const showBtn = document.querySelectorAll(".btn button");
const info = document.querySelector(".b-info section");

showBtn.forEach((element, index) => {
    element.addEventListener("click", function () {
        if (element.getAttribute("id") == "more") {
            info.classList.add("active");
            showBtn[index].style.display = "none";
            showBtn[index].nextElementSibling.style.display = "block";
        } else {
            info.classList.remove("active");
            showBtn[index].style.display = "none";
            showBtn[index].nextSibling.style.display = "block";
        }
    });
});
