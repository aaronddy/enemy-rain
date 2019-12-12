const container = document.getElementById("enemies");

//새로운 좀비를 만드는
const makeEnemy = () => {
    
    const anEnemy = document.createElement('div');
 
    anEnemy.className = "enemy";

    container.appendChild(anEnemy);

    //좀비가 좌우 위치를 랜덤으로 가지는 변수
    const randomPosition = (minNum, maxNum) => {
      
        let leftPx = (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
        //console.log(anEnemy);
        anEnemy.style.left = leftPx + 'px';   
       // console.log(leftPx);
    }

    randomPosition(-320, 300);

    var topSet = 220;
    const movingToBottom = setInterval(() => {
        
        //let topSet = 220;
        topSet += 30;
        anEnemy.style.top = topSet + 'px';
    
        //console.log(topSet);
        
        let x = anEnemy.style.left;
        let y = anEnemy.style.top;

        if((parseInt(x)-20 <= parseInt(hero.style.left)) && (parseInt(x) + 20 >= parseInt(hero.style.left)) && (parseInt(y) === 670)) {
            
            console.log('working well');
            anEnemy.style.backgroundPosition = '-45px';   
            let audio = new Audio("./audio/dying.wav")
            audio.play();
            }

        if(topSet > 670) {
            //anEnemy.style.backgroundPosition = '-45px';
            container.removeChild(anEnemy);
            clearInterval(movingToBottom);
        }
          
    }, 1000)
};

setInterval(() => {
    makeEnemy()
}, 3000);



