"use strict";

/* pad binary as 32 bit */
/* https://stackoverflow.com/questions/1267283/how-can-i-pad-a-value-with-leading-zeros */
function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}


/* find the exact slot(s) from the rack which are available */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array */
function getSlot(db,slot){
	// let binVal = new Uint32Array(db.toString(2));
	let temp = zeroFill(db.toString(2),32);
	let binVal = Array.from(temp);
	for(let i=binVal.length-1,count=0;i>0;i--){
		
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
		let index = getSlot(parseInt(val[1]) , 2);

		foundRack.rackID = val[0];
		for(let i=0;i<2;i++){
			foundRack.index.push(index);
			index--;
		}
	}
  });
});