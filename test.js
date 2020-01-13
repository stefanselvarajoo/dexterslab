"use strict";

/* ensure ES6 compliance */

/* define x and y viewbox parameters */
const xView = 260;
const yView = 725;

/* define x and y text offset parameters */
let xText = 12;
let yText = yView - 65;

/* define ellipses offsets */
const xBtmEllipse = xView - 230;
const yBtmEllipse = yView - 45;
const xEllipse = xView - 65;
const yEllipse = yView - 55;

/* define rectangle offsets */
const xBtmRect = xView - 236;
const yBtmRect = yView - 56;
//const xRect = xView - ;
//const yRect = yView - ;

/* define text height */
const textY = 15;

/* http://xahlee.info/js/js_scritping_svg_basics.html */
function createSVGObject(x){
	let obj = document.createElementNS("http://www.w3.org/2000/svg", x);
	return obj;
}

/* Rects */
/* svg-object,shape,width,height,x,y,stroke,fill,pointer-events */
function setProperty1(...property){
	property[0].setAttribute("width",property[1]);
	property[0].setAttribute("height",property[2]);
	property[0].setAttribute("x",property[3]);
	property[0].setAttribute("y",property[4]);
	property[0].setAttribute("stroke",property[5]);
	property[0].setAttribute("fill",property[6]);
	property[0].setAttribute("pointer-events",property[7]);
}

/* circles */
/* svg-object, cx,cy,rx,ry */
function setProperty2(...property){
	property[0].setAttribute("cx", property[1]);
	property[0].setAttribute("cy", property[2]);
	property[0].setAttribute("rx", "3");
	property[0].setAttribute("ry", "3");
}

/* text */
/* svg-object,fill,font-family,text-anchor,font-size */
function setProperty3(...property){
	property[0].setAttribute("fill",property[1]);
	property[0].setAttribute("font-family",property[2]);
	property[0].setAttribute("text-anchor",property[3]);
	property[0].setAttribute("font-size",property[4]);
}

function createEllipseSet(...set){
	setProperty2(set[0],xBtmEllipse,yBtmEllipse);
	setProperty2(set[1],(xBtmEllipse+xEllipse),yBtmEllipse);
	setProperty2(set[2],xBtmEllipse,(yBtmEllipse-yEllipse));
	setProperty2(set[3],(xBtmEllipse+xEllipse),(yBtmEllipse-yEllipse));
}

/* create global SVG object */
const svg = createSVGObject("svg");
setProperty1(svg,xView,yView);

/* create global grouping */
const g = createSVGObject("g");

/* create ellipses grouping */
const ellipses = createSVGObject("g");
setProperty1(ellipses,0,0,0,0,"#666666",null,"all");

/* create emptyspace grouping */
const emptyRackSpace = createSVGObject("g");
setProperty1(emptyRackSpace,0,0,0,0,"#666666","#ffffff","all");

/* create shadedrack grouping */
const shadedRack = createSVGObject("g");
setProperty1(shadedRack,0,0,0,0,"#666666","#f4f4f4","all");

/* create emptyrect grouping */
const emptyRect = createSVGObject("rect");
setProperty1(emptyRect,206,690,24,0);

emptyRackSpace.append(emptyRect);

const btmRect = createSVGObject("rect");
setProperty1(btmRect,206,21,xBtmRect,yBtmRect);

const topRect = createSVGObject("rect");
setProperty1(topRect,206,21,24,0);

const leftRect = createSVGObject("rect");
setProperty1(leftRect,9,648,24,21);

const rightRect = createSVGObject("rect");
setProperty1(rightRect,9,648,221,21);

const btmLeftEllipse = createSVGObject("ellipse");
const btmRightEllipse = createSVGObject("ellipse");
const topLeftEllipse = createSVGObject("ellipse");
const topRightEllipse = createSVGObject("ellipse");

createEllipseSet(btmLeftEllipse,btmRightEllipse,topLeftEllipse,topRightEllipse);

const textGrp = createSVGObject("g");
setProperty3(textGrp,"#666666","Arial,Helvetica","middle","12px");

for(let s=0;s<2;s++){
	for(let i=1;i<33;++i){
		let temp = [];
		temp = createSVGObject("text");
		temp.setAttribute("x",xText.toString());
		temp.setAttribute("y",yText.toString());
		let rowText = document.createTextNode(i);
		temp.append(rowText);
		textGrp.append(temp);
		yText-=20;
	}
	yText = yView - 65;
	xText = xView - 18;
}

ellipses.append(btmLeftEllipse);
ellipses.append(btmRightEllipse);
ellipses.append(topLeftEllipse);
ellipses.append(topRightEllipse);

shadedRack.append(btmRect);
shadedRack.append(topRect);
shadedRack.append(leftRect);
shadedRack.append(rightRect);
shadedRack.append(ellipses);

g.append(emptyRackSpace);
g.append(shadedRack);
g.append(textGrp);


svg.append(g);

document.getElementById("svg").append(svg);

let texts = document.getElementsByTagName('text');
console.log(texts[0].getBoundingClientRect().height);