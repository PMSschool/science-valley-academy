let scrollIcon = document.querySelector("i.fa-solid.fa-arrow-up");

window.onscroll = function (){
  if(window.scrollY >= 600){
    scrollIcon.classList.add("show");
  }else{
    scrollIcon.classList.remove("show");
  }
};

scrollIcon.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
    
  });
};



let toggle = document.querySelector(".toggle");
let navInHead = document.querySelector("nav");
let closeNav = document.querySelector(".close");

toggle.onclick = function (){
  navInHead.classList.add("open");
}
closeNav.onclick = function (){
  this.parentElement.classList.remove("open");
}


