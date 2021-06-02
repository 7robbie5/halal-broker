/*!
  * External Links external.js v0.0.1 (https://www.robhonig.com)
  * Copyright 2021 7robbie5 (https://7robbie5.github.io/)
  */

$('.ref a').external({

  // (string) name of the external window
  name:     "_blank", 

  // (bool) use the "target" HTML attribute to support Firefox tab handling and Safari status bar info
  target:   true, 

  // (string) apply CSS classes to an external link
  //  classes:  "", 

  // (string) apply a relationship to an external link
  relation: "external", 

  // (string) text added as or appended to the "title" attribute to inform the user about an upcoming new window
  //  title:    "Opens in a new window" 

});