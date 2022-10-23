'use strict';

const script = document.createElement('script');
script.setAttribute("type", "module");
script.setAttribute("src", chrome.runtime.getURL('webscraper.js'));
const body = document.body;
body.insertBefore(script, body.lastChild);



