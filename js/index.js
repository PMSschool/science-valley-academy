let scrollicon = document.querySelector("i.fa-solid.fa-arrow-up");

window.onscroll = function (){
  if(window.scrollY >= 600){
    scrollicon.classList.add("show");
  }else{
    scrollicon.classList.remove("show");
  }
}

scrollicon.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
    
  });
};



let toggleMenu = document.querySelector("i.fa-sharp fa-solid fa-bars-staggered");
let headUl = document.querySelector(".header-ul");

toggleMenu.onclick = function (){
  headUl.style.display = "flex";
}


