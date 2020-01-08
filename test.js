"use strict";

function createSVGObject(x){
	const obj = document.createElementNS("http://www.w3.org/2000/svg", x);
	return obj;
}

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

const svg = createSVGObject("svg");
setProperty(svg,250,750);

const g = createSVGObject("g");

const ellipses = createSVGObject("g");
setProperty(ellipses,0,0,0,0,"#666666",null,"all");

const emptyRackSpace = createSVGObject("g");
setProperty(emptyRackSpace,0,0,0,0,"#666666","#ffffff","all");

const shadedRack = createSVGObject("g");
setProperty(shadedRack,0,0,0,0,"#666666","#f4f4f4","all");

const emptyRect = createSVGObject("rect");
setProperty(emptyRect,206,690,24,30);

emptyRackSpace.appendChild(emptyRect);

const btmRect = createSVGObject("rect");
setProperty(btmRect,206,21,24,699);

const topRect = createSVGObject("rect");
setProperty(topRect,206,21,24,30);

const leftRect = createSVGObject("rect");
setProperty(leftRect,9,648,24,51);

const rightRect = createSVGObject("rect");
setProperty(rightRect,9,648,221,51);

const btmLeftEllipse = createSVGObject("ellipse");

btmLeftEllipse.setAttribute("cx", "29.5");
btmLeftEllipse.setAttribute("cy", "709.5");
btmLeftEllipse.setAttribute("rx", "3");
btmLeftEllipse.setAttribute("ry", "3");


ellipses.appendChild(btmLeftEllipse);

shadedRack.appendChild(btmRect);
shadedRack.appendChild(topRect);
shadedRack.appendChild(leftRect);
shadedRack.appendChild(rightRect);
shadedRack.appendChild(ellipses);

g.appendChild(emptyRackSpace);
g.appendChild(shadedRack);
svg.appendChild(g);

document.getElementById("svg").appendChild(svg);