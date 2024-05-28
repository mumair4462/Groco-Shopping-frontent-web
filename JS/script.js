var searchBox = document.querySelector(".search-box")
var searchbtn = document.querySelector("#search-btn");

var loginbtn = document.querySelector("#login-btn");
var loginbox = document.querySelector(".login-form")


var menubtn = document.querySelector("#menu-btn")
var navbarList = document.querySelector(".navbar")


searchbtn.addEventListener('click',()=>{
    searchBox.classList.toggle("active")
    searchbtn.classList.toggle("fa-times")

    loginbox.classList.remove("login-active")
    loginbtn.classList.remove("fa-times")
    menubtn.classList.remove("fa-times")
    navbarList.classList.remove("nav-active")
});


loginbtn.addEventListener('click',()=>{
    loginbtn.classList.toggle("fa-times")
    loginbox.classList.toggle("login-active")

    searchBox.classList.remove("active")
    searchbtn.classList.remove("fa-times")
    menubtn.classList.remove("fa-times")
    navbarList.classList.remove("nav-active")
})

menubtn.addEventListener('click',()=>{
    menubtn.classList.toggle("fa-times")
    navbarList.classList.toggle("nav-active")

    searchBox.classList.remove("active")
    searchbtn.classList.remove("fa-times")
    loginbox.classList.remove("login-active")
    loginbtn.classList.remove("fa-times")
})




window.onscroll = function() {myFtn()};

function myFtn() {
    searchBox.classList.remove("active")
    searchbtn.classList.remove("fa-times")
    loginbox.classList.remove("login-active")
    loginbtn.classList.remove("fa-times")
    menubtn.classList.remove("fa-times")
    navbarList.classList.remove("nav-active")

  if (document.documentElement.scrollTop > 250) {
    document.querySelector(".top").classList.add("activ-top")
  }
  else{
    
    document.querySelector(".top").classList.remove("activ-top")
  }
}





var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});