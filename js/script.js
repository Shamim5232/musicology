var search_bar=document.querySelector('#search_bar');
var searchBox=document.querySelector("#searchBox");
var menuBar=document.querySelector('#menuBar');
var MobileNav=document.querySelector("nav");

search_bar.onclick=()=>{
    search_bar.classList.toggle('fa-times');
    searchBox.classList.toggle('active');
    MobileNav.classList.remove('NavActive');
    menuBar.classList.remove('fa-times');
}
menuBar.onclick=()=>{
    menuBar.classList.toggle('fa-times');
    MobileNav.classList.toggle('NavActive');
    searchBox.classList.remove('active');
    search_bar.classList.remove('fa-times');
}
// window.onscroll=()=>{
//     search_bar.classList.remove('fa-times');
//     searchBox.classList.remove('active');
// }

// search_bar.onclick=()=>{
    
// }
// menuBar.onclick=()=>{
    
// }


jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});