"use strict";

function returnSession(){
	if(!getPHPSessId())
		window.location = "main.html";
}