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
let svgObj,temp;
svg.addEventListener("load",function(){
	svgObj = svg.contentDocument;

	let texts = svgObj.getElementsByTagName('text');

	/* set ID attribute to later identify via SQL */
	for(let x=0,id=0;x<32;x++){
		id = texts[x].childNodes[0].data.toString();
		texts[x].setAttribute("id",id); 
	}

	let xWdith = texts[0].getBoundingClientRect().width;
	let yHeight = texts[0].getBoundingClientRect().height;
	let xCoord = texts[0].getBoundingClientRect().x;
	let yCoord = texts[0].getBoundingClientRect().y;

	let highlightSVG = createSVGObject("rect");
	setProperty(highlightSVG,30,30,100,100,"#666666","black","all");
	highlightSVG.setAttribute("position","absolute");
	
	temp = svgObj.childNodes;
	svg.appendChild(highlightSVG);
},false);