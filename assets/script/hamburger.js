
let hamburgerClick  = document.querySelector('.sidebarOpen');

let hamburgerClose  = document.querySelector('.sidebarClose');



let menu  = document.querySelector('.menu');

hamburgerClick.addEventListener('click', function(){
    console.log('working');
    menu.style.display = "block";

})


hamburgerClose.addEventListener('click', function(){
    console.log('working');
    menu.style.display = "none";

})