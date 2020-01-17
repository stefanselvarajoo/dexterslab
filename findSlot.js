"use strict";

function getSlot(data,slot){
	let panel = data.toString(2) & slot.toString(2);
	
}

/* https://developer.mozilla.org/en-US/docs/Web/API/Body/json */
/* https://zellwk.com/blog/looping-through-js-objects/ */
fetch("findSlot.php").then(function(response) {
  response.json().then(function(data) {
    for(const val of Object.entries(data)){
		//val[0] represents the rackID, val[1] represents slots available
		let status = getSlot(parseInt(val[1]) , 2);
		
	}
  });
});