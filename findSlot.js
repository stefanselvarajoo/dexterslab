"use strict";

function getSlot(db,slot){
	let binVal = new Uint32Array(db);

	for(let i=0,count=0;i<32;i++){
		if(binVal[i] == 0){
			++count;
		}
		else{
			/* take care of value 1 and count still 0 */
			if(count == 0){}
			else count--;
		}
		if(count == slot){
			console.log("found");
			return i;
		}
	}
}


let rackID = 0;
/* https://developer.mozilla.org/en-US/docs/Web/API/Body/json */
/* https://zellwk.com/blog/looping-through-js-objects/ */
fetch("findSlot.php").then(function(response) {
  response.json().then(function(data) {
    for(const val of Object.entries(data)){
		//val[0] represents the rackID, val[1] represents slots available

		let index = getSlot(parseInt(val[1]) , 2);
		rackID = val[0];
		
		
	}
  });
});