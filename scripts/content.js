'use strict';

const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL('./main.js'));
const body = document.body;
head.insertBefore(script, body.lastChild);

