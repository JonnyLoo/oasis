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

const input = document.querySelector('#input');
const close = document.querySelector('#close');
close.addEventListener('click', function() {
  input.classList.toggle('hidden');
});

function addData(chart, val, index) {
    chart['data']['datasets'][0]['data'][index] += val;
    chart.update();
}

function addData1(chart, val, usage) {
    chart['data']['datasets'][usage]['data'][0] += val;
    chart.update();
}


var ctx1 = document.getElementById("myDonutChart").getContext('2d');
var myChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ["Transportation", "Water Usage", "Food Wasting", "Electricity"],
        datasets: [{
            data: [0, 0, 0, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx2 = document.getElementById("myBarChart").getContext('2d');
var myChart1 = new Chart(ctx2, {
    type: 'bar',
    data: {
        datasets: [{
            label: "Saving",
            data: [0],
            backgroundColor: [

                'rgba(50, 205, 50, 0.2)'
            ],
            borderColor: [
                'rgba(50, 205, 50, 1)'
            ],
            borderWidth: 1
        }, {
            label: "Wasting",
            data: [0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



addData(myChart, parseFloat(drive), 0);
addData(myChart, parseFloat(waterWaste), 1);
addData(myChart, parseFloat(foodWaste), 2);
addData1(myChart1, parseFloat(bottles) + parseFloat(bags), 0);
addData1(myChart1, -parseFloat(drive) - parseFloat(waterWaste) - parseFloat(foodWaste), 1);

