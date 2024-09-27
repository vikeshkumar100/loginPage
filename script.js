let userid = document.getElementById("userid");
let pwd = document.getElementById("pwd");
let btn = document.getElementsByClassName("form-btn")[0];

//change btn color

window.addEventListener('load', () => {
    setTimeout(() => {
        const imageBox = document.querySelector('.image-box');
        imageBox.classList.add('shrink'); 
    }, 400); 
});
function checkInputs() {
    if (userid.value !== "" && pwd.value !== "") {
        btn.style.backgroundColor = "rgba(33, 118, 33, 0.748)";
    } else {
        btn.style.backgroundColor = "";
    }
}
userid.addEventListener('input', checkInputs);
pwd.addEventListener('input', checkInputs);
