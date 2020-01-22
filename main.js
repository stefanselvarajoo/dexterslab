"use strict";

/* https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript 
	Method for generating quick hashes based on user name and passwords
*/
let cyrb53 = function(str, seed = 1) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1>>>16, 2246822507) ^ Math.imul(h2 ^ h2>>>13, 3266489909);
    h2 = Math.imul(h2 ^ h2>>>16, 2246822507) ^ Math.imul(h1 ^ h1>>>13, 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

/* get PHPSESSID and hash using cyrb53() function */
/* https://stackoverflow.com/questions/2257631/how-to-create-a-session-using-javascript */
function writeCookie(name,days) {
	if(cookieScript()){
		let date, expires, val, sessionID;
		if (days) {
			date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
				}else{
			expires = "";
		}
		sessionID = document.cookie.match(RegExp('(^| )' + 'PHPSESSID' + '=([^;]+)'))[0];
		sessionID = sessionID.split('=')[1];
		val = cyrb53(sessionID.toString());
		document.cookie = name + "=" + val + expires + "; path=/";
		
	}
	else
		alert("Cookie are not enabled!");
}

/* check if cookies enabled */
function cookieScript()
{
	if(navigator.cookieEnabled)
		return true;
	else
		return false;
}