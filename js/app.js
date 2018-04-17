'strict';

var buttonOne = document.getElementById('button1');
var buttonTwo = document.getElementById('button2');
var buttonThree = document.getElementById('button3');
var imageOne = document.getElementById('image1');
var imageTwo = document.getElementById('image2');
var imageThree = document.getElementById('image3');

var voteCounter = 0;

var allProducts = [
  new Product('imgs/bag.jpg', 'Star Wars Bag'),
  new Product('imgs/banana.jpg', 'Banana Slicer'),
  new Product('imgs/bathroom.jpg', 'IPad Tpee Holder'),
  new Product('imgs/boots.jpg', 'Toeless Boots'),
  new Product('imgs/breakfast.jpg', 'All In One Breakfast Machine'),
  new Product('imgs/bubblegum.jpg', 'Meatball Bubblegum'),
  new Product('imgs/chair.jpg', 'UpsideDown Chair'),
  new Product('imgs/cthulhu.jpg', 'Hulhu Figurine'),
  new Product('imgs/dog-duck.jpg', 'Dog Duck Lips'),
  new Product('imgs/dragon.jpg', 'Dragon Meat'),
  new Product('imgs/pen.jpg', 'Pen Addons'),
  new Product('imgs/scissors.jpg', 'Pizza Scissors'),
  new Product('imgs/shark.jpg', 'Shark SleepingBag'),
  new Product('imgs/sweep.jpg', 'Baby Sweeper Onezie'),
  new Product('imgs/tauntaun.jpg', 'TaunTaun SleepingBag'),
  new Product('imgs/unicorn.jpg', 'Unicorn Meat'),
  new Product('imgs/usb.gif', 'Moving Tail USB Drive'),
  new Product('imgs/water-can.jpg', 'Ineffective Water Can'),
  new Product('imgs/wine-glass.jpg', 'Wine Glass'),
  new Product('imgs/pet-sweep.jpg', 'Floor Sweeping Pet Booties'),
];

function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.clickNum = 0;
  this.shownCount = 0;
}

var product1 = allProducts[0];
var product2 = allProducts[0];
var product3 = allProducts[0];

var currentProducts = [];

function getNewImages() {
  if (voteCounter < 24) {
    product1 = allProducts[Math.floor(Math.random() * allProducts.length)];
    product2 = allProducts[Math.floor(Math.random() * allProducts.length)];
    product3 = allProducts[Math.floor(Math.random() * allProducts.length)];
    if (currentProducts.includes(product1) || currentProducts.includes(product2) || currentProducts.includes(product3)) {
      getNewImages();
    } else if (product1 !== product2 && product2 !== product3 && product1 !== product3) {
      imageOne.src = product1.filepath;
      product1.shownCount ++;
      currentProducts.splice(0);
      currentProducts.splice(1);
      currentProducts.splice(2);
      currentProducts.push(product1);
      imageTwo.src = product2.filepath;
      product2.shownCount ++;
      currentProducts.push(product2);
      imageThree.src = product3.filepath;
      product3.shownCount ++;
      currentProducts.push(product3);
      voteCounter ++;
    }
  } else {
    alert('Thank you for your feedback! We will do our best to make sure our BusMall best represents our commuters\' wants & needs!');
    fillTable();
  }
}
var fillTable = function() {
  for (var i = 0; i < allProducts.length; i ++) {
    var list = document.getElementById('dataList');
    var listItem = document.createElement('li');
    listItem.textContent = allProducts[i].name + ' received ' + allProducts[i].clickNum + ' votes and was shown ' + allProducts[i].shownCount + ' times. ' + allProducts[i].name + ' was chosen ' + (allProducts[i].clickNum/allProducts[i].shownCount * 100).toFixed(2) + ' % of the time.';
    list.appendChild(listItem);
  }
};

buttonOne.addEventListener('click', function(event) {
  product1.clickNum++;
  getNewImages();
});

buttonTwo.addEventListener('click', function(event) {
  product2.clickNum++;
  getNewImages();
});

buttonThree.addEventListener('click', function(event) {
  product3.clickNum++;
  getNewImages();
});