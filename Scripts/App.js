/* Custom js goes Here */

// IIFE - Immediately Invoked Function Expression
// anonyms self execuing funtion 
(function(){

    function Start() {

        let title = document.title;

        switch(title) {

            case "My WEBPAGE! and DEVELOPMENT!":
                let AboutButton = document.getElementById("AboutButton");

                AboutButton.addEventListener("click", function(){
                    console.log("About Button was Clicked!");
                });
            break;

            case "My Webpage - About!":
            break;

            case "Contact Us":
            break;
        }        

        console.log("App Started!");
        console.log("------------------");
        console.log("Title: "+ title);
    }

    window.onload = Start;
    
})();