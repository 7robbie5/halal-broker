/*!
  * External Links external.js v0.0.1 (https://www.robhonig.com)
  * Copyright 2021 7robbie5 (https://7robbie5.github.io/)
  */
function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}
window.onload = externalLinks;
