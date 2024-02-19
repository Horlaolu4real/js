
'use strict';
var box = document.getElementById("myBox");
var defaultColor = "red"; 
var newColor = "green"; 
var currentColor = defaultColor; 


box.addEventListener("click", function() {
    
    if (currentColor === defaultColor) {
        box.style.backgroundColor = newColor;
        currentColor = newColor;
    } else {
        box.style.backgroundColor = defaultColor;
        currentColor = defaultColor;
    }
});
