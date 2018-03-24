/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */ 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

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
