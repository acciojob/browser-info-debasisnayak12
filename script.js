//your JS code here. If required.
const info = document.querySelector("#browser-info");

const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

const browserMessage = document.createTextNode(`You are using ${browserName} version ${browserVersion}`);
info.appendChild(browserMessage);
