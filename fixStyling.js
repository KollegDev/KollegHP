import Bowser from "bowser";
const browser = Bowser.getParser(window.navigator.userAgent);
var e = document.getElementsByClassName("smear");

if (browser.getBrowserName() != "Firefox") {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    for (let i = 0; i < e.length; i++) {
      e[i].style.background = "rgba(55,56,59,0.7)";
    }
  }
}
