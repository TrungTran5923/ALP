const form = document.querySelector(".b-form");
const userName = document.querySelector('input[name="username"]');
const userEmail = document.querySelector('input[name="email"]');
const userPass = document.querySelector('input[name="password"]');
const userRepass = document.querySelector('input[name="repassword"]');

function showError(input, mess) {
    const formCtrl = input.parentElement;
    const error = formCtrl.querySelector(".error");
    formCtrl.classList.add("iserror");
    error.innerHTML = mess;
}
function showSuccess(input) {
    const formCtrl = input.parentElement;
    const error = formCtrl.querySelector(".error");
    formCtrl.classList.add("iserror");
    error.innerHTML = "";
}
function checkRequire(arrayInput) {
    let check = true;
    arrayInput.forEach((input) => {
        if (!input.value) {
            showError(input, "Không được để trống");
            check = false;
        } else {
            showSuccess(input);
            if (checkLength(userName, 5, 15) == false) {
                check = false;
            } else if (checkPass(userPass, 5) == false) {
                check = false;
            } else if (checkEmail(userEmail) == false) {
                check = false;
            } else if (checkPassSame(userPass, userRepass) == false) {
                check = false;
            }
        }
    });
    return check;
}
function checkLength(input, min, max) {
    let check = true;
    if (input.value.length < min) {
        showError(input, `${input.name} Không được nhỏ hơn ${min}`);
        check = false;
    } else if (input.value.length > max) {
        showError(input, `${input.name} Không được lớn hơn ${max}`);
        check = false;
    } else {
        showSuccess(input);
    }
    return check;
}
function checkPass(input, min) {
    let check = true;
    if (input.value.length < min) {
        showError(input, `${input.name} Không được nhỏ hơn ${min}`);
        check = false;
    } else if (!/[A-Z]/.test(input.value)) {
        showError(input, `${input.name} Không có ký tự Hoa`);
        check = false;
    } else if (!/[@#$%^&*]/.test(input.value)) {
        showError(input, `${input.name} Không có ký tự Đặc biệt`);
        check = false;
    } else {
        showSuccess(input);
    }
    return check;
}
function checkEmail(input) {
    let check = true;
    let re =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!re.test(input.value)) {
        showError(input, `${input.name} sai định dạng`);
        check = false;
    } else {
        showSuccess(input);
    }
    return check;
}
function checkPassSame(input1, input2) {
    let check = true;
    if (input1.value != input2.value) {
        showError(input2, `${input2.name} Mật khẩu không trùng hợp`);
        check = false;
    } else {
        showSuccess(input2);
    }
    return check;
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const arrayInput = [userName, userEmail, userPass, userRepass];
    if (checkRequire(arrayInput)) {
        let infoUser = {
            name: userName.value,
            email: userEmail.value,
        };
        localStorage.setItem("INFO", JSON.stringify(infoUser));
        window.location.href = "user-setting.html";
    }
});
