"use strict";

/* http://xahlee.info/js/js_scritping_svg_basics.html */
function createSVGObject(x){
	let obj = document.createElementNS("http://www.w3.org/2000/svg", x);
	return obj;
}

/* Rects */
/* svg-object,shape,width,height,x,y,stroke,fill,pointer-events */
function setProperty(...property){
	property[0].setAttribute("width",property[1]);
	property[0].setAttribute("height",property[2]);
	property[0].setAttribute("x",property[3]);
	property[0].setAttribute("y",property[4]);
	property[0].setAttribute("stroke",property[5]);
	property[0].setAttribute("fill",property[6]);
	property[0].setAttribute("pointer-events",property[7]);
}

let svg = document.getElementById("svg");
let svgObj;
svg.addEventListener("load",function(){
	svgObj = svg.contentDocument;

	let texts = svgObj.getElementsByTagName('text');
	let rectangle = svgObj.getElementsByTagName('rect');
	//rectangle[5].setAttribute("fill","green");

	/* set ID attribute to later identify via SQL */
	for(let x=0,id=0;x<texts.length;x++){
		id = texts[x].childNodes[0].data.toString();
		texts[x].setAttribute("id",id); 
	}
},false);