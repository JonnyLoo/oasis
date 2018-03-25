const page0 = document.querySelector('#b0');
const page1 = document.querySelector('#b1');
const page2 = document.querySelector('#b2');
const page3 = document.querySelector('#b3');
const page4 = document.querySelector('#b4');
const page5 = document.querySelector('#b5');

let currSelected = document.querySelector('.selected');

function toggleCurrentSelected() {
  currSelected.classList.toggle('selected');
}

document.addEventListener('DOMContentLoaded', function() {
  page0.addEventListener('click', function() {
    toggleCurrentSelected();
    page0.classList.toggle('selected');
    currSelected = page0;
  });
  page1.addEventListener('click', function() {
    toggleCurrentSelected();
    page1.classList.toggle('selected');
    currSelected = page1;
  });
  page2.addEventListener('click', function() {
    toggleCurrentSelected();
    page2.classList.toggle('selected');
    currSelected = page2;
  });
  page3.addEventListener('click', function() {
    toggleCurrentSelected();
    page3.classList.toggle('selected');
    currSelected = page3;
  });
  page4.addEventListener('click', function() {
    toggleCurrentSelected();
    page4.classList.toggle('selected');
    currSelected = page4;
  });
  page5.addEventListener('click', function() {
    toggleCurrentSelected();
    page5.classList.toggle('selected');
    currSelected = page5;
  });
});





 //for slider

var slider = document.getElementById("myRange");
var output = document.getElementById("slide");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("slide2");
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  output2.innerHTML = this.value;
}
slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("slide3");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
  output3.innerHTML = this.value;
}
//
