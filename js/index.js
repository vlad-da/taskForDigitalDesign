'use strict'

function goUp() {
    let timeOut;
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if(top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    } else {
        clearTimeout(timeOut);
    }
}