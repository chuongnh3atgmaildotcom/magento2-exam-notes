function getQueryVariable(url,variable) {
    var query = url.split('?')[1];
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}
var currentScript = document.currentScript.src;
console.log('hosted on github');
console.log('current url', window.location);
console.log('currentScript', currentScript);
console.log('logotype', getQueryVariable(currentScript, 'lg'));
console.log('rh_id', getQueryVariable(currentScript, 'rh'));
