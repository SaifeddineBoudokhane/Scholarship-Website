
var lang = document.documentElement.lang;
var countDownDate = new Date("July 15, 2024 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
const countdown=document.getElementById("countdown");
const countdownSection=document.querySelector(".section-countdown");

switch(lang) {
    case "en":
        countdown.textContent = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
        break;
    case "fr":
        countdown.textContent = days + "j " + hours + "h "+ minutes + "m " + seconds + "s ";
        break;
    case "ar":
        countdown.textContent = days + "j " + hours + "h "+ minutes + "m " + seconds + "s ";
        break;
    default:
}

    
if (distance < 0) {
    clearInterval(x);
    switch(lang) {
        case "en":
            countdown.textContent = "EXPIRED";            
            countdownSection.style.backgroundColor = "var(--color-red)";
            document.querySelector("input#submit").value="Expired"
            break;
        case "fr":
            countdown.textContent = "EXPIRÉ";
            countdownSection.style.backgroundColor = "var(--color-red)";
            document.querySelector("input#submit").value="EXPIRÉ"
            break;
        case "ar":
            countdown.textContent = "منتهي الصلاحية";
            countdownSection.style.backgroundColor = "var(--color-red)";
            document.querySelector("input#submit").value="منتهي الصلاحية";
            break;
        default:
    }    
    document.querySelectorAll("input").forEach(function(input) {
        input.disabled = true;
    });
    document.querySelectorAll("select").forEach(function(input) {
        input.disabled = true;
    });
    document.querySelectorAll("textarea").forEach(function(input) {
        input.disabled = true;
    });
}
}, 1000);
const cookiePopup = document.getElementById('cookie-popup');

const acceptBtn = document.getElementById('accept-btn');
const rejectBtn = document.getElementById('reject-btn');

window.onload = function() {
  cookiePopup.showModal();
};

acceptBtn.addEventListener('click', function() {
  cookiePopup.close();
});

rejectBtn.addEventListener('click', function() {
  cookiePopup.close();
});
