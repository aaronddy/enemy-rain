
const hero = document.getElementsByClassName("hero")[0];
let heroLeft = 0;

function leftArrow() {
 
  heroLeft -= 5;
  hero.style.left = heroLeft + 'px';
  
    hero.style.backgroundPosition = "-70px";
  
};

function rightArrow() {
  
  heroLeft += 5;
  hero.style.left = heroLeft + 'px';
  
   hero.style.backgroundPosition = '-105px';
}

function frontArrow(e) {
   
   hero.style.backgroundPosition = "0px";
  }

function moveSelection(evt) {
         switch(evt.keyCode) {
          case 37:
            leftArrow();
            console.log('Left key pressed');
            break;
          case 39:
            rightArrow();
            console.log("Right key pressed");
            break;
           case 40:
             frontArrow();
             console.log("Front key pressed"); 
         }
      console.log(heroLeft);
}

function docReady() {
          
  window.addEventListener('keydown', moveSelection);
};

docReady();