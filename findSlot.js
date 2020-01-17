"use strict";

// let oReq = new XMLHttpRequest();

// oReq.open("GET","findSlot.php",true);

// oReq.send();

fetch("findSlot.php").then(function(response) {
  response.text().then(function(text) {
    console.log(text);
  });
});