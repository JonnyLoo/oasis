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
