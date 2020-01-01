"use strict";
/* https://stackoverflow.com/questions/920670/read-session-id-using-javascript */
function getPHPSessId() {
    var phpSessionId = document.cookie.match(/PHPSESSID=[A-Za-z0-9]+\;/i);

    if(phpSessionId == null) 
        return false;

    if(typeof(phpSessionId) == 'undefined')
        return false;

    if(phpSessionId.length <= 0)
        return false;

    /* phpSessionId = phpSessionId[0];

    var end = phpSessionId.lastIndexOf(';');
    if(end == -1) end = phpSessionId.length;

    return phpSessionId.substring(10, end); */
	return true;
}