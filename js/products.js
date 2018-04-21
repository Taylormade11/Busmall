'use strict';

function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
}

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

for (var i = 0; i < allProducts.length; i++) {
  var tBody = document.getElementById('tbody');
  var imageTd = document.createElement('td');
  var productImage = document.createElement('img');
  var productRow = document.createElement('tr');
  productRow.setAttribute('class', allProducts[i].name);
  productImage.setAttribute('src', allProducts[i].filepath);
  tBody.appendChild(productRow);
  productRow.appendChild(imageTd);
  imageTd.appendChild(productImage);
  var productName = document.createElement('td');
  productName.textContent = allProducts[i].name;
  productRow.appendChild(productName);
}

