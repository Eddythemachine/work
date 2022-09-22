const navShow = document.querySelector(".nav-show");
const addActiveClass = document.querySelector(".nav");
const closeNav = document.querySelector(".close-btn");
const overlay = document.querySelector(".ov");
const secOne = document.querySelector(".sec-1");
const header = document.querySelector(".header");
const navLinks = document.querySelector(".nav-links");
const one = document.querySelectorAll(".one");
const allImg = document.querySelectorAll(`img[data-src]`);




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
   threshold:0.5
}

const secOneInt = new IntersectionObserver(secOneCall, secOneOp);

secOneInt.observe(secOne);

// SCROLLING TO SECTION ON CLICK



navLinks.addEventListener("click", (e) => {
   e.preventDefault()
   if(e.target.classList.contains("menu")){
      const no = e.target.dataset.tab
      const sic = document.getElementById(`sec-${no}`).getBoundingClientRect();
      window.scrollTo({
         left: sic.left + window.pageXOffset,
         top : sic.top + window.pageYOffset,
         behavior : "smooth"
      })
   }
});

// REALEVING ELEMENT ON SCROLL

const reOp = {
   root : null,
   threshold : 0.5
};

const reCall = function(entries, observer) {
   const [entry] = entries;
   if(!entry.isIntersecting) return;
   if(entry.isIntersecting){
      entry.target.classList.remove("hid");
   }else{
      observer.unobserve(entry.target)
   }
}
const reveal = new IntersectionObserver(reCall, reOp);

one.forEach((mov) => {
   mov.classList.add("hid");
   reveal.observe(mov)
})

const reO = {
   root : null,
   threshold :0.5
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
})