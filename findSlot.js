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

let found = false;
/* find the exact slot(s) from the rack which are available */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array */
function getSlot(db,slot){
	const temp = zeroFill(db.toString(2),32);
	let binVal = Array.from(temp);
	for(let i=binVal.length-1,count=0;i>-1;i--){
		if(binVal[i] == 0){
			++count;
		}
		else{
			/* take care of value 1 and count still 0 */
			if(count == 0){}
			else count--;
		}
		if(count == slot){
			found = true;
			return i;                                 
		}
	}
}

/* send back object containing rackID and its available slot */
const rackUpdateAsync = Object.create(Object.prototype);


//function specCallback(cb){
/* https://developer.mozilla.org/en-US/docs/Web/API/Body/json */
/* https://zellwk.com/blog/looping-through-js-objects/ */
/* https://gist.github.com/msmfsd/fca50ab095b795eb39739e8c4357a808 */
/* https://stackoverflow.com/questions/48765538/pass-object-reference-into-javascript-async-function-but-the-unexpected-value-g */
async function getData(url=''){
	const response = await fetch(url,{
		method:'GET',
		mode:'cors',
		cache:'no-cache',
		credentials:'same-origin',
		headers:{
			'Content-Type': 'application/json'
		},
		redirect:'follow',
		referrerPolicy:'no-referrer'
	});
	const result = await response.json();
	return result;
}

getData('findSlot.php').then(data => {
	let rack = {
		id: 0,
		panel: []
	};
	let lol = document.getElementById('rackID');
	for (const val of Object.entries(data)){
		//val[0] represents the rackID, val[1] represents slots available
		let slot = getSlot(parseInt(val[1]) , 3);
		if(found){
			rack.id = parseInt(val[0]);
			for(let i=0;i<3;i++){
				rack.panel.push(slot);
				slot++;
			}
			Object.assign(rackUpdateAsync,rack);
		}
		found = false;
	}
	lol.innerHTML = 'Rack ID '+rack.id + ',Panel(s) ' + rack.panel;
});

