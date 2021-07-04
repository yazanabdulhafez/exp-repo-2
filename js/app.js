'use strict';

let imgArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById('leftImage');
let centerImage = document.getElementById('centerImage');
let rightImage = document.getElementById('rightImage');

////////////// constructor /////////////////////////

function Pictuer(name, source) {
  this.name = name;
  this.source = `./img/${source}`;
  this.veiws = 0;
  Pictuer.all.push(this);
}
Pictuer.all = [];

///////////////////// make new objects ///////////////////

for (let i = 0; i < imgArray.length; i++) {
  new Pictuer(imgArray[i].split('.')[0], imgArray[i]);

}

/////////////// render function ////////////////

function render() {
  let leftImageIndex = randomNumber(0, imgArray.length - 1);
  let centerImageIndex;
  let rightImageIndex;
  do {
    centerImageIndex = randomNumber(0, imgArray.length - 1);
    rightImageIndex = randomNumber(0, imgArray.length - 1);
  } while (centerImageIndex === leftImageIndex || centerImageIndex === rightImageIndex || leftImageIndex === rightImageIndex);


  leftImage.src = Pictuer.all[leftImageIndex].source;
  centerImage.src = Pictuer.all[centerImageIndex].source;
  rightImage.src = Pictuer.all[rightImageIndex].source;
  console.log(Pictuer.all[leftImageIndex]);
  console.log(Pictuer.all[centerImageIndex]);
  console.log(Pictuer.all[rightImageIndex]);
}
render();
let counter = 0;

function clickEventHandler(event) {
  if ((event.target.id === 'rightImage' || event.target.id === 'leftImage' || event.target.id === 'centerImage') && counter < 10) {
    render();
    console.log(counter);
    counter++;

  }

}


imageSection.addEventListener('click', clickEventHandler);







/////////////// random index generator ///////////////////////

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}