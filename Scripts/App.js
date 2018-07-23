/* Custom js goes Here */

// IIFE - Immediately Invoked Function Expression
// anonyms self execuing funtion 
(function(){

    function Start() {

        var title = document.title;

        console.log("App Started!");
        console.log("------------------");
        console.log("Title: "+ title);
    }

    window.onload = Start;
    
})();