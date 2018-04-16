'strict';

var buttonOne = document.getElementById('button1');
var buttonTwo = document.getElementById('button2');
var buttonThree = document.getElementById('button3');

var allProducts = [
  new Product('imgs/bag.jpg', 'Star Wars Bag'),
  new Product('imgs/banana.jpg', 'Banana Slicer'),
  new Product('imgs/bathroom.jpg', 'IPad Tpee Holder'),
  new Product('imgs/boots.jpg', 'Toeless Boots'),
  new Product('imgs/breakfast.jpg', 'All In One Breakfast Machine'),
  new Product('imgs/bubblegum.jpg', 'Meatball Bubblegum'),
  new Product('imgs/chair.jpg', 'UpsideDown Chair'),
  new Product('imgs/cthulhu.jpg', 'Hulhu Figurine'),
  new Product('imgs/dog-duck/jpg', 'Dog Duck Lips'),
  new Product('imgs/dragon.jpg', 'Dragon Meat'),
  new Product('imgs/pen.jpg', 'Pen Addons'),
  new Product('imgs/scissors.jpg', 'Pizza Scissors'),
  new Product('imgs/shark.jpg', 'Shark SleepingBag'),
  new Product('imgs/sweep.jpg', 'Baby Sweeper Onezie'),
  new Product('imgs/tauntaun.jpg', 'TaunTaun SleepingBag'),
  new Product('imgs/unicorn.jpg', 'Unicorn Meat'),
  new Product('imgs/usb.gif', 'Moving Tail USB Drive'),
  new Product('imgs/water-can.jpg', 'Ineffective Water Can'),
  new Product('imgs/wine-glas.jpg', 'Wine Glass'),
  new Product('imgs/pet-sweep.jpg', 'Floor Sweeping Pet Booties'),
];

function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.clickNum = 0;
  this.shownCount = 0;
}

var bag = allProducts[0];
var banana = allProducts[1];
var bathroom = allProducts[2];
var boots = allProducts[3];
var breakfast = allProducts[4];
var bubblegum = allProducts[5];
var chair = allProducts[6];
var hulhu = allProducts[7];
var dogDuck = allProducts[8];
var dragon = allProducts[9];
var pen = allProducts[10];
var scissors = allProducts[11];
var shark = allProducts[12];
var sweep = allProducts[13];
var tauntaun = allProducts[14];
var unicorn = allProducts[15];
var usb = allProducts[16];
var waterCan = allProducts[17];
var wineGlass = allProducts[18];
var petSweep = allProducts[19];






buttonOne.addEventListener('click', function(event) {
  bag.clickNum++;
});

buttonTwo.addEventListener('click', function(event) {
  banana.clickNum++;
});

buttonThree.addEventListener('click', function(event) {
  bathroom.clickNum++;
});