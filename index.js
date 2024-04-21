// Navbar
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.navMenu')
let logo = document.querySelector('.logo')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle('active')
    logo.classList.toggle('active')
})


// Search bar
let searchIcon = document.querySelector('#searchIcon')
let closeBtn = document.querySelector('#closeBtn')
let searchInput = document.querySelector('#searchInput')

searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle("active")
    closeBtn.classList.toggle("active")
    searchInput.classList.toggle("active")
    document.searchForm.searchInput.focus()
})
closeBtn.addEventListener("click", () => {
    closeBtn.classList.toggle("active")
    searchIcon.classList.toggle("active")
    searchInput.classList.toggle("active")
})




// Swiper
var swiper = new Swiper(".myCarSwiper", {
    slidesPerView: "1",
    // cssMode: true,
    // spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});