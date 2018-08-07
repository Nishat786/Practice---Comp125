/* Custom js goes Here */

// IIFE - Immediately Invoked Function Expression
// anonyms self execuing funtion 
(function(){
        "Use Strict"

        function AboutButtonClick() {
            console.log("About Button was Clicked!");
        }

        function AboutButtonOver(event) {
            event.currentTarget.style.opacity = 0.3;
        }

        function AboutButtonOut() {
            event.currentTarget.style.opacity = 1.0;
        }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.innerText = "About";

            AboutButton.addEventListener("click", AboutButtonClick);
            AboutButton.addEventListener("mouseover", AboutButtonOver);
            AboutButton.addEventListener("mouseout", AboutButtonOut);

    }

    function AboutContent() {
        let Paragraph = document.getElementById("Paragraph");

        Paragraph.textContent = "I born and brought up in Jalandhar, Punjab, India on 17 Sep 1998. I am very Passionate about my physic and sports. I am very Hard, tough and hot-headed person. I am very loyable and to my friends and family and the person "
      
        
        "who did good to me at anyb time and I can do anything for them."
        let heading3 = document.getElementById("heading3")

        heading3.textContent = "Mission Statement"
        <ul>
          <li>I always admire Mr. Mukesh Ambani and I want to become a bussiness tykoon like him. 
          </li>
          <li>I want to do something for my Country in any of the way it will be possible. 
          </li>
          <li>I want to make my Parents to be Proud of me in the future.</li>
          <li>By competing this i will get to know&nbsp; how to create html 
          pages well and i will&nbsp; get chance to know many new skills.</li>
          <li>this is the best way to learn so many things and improving our 
          ideas 
          </li>
          <li>while doing i get to know about many new new sites of learning 
          the new stuff.</li>
    }

    function Start() {
        // local variable
        let title = document.title;

        switch(title) {
            case "My Webpage - Home!":            
                HomeContent();
                break;

                case "My Webpage - About!":
                AboutContent();
                break;

                case "Contact Us":
                break;

                default:
                break;
        }
                     

        console.log("App Started!");
        console.log("------------------");
        console.log("Title: "+ title);
    }

    window.onload = Start;
    
})();