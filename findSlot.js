"use strict";

/* find the exact slot(s) from the rack which are available */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array */
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
		else return 0;
	}
}

/* send back object containing rackID and its available slot */
let rack = {
	rackID:0,
	index: []
};

/* https://developer.mozilla.org/en-US/docs/Web/API/Body/json */
/* https://zellwk.com/blog/looping-through-js-objects/ */
fetch("findSlot.php").then(function(response) {
  response.json().then(function(data) {
	let foundRack = Object.create(rack);
    for(const val of Object.entries(data)){
		//val[0] represents the rackID, val[1] represents slots available
		
		let index = getSlot(parseInt(val[1]) , panel);
		for(let i=0;i<panel;i++){
			foundRack.index = index;
			index--;
		}
		foundRack.rackID = val[0];
	}
  });
});