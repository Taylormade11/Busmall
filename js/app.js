'use strict';

var buttonOne = document.getElementById('button1');
var buttonTwo = document.getElementById('button2');
var buttonThree = document.getElementById('button3');
var imageOne = document.getElementById('image1');
var imageTwo = document.getElementById('image2');
var imageThree = document.getElementById('image3');

var voteCounter = 0;
Product.productNames = [];
Product.productVotes = [];
Product.productPercentages = [];
Product.productColors = [
  'rgba(145, 198, 75, .4)',
  'rgba(145,133,187, .4)',
  'rgba(234,196,22, .4)',
  'rgba(65,51,202, .4)',
  'rgba(149,150,183 , .4)',
  'rgba(108,81,6 , .4)',
  'rgba(186,233,162, .4)',
  'rgba(68,35,29, .4)',
  'rgba(27,7,225, .4)',
  'rgba(88,210,25, .4)',
  'rgba(61,21,17, .4)',
  'rgba(14,221,211, .4)',
  'rgba(172,65,100 , .4)',
  'rgba(99,190,229, .4)',
  'rgba(41,81,38 , .4)',
  'rgba(228,12,250, .4)',
  'rgba(126,1,54 , .4)',
  'rgba(188,244,110, .4)',
  'rgba(15,129,163, .4)',
  'rgba(194,247,171, .4)',
];

var allProducts = Product.allProducts || [
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
  // this.clickNum = 0;
  this.shownCount= 0;
  this.percentage = 0;
  Product.productNames.push(this.name);
  Product.productVotes.push(this.shownCount);
  Product.productPercentages.push(this.percentage);
}

var product1, product2, product3, currentProducts =[];

var calculateCurrentVotes = function() {
  for (var i = 0; i < Product.productVotes.length; i++) {
    Product.productVotes[i] += allProducts[i].clickNum;

  }
};

var startClickNumFill = function() {
  for (var i = 0; i < allProducts.length; i++) {
    allProducts[i].clickNum = 0;
  }
};

var calculateCurrentPercentage = function() {
  for (var i = 0; i < allProducts.length; i ++) {
    var percentage = (allProducts[i].clickNum/allProducts[i].shownCount * 100).toFixed(2);
    Product.productPercentages[i] += percentage;
  }
};

var hideButtons = function () {
  document.getElementById('buttons').style.display = 'none';
};


var parseTheseVotes = localStorage.getItem('Votes');

function getNewImages() {
  if (voteCounter < 25) {
    product1 = allProducts[Math.floor(Math.random() * allProducts.length)];
    product2 = allProducts[Math.floor(Math.random() * allProducts.length)];
    product3 = allProducts[Math.floor(Math.random() * allProducts.length)];
    if (!currentProducts.includes(product1) && !currentProducts.includes(product2) && !currentProducts.includes(product3) && (product1 !== product2 && product2 !== product3 && product1 !== product3)) {
      imageOne.src = product1.filepath;
      imageTwo.src = product2.filepath;
      imageThree.src = product3.filepath;
      currentProducts.splice(0);
      currentProducts.splice(1);
      currentProducts.splice(2);
      currentProducts.push(product1);
      currentProducts.push(product2);
      currentProducts.push(product3);
      product1.shownCount ++;
      product2.shownCount ++;
      product3.shownCount ++;
      voteCounter ++;

    } else if (currentProducts.includes(product1) || currentProducts.includes(product2) || currentProducts.includes(product3) || (product1 === product2 || product2 === product3 || product1 === product3)) {
      getNewImages();
    }
  } else {
    alert('Thank you for your feedback! We will do our best to make sure our BusMall best represents our commuters\' wants & needs!');
    calculateCurrentVotes();
    calculateCurrentPercentage();
    Product.renderVotesBar();
    Product.renderPercentagesPie();
    hideButtons();
    console.log(Product.productVotes);
    var totalStorageVotes = function() {
      for (var i = 0; i < Product.productVotes.length; i++) {
        var stringifiedVotes = JSON.stringify(Product.productVotes);
        localStorage.setItem('Votes', stringifiedVotes);
        var parsedVotes = JSON.parse(parseTheseVotes);
        console.log(parsedVotes);
        Product.productVotes[i] += parsedVotes[i];
      }
    };
    totalStorageVotes();
    var stringifiedVotes = JSON.stringify(Product.productVotes);
    localStorage.setItem('Votes', stringifiedVotes);
  }
}

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

Product.renderVotesBar = function() {
  var ctx = document.getElementById('percentageBar');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Product.productNames,
      datasets: [{
        label: ['% of Success'],
        data: Product.productPercentages,
        backgroundColor: Product.productColors,
        borderColor: 'rgb( 255, 255, 255, .3)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgb(0, 0, 0)',
      }]
    },
    options: {
      scales: {
        xAxes: [{
          stacked: false,
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            min: 0,
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
          }
        }]
      }
    }
  });
};

Product.renderPercentagesPie = function() {
  var ctx = document.getElementById('votePie');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Product.productNames,
      datasets: [{
        label: '# of Votes',
        data: Product.productVotes,
        backgroundColor: Product.productColors,
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgb(0, 0, 0)',
      }]
    },
  });
};

startClickNumFill();
getNewImages();
