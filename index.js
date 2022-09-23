"use strict"

const navShow = document.querySelector(".nav-show");
const addActiveClass = document.querySelector(".nav");
const closeNav = document.querySelector(".close-btn");
const overlay = document.querySelector(".ov");
const secOne = document.querySelector(".sec-1");
const header = document.querySelector(".header");
const navLinks = document.querySelector(".nav-links");
const one = document.querySelectorAll(".one");
const allImg = document.querySelectorAll(`img[data-src]`);
const learn = document.querySelector(".learn");
const about = document.querySelector(".about");
const allMenus = document.querySelectorAll(".menu")




// ADDING EVENT LISTENERS
navShow.addEventListener("click", (e) => {
   addActiveClass.classList.add("active");
   overlay.classList.add("overlay");
});

closeNav.addEventListener("click", (e) => {
   addActiveClass.classList.remove("active");
   overlay.classList.remove("overlay");
});

overlay.addEventListener("click", (e) => {
   addActiveClass.classList.remove("active");
   overlay.classList.remove("overlay");
});

document.addEventListener("keydown", (e) => {
   if(e.key === "Escape"){
      addActiveClass.classList.remove("active");
      overlay.classList.remove("overlay");
   }
})


// REVEALING NAVBAR ON SCROLL
const secOneCall = function (ens, ob) {
   const [en] = ens;
   if(!en.isIntersecting){
      header.classList.add("header-change")
   }else{
      header.classList.remove("header-change")
   };
};


const secOneOp = {
   root:null,
   threshold:0.2
}

const secOneInt = new IntersectionObserver(secOneCall, secOneOp);

secOneInt.observe(secOne);

// SCROLLING TO SECTION ON CLICK & CHANGING ACTIVE MENU

function removeACtiveMenu(){
   allMenus.forEach((mov) => {
      mov.classList.remove("border")
   })
}



navLinks.addEventListener("click", (e) => {
   e.preventDefault()
   removeACtiveMenu()
   if(e.target.classList.contains("menu")){
      e.target.classList.add("border")
      const no = e.target.dataset.tab
      const sic = document.getElementById(`sec-${no}`).getBoundingClientRect();
      window.scrollTo({
         left: sic.left + window.pageXOffset,
         top : sic.top + window.pageYOffset,
         behavior : "smooth"
      })
   }
});



// ABOUT SECTION
learn.addEventListener("click", (e) => {
   e.preventDefault()
      const sic = about.getBoundingClientRect();
      window.scrollTo({
         left: sic.left + window.pageXOffset,
         top : sic.top + window.pageYOffset,
         behavior : "smooth"})
});






// REALEVING ELEMENT ON SCROLL

const reOp = {
   root : null,
   threshold : [0,0.2,0.5]
};



const reCall = function(entries, observer) {
   entries.forEach((entry) => {
      if(!entry.isIntersecting) return;
      if(entry.isIntersecting){
         entry.target.classList.remove("hid");
      }else{
         observer.unobserve(entry.target)
      }

   } )
}

const reveal = new IntersectionObserver(reCall, reOp);

one.forEach((mov) => {
   mov.classList.add("hid");
   reveal.observe(mov)
})

const reO = {
   root : null,
   threshold : [0,0.2,0.5]
};

const reCal = function(entries, observer) {
   const [entry] = entries;
   if(!entry.isIntersecting) return;
   if(entry.isIntersecting){
      entry.target.classList.remove("hid");
   }else{
      observer.unobserve(entry.target)
   }
}
const revea = new IntersectionObserver(reCall, reOp);

allImg.forEach((mov) => {
   mov.classList.add("hid");
   revea.observe(mov)
});


// USING INTERSECTION API TO ADD ACTIVE LINK

const bordCall = function(entries, observer){
   const [entry] = entries;
   if(entry.isIntersecting){
      removeACtiveMenu()
      if(entry.isIntersecting){
         const id = entry.target.id
      document.querySelector(`.${id}1`).classList.add("border")
      }
   }
};

const bordOp = {
   root : null,
   threshold : 0.5
}

const allsec = document.getElementsByTagName("section");
const bord = new IntersectionObserver(bordCall, bordOp);

Array.from(allsec).forEach((mov) => {
   bord.observe(mov)
})

