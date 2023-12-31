const API_LINK = `http://localhost:3000`;

const header = document.querySelector(".s-header");
const footer = document.querySelector(".s-footer");
console.log(header);
// Hiển thị Header fixed
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});
function renderHeader() {
    header.innerHTML += `<div class="container">
    <div class="b-topheader">
        <div class="b-brandname">
            <p>Accessoire la plante</p>
        </div>
        <div class="b-logo">
            <img src="img/logo/ALP - img.png" onclick="showPage('index')" />
        </div>
        <div class="b-function">
            <div class="b-search">
                <input type="text" placeholder="Tìm kiếm sản phẩm" />
                <i class="fa-regular fa-magnifying-glass"></i>
            </div>
            <div class="b-cart" onclick="showPage('cart')" >
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                <div class="b-cart-amount"><span>1</span></div>
                <div class="b-cart-hover">
                    <p class="note" style="display: none">Giỏ hàng trống</p>
                    <div class="b-cart-content">
                        <img src="img/gallery/gallery-1.jpeg" alt="" />
                        <div class="b-cart-text">
                            <p>ALP Brown Handbags</p>
                            <p class="price"><span>800.000</span>đ</p>
                        </div>
                    </div>
                    <div class="b-cart-content">
                        <img src="img/gallery/gallery-1.jpeg" alt="" />
                        <div class="b-cart-text">
                            <p>ALP Brown Handbags</p>
                            <p class="price"><span>800.000</span>đ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-account">
                <i class="fa-sharp fa-solid fa-user user" style="display: none"></i>
                <i class="fa-solid fa-right-to-bracket login" onclick="showPage('login')"></i>
            </div>
        </div>
    </div>
    <div class="b-botheader">
        <div class="b-logo">
            <img src="img/logo/ALP - Logofull final.png" onclick="showPage('index')" />
        </div>
        <div class="b-menu">
            <ul>
                <li><a href="index.html">TRANG CHỦ</a></li>
                <li>
                    <a href="shop.html">CỬA HÀNG <i class="fa-sharp fa-light fa-angle-down"></i></a>
                    <ul class="b-submenu">
                        <li><a href="shop.html">TÚI BIRKIN</a></li>
                        <li><a href="shop.html">TÚI CẦM TAY</a></li>
                        <li><a href="shop.html">VÍ</a></li>
                        <li><a href="shop.html">PHỤ KIỆN</a></li>
                    </ul>
                </li>
                <li><a href="about.html">VỀ CHÚNG TÔI</a></li>
                <li><a href="service.html">DỊCH VỤ</a></li>
                <li><a href="contact.html">LIÊN HỆ</a></li>
            </ul>
        </div>
        <div class="b-function">
        <div class="b-search">
                <input type="text" placeholder="Tìm kiếm sản phẩm" />
                <i class="fa-regular fa-magnifying-glass"></i>
            </div>
            <div class="b-cart" onclick="showPage('cart')">
                <i class="fa-sharp fa-solid fa-cart-shopping" ></i>
                <div class="b-cart-amount"><span>1</span></div>
                <div class="b-cart-hover">
                    <p class="note" style="display: none">Your cart is empty</p>
                    <div class="b-cart-content" onclick="showPage('cart')">
                        <img src="img/gallery/gallery-1.jpeg" alt="" />
                        <div class="b-cart-text">
                            <p>ALP Brown Handbags</p>
                            <p class="price"><span>800.000</span>đ</p>
                        </div>
                    </div>
                    <div class="b-cart-content">
                        <img src="img/gallery/gallery-1.jpeg" alt="" />
                        <div class="b-cart-text">
                            <p>ALP Brown Handbags</p>
                            <p class="price"><span>800.000</span>đ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-account">
                <i class="fa-sharp fa-solid fa-user user" style="display: none"></i>
                <i class="fa-solid fa-right-to-bracket login" onclick="showPage('login')"></i>
            </div>
            <div class="b-menu-btn">
        <div></div></div>
        </div>
        
    </div>
</div>`;
}
function renderFooter() {
    footer.innerHTML += `<div class="container">
    <div class="s_top">
        <div class="s_left">
            <div class="s_logo"><img src="img/logo/ALP - Logofull final.png" alt="" /></div>
            <div class="s_info">
                <div class="s_info-detail">
                    <i class="fa-sharp fa-regular fa-location-dot"></i>
                    <span>279 Nguyễn Tri Phương , Quận 10 , TP.HCM</span>
                </div>
                <div class="s_info-detail">
                    <i class="fa-sharp fa-solid fa-envelope"></i>
                    <span>ALP@gmail.com</span>
                </div>
                <div class="s_info-detail">
                    <i class="fa-regular fa-phone-volume"></i>
                    <span>(+84) 0902368316</span>
                </div>
                <div class="s_social">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
        <div class="s_mid">
            <ul>
                <li><a href="home.html">Trang chủ</a></li>
                <li><a href="shop.html">Cửa hàng</a></li>
                <li><a href="about.html">Về chúng tôi</a></li>
                <li><a href="service.html">Dịch vụ</a></li>
                <li><a href="contact.html">Liên hệ</a></li>
            </ul>
        </div>
        <div class="s_right">
            <h4>NEWSLETTER</h4>
            <p>Nhận thông báo mới nhất về sản phẩm mới và ưu đãi!</p>
            <div class="s_email">
                <input type="text" placeholder="Nhập email của bạn" />
                <i class="fa-sharp fa-solid fa-paper-plane"></i>
            </div>
        </div>
    </div>
    <div class="s_bottom">
        <div class="s_copyright">
            <p>ALP.All Rights Reserved</p>
        </div>
        <div class="s_pay">
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-cc-paypal"></i>
            <i class="fa-brands fa-cc-mastercard"></i>
        </div>
    </div>
</div>`;
}
// Hiển thị Header Footer
renderHeader();
renderFooter();
// Chuyển trang
function showPage(page) {
    window.location.href = `${page}.html`;
}
let btnMenu = document.querySelector(".b-menu-btn");
let menu = document.querySelector(".b-menu ul");
console.log(menu);
btnMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
});

// Nút quay về đầu trang
const scrollBtn = document.querySelector(".c-scroll-btn");
scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.scrollIntoView({
        behavior: "smooth",
    });
});
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        scrollBtn.classList.add("active");
    } else {
        scrollBtn.classList.remove("active");
    }
});

// Hàm chuyển chữ số thành tiền
function convertMoney(num, separator) {
    separator = separator === undefined ? "." : separator;
    num = String(num).replace(/[^0-9]/g, "");
    if (!isNaN(num)) {
        var array = num.toString().split("");
        var index = -3;
        while (array.length + index > 0) {
            array.splice(index, 0, separator);
            index -= 4;
        }
        return array.join("");
    }
}
// Hàm chuyển tiền thành chữ số
function convertNumber(str) {
    return str.replace(/[^0-9]/g, "");
}
