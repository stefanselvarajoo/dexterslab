"use strict";
/* http://xahlee.info/js/js_scritping_svg_basics.html */
function createSVGObject(x){
	var obj = document.createElementNS("http://www.w3.org/2000/svg", x);
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
	property[0].setAttribute("rx", property[3]);
	property[0].setAttribute("ry", property[4]);
}

/* text */
/* svg-object,fill,font-family,text-anchor,font-size */
function setProperty3(...property){
	property[0].setAttribute("fill",property[1]);
	property[0].setAttribute("font-family",property[2]);
	property[0].setAttribute("text-anchor",property[3]);
	property[0].setAttribute("font-size",property[4]);
}

var svg = createSVGObject("svg");
setProperty1(svg,250,750);

var g = createSVGObject("g");

var ellipses = createSVGObject("g");
setProperty1(ellipses,0,0,0,0,"#666666",null,"all");

var emptyRackSpace = createSVGObject("g");
setProperty1(emptyRackSpace,0,0,0,0,"#666666","#ffffff","all");

var shadedRack = createSVGObject("g");
setProperty1(shadedRack,0,0,0,0,"#666666","#f4f4f4","all");

var emptyRect = createSVGObject("rect");
setProperty1(emptyRect,206,690,24,30);

emptyRackSpace.appendChild(emptyRect);

var btmRect = createSVGObject("rect");
setProperty1(btmRect,206,21,24,699);

var topRect = createSVGObject("rect");
setProperty1(topRect,206,21,24,30);

var leftRect = createSVGObject("rect");
setProperty1(leftRect,9,648,24,51);

var rightRect = createSVGObject("rect");
setProperty1(rightRect,9,648,221,51);

var btmLeftEllipse = createSVGObject("ellipse");
setProperty2(btmLeftEllipse,29.5,709.5,3,3);

var btmRightEllipse = createSVGObject("ellipse");
setProperty2(btmRightEllipse,224.5,709.5,3,3);

var topLeftEllipse = createSVGObject("ellipse");
setProperty2(topLeftEllipse,29.5,40.5,3,3);

var topRightEllipse = createSVGObject("ellipse");
setProperty2(topRightEllipse,224.5,40.5,3,3);

var textGrp = createSVGObject("g");
setProperty3(textGrp,"#666666","Arial,Helvetica","middle","12px");

for(var i=32,y=64.5;i>0;i--){
	var temp = [];
	temp = createSVGObject("text");
	temp.setAttribute("x","11.5");
	temp.setAttribute("y",y.toString());
	var rowText = document.createTextNode(i);
	temp.appendChild(rowText);
	textGrp.appendChild(temp);
	y+=20;
}

ellipses.appendChild(btmLeftEllipse);
ellipses.appendChild(btmRightEllipse);
ellipses.appendChild(topLeftEllipse);
ellipses.appendChild(topRightEllipse);

shadedRack.appendChild(btmRect);
shadedRack.appendChild(topRect);
shadedRack.appendChild(leftRect);
shadedRack.appendChild(rightRect);
shadedRack.appendChild(ellipses);

g.appendChild(emptyRackSpace);
g.appendChild(shadedRack);
g.appendChild(textGrp);
svg.appendChild(g);

document.getElementById("svg").appendChild(svg);