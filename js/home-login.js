const API_LINK = `http://localhost:3000`;

const header = document.querySelector(".s-header");
const footer = document.querySelector(".s-footer");
console.log(header);
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
            <img src="img/logo/ALP - img.png" alt="" />
        </div>
        <div class="b-function">
            <div class="b-search">
                <input type="text" placeholder="Search your products" />
                <i class="fa-regular fa-magnifying-glass"></i>
            </div>
            <div class="b-cart" href="cart.html">
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                <div class="b-cart-amount"><span>1</span></div>
                <div class="b-cart-hover">
                    <p class="note" style="display: none">Your cart is empty</p>
                    <div class="b-cart-content">
                        <img src="img/gallery/gallery-1.jpeg" alt="" />
                        <div class="b-cart-text">
                            <p>ALP Brown Handbags</p>
                            <p class="price">$ <span>800</span></p>
                        </div>
                    </div>
                    <div class="b-cart-content">
                        <img src="img/gallery/gallery-1.jpeg" alt="" />
                        <div class="b-cart-text">
                            <p>ALP Brown Handbags</p>
                            <p class="price">$ <span>800</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-account">
                <i class="fa-sharp fa-solid fa-user user" ></i>
                <i class="fa-solid fa-right-to-bracket login" style="display: none"></i>
            </div>
        </div>
    </div>
    <div class="b-botheader">
        <div class="b-logo">
            <img src="img/logo/ALP - Logofull final.png" alt="" />
        </div>
        <div class="b-menu">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li>
                    <a href="shop.html">SHOP</a>
                    <ul class="b-submenu">
                        <li><a href="shop.html">BIRKIN</a></li>
                        <li><a href="shop.html">HANDBAG</a></li>
                        <li><a href="shop.html">PURSE</a></li>
                        <li><a href="shop.html">ACCESSORIES</a></li>
                    </ul>
                </li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="service.html">SERVICES</a></li>
                <li><a href="contact.html">CONTACT</a></li>
            </ul>
        </div>
        <div class="b-function">
            <div class="b-cart">
                <i class="fa-sharp fa-solid fa-cart-shopping" href="cart.html"></i>
                <div class="b-cart-amount"><span>1</span></div>
                <div class="b-cart-hover">
                    <p class="note" style="display: none">Your cart is empty</p>
                    <div class="b-cart-content">
                        <img src="img/gallery/gallery-1.jpeg" alt="" />
                        <div class="b-cart-text">
                            <p>ALP Brown Handbags</p>
                            <p class="price">$ <span>800</span></p>
                        </div>
                    </div>
                    <div class="b-cart-content">
                        <img src="img/gallery/gallery-1.jpeg" alt="" />
                        <div class="b-cart-text">
                            <p>ALP Brown Handbags</p>
                            <p class="price">$ <span>800</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-account">
                <i class="fa-sharp fa-solid fa-user user" onclick="showPage('user-setting')" ></i>
                <i class="fa-solid fa-right-to-bracket login" style="display: none"></i>
            </div>
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
                    <span>11 The Avenue, United of Kingdom</span>
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
                <li><a href="home.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="service.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
        <div class="s_right">
            <h4>NEWSLETTER</h4>
            <p>Get a notification for New products and New discount</p>
            <div class="s_email">
                <input type="text" placeholder="Enter your email" />
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
renderHeader();
renderFooter();
