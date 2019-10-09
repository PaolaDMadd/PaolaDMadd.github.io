const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = carouselSlide.querySelectorAll('img');
//buttons
const prevBTN = document.querySelector('#prevBTN');
const nextBTN = document.querySelector('#nextBTN');
const pauseBTN = document.querySelector('#pauseBTN');
const playBTN = document.querySelector('#playBTN');

//Counter
let counter = 1;

function goNext() {
  if(counter >= carouselImage.length -1) return;
  let size = carouselImage[0].clientWidth;
  console.log(size);
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter)+ 'px)';
}

function goPrev() {
  if(counter <= 0) return;
  let size = carouselImage[0].clientWidth;
  console.log('Previous size  is: ' + size);
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform= 'translateX(' + (-size * counter)+ 'px)';
  }

  //checking keypress clicked
  function checkKeyPress(pressedKey){
    pressedKey = pressedKey || window.event;
  if (pressedKey.keyCode == '37'){
    // console.log("the left key has been pressed");
    goPrev();
  }
  else if(pressedKey.keyCode == '39'){
    // console.log("the right key has been pressed");
    goNext();
  }
  }

  //key press addEventListener
  document.onkeydown = checkKeyPress;

//nextBTN
nextBTN.addEventListener('click', goNext);

//prevBTN
prevBTN.addEventListener('click', goPrev);

//transition to jump back to the 1st image = eptagono_JS
carouselSlide.addEventListener ('transitionend',() => {
  let size = carouselImage[0].clientWidth;
  if (carouselImage[counter].id === 'lastImg'){
    carouselSlide.style.transition = 'none';
    counter = carouselImage.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter)+ 'px)';
}
//transition to jump back to the last image
  if (carouselImage[counter].id === 'FirstImg'){
    let size = carouselImage[0].clientWidth;
    carouselSlide.style.transition = 'none';
    counter = carouselImage.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter)+ 'px)';
}});

var autoTimer = setInterval(goNext, 2000);
var isCarouselInPlay = true;
pauseBTN.addEventListener('click', () =>
{ if(isCarouselInPlay){
  clearInterval(autoTimer);}
  isCarouselInPlay = false;
});

playBTN.addEventListener('click', () =>
{ if(isCarouselInPlay !== true) {
  autoTimer = setInterval(goNext, 2000)
  isCarouselInPlay = true;
}
});
