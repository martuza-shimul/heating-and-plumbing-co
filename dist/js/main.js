const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
M.AutoInit();
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init({
    fullWidth: true
  });
  // instance = M.Carousel.init({

  //   });
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 750,
    autoplayHoverPause: true,
    animateOut: true,
    animateIn: true,
    loop: true,
    center: true,
    stagePadding: 20
    // nav: true
  });
});

const qepath = document.querySelector(".quote-engine-wrapper .first");
const qepathSecond = document.querySelector(".quote-engine-wrapper .second");
const qepathType = document.querySelector(".quote-engine-wrapper .type");
const qepathThird = document.querySelector(".quote-engine-wrapper .third");
const qepathFourth = document.querySelector(".quote-engine-wrapper .fourth");
const qepathLast = document.querySelector(".quote-engine-wrapper .last");
// let lists = document.querySelectorAll(".first-wrapper .first input");

const handleRadioClick = () => {
  qepath.classList.add("hide");
  qepathSecond.classList.remove("hide");
};

const handleSecond = () => {
  // e.preventDefault();
  qepathSecond.classList.add("hide");
  qepathType.classList.remove("hide");
};
const handleType = () => {
  qepathType.classList.add("hide");
  qepathThird.classList.remove("hide");
};
const handleThird = () => {
  qepathThird.classList.add("hide");
  qepathFourth.classList.remove("hide");
};
const handleFourth = () => {
  qepathFourth.classList.add("hide");
  qepathLast.classList.remove("hide");
};
// const handleSubmitSecond = (e) => {
//   e.preventDefault()
//   // qepathSecond.classList.add("hide");
//   // qepathType.classList.remove("hide");
// }
// Quote engin click card
// const qepath = document.querySelector(".first-wrapper");
// let lists = document.querySelectorAll(".first-wrapper .first input");

// // let check = 0;

// lists.forEach(list => {
//   if (list.checked) {
//     // check++;
//     document.querySelector(".first-wrapper").style.display = "none"
//   }
// });

// if (check>0) {
//   document.querySelector(".first-wrapper").style.display = "none"
// }

// var slider = document.getElementById('slider'),
//     sliderItems = document.getElementById('slides'),
//     prev = document.getElementById('prev'),
//     next = document.getElementById('next');

// function slide(wrapper, items, prev, next) {
//   var posX1 = 0,
//       posX2 = 0,
//       posInitial,
//       posFinal,
//       threshold = 100,
//       slides = items.getElementsByClassName('slide'),
//       slidesLength = slides.length,
//       slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
//       firstSlide = slides[0],
//       lastSlide = slides[slidesLength - 1],
//       cloneFirst = firstSlide.cloneNode(true),
//       cloneLast = lastSlide.cloneNode(true),
//       index = 0,
//       allowShift = true;

//   // Clone first and last slide
//   items.appendChild(cloneFirst);
//   items.insertBefore(cloneLast, firstSlide);
//   wrapper.classList.add('loaded');

//   // Mouse events
//   items.onmousedown = dragStart;

//   // Touch events
//   items.addEventListener('touchstart', dragStart);
//   items.addEventListener('touchend', dragEnd);
//   items.addEventListener('touchmove', dragAction);

//   // Click events
//   prev.addEventListener('click', function () { shiftSlide(-1) });
//   next.addEventListener('click', function () { shiftSlide(1) });

//   // Transition events
//   items.addEventListener('transitionend', checkIndex);

//   function dragStart (e) {
//     e = e || window.event;
//     e.preventDefault();
//     posInitial = items.offsetLeft;

//     if (e.type == 'touchstart') {
//       posX1 = e.touches[0].clientX;
//     } else {
//       posX1 = e.clientX;
//       document.onmouseup = dragEnd;
//       document.onmousemove = dragAction;
//     }
//   }

//   function dragAction (e) {
//     e = e || window.event;

//     if (e.type == 'touchmove') {
//       posX2 = posX1 - e.touches[0].clientX;
//       posX1 = e.touches[0].clientX;
//     } else {
//       posX2 = posX1 - e.clientX;
//       posX1 = e.clientX;
//     }
//     items.style.left = (items.offsetLeft - posX2) + "px";
//   }

//   function dragEnd (e) {
//     posFinal = items.offsetLeft;
//     if (posFinal - posInitial < -threshold) {
//       shiftSlide(1, 'drag');
//     } else if (posFinal - posInitial > threshold) {
//       shiftSlide(-1, 'drag');
//     } else {
//       items.style.left = (posInitial) + "px";
//     }

//     document.onmouseup = null;
//     document.onmousemove = null;
//   }

//   function shiftSlide(dir, action) {
//     items.classList.add('shifting');

//     if (allowShift) {
//       if (!action) { posInitial = items.offsetLeft; }

//       if (dir == 1) {
//         items.style.left = (posInitial - slideSize) + "px";
//         index++;
//       } else if (dir == -1) {
//         items.style.left = (posInitial + slideSize) + "px";
//         index--;
//       }
//     };

//     allowShift = false;
//   }

//   function checkIndex (){
//     items.classList.remove('shifting');

//     if (index == -1) {
//       items.style.left = -(slidesLength * slideSize) + "px";
//       index = slidesLength - 1;
//     }

//     if (index == slidesLength) {
//       items.style.left = -(1 * slideSize) + "px";
//       index = 0;
//     }

//     allowShift = true;
//   }
// }

// slide(slider, sliderItems, prev, next);
