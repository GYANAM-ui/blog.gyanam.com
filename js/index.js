// JavaScript functions

function project1() {
    window.open("https://7p08exzifrh9lahkvluqja-on.drv.tw/PROVID%20MEETI/");
}

function mail() {
    window.open("mailto:ggyanam869@gmail.com?Subject=Hello Blogger");
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function post1() {
    window.open("images/my.png");
}

function post2() {
    window.open("images/banner.jpg");
}

function post3() {
    window.open("images/apple.png");
}