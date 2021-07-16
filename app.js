let block  = document.getElementById('block');
let hole = document.getElementById('hole');
let bird = document.getElementById('bird');
let jumping = 0;

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
});

setInterval(function (){
    let toP = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){
        bird.style.top = (toP + 3) + "px";
    }

    if(toP > 480){
        alert("Game over");
        bird.style.top = 100 + "px";
    }
}, 15);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumping = setInterval(function(){
        let toP = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if((toP > 6) && (jumpCount < 15)){
            bird.style.top = (toP - 7) + "px";
        }
        if(jumpCount >= 20){
            clearInterval(jumping);
            jumping = 0;
            jumpCount = 0;
        } 

        jumpCount++;

    }, 10);
}