

var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var h2text = document.querySelector('h2');

function dice() {

    let randomNumber1 =  Math.floor((Math.random() * 6) + 1);
    let randomNumber2 =  Math.floor((Math.random() * 6) + 1);   

if(randomNumber1 == 1 , randomNumber2 == 6){
     img1.src = './images/dice1.png';  
     img2.src = './images/dice6.png';
}else if (randomNumber1 == 2 , randomNumber2 == 5) {
    img1.src = './images/dice2.png'; 
    img2.src = './images/dice5.png'; 
}else if (randomNumber1 == 3 , randomNumber2 == 4) {
    img1.src = './images/dice3.png'; 
    img2.src = './images/dice4.png'; 
}else if (randomNumber1 == 4 , randomNumber2 == 3) {
    img1.src = './images/dice4.png'; 
    img2.src = './images/dice3.png'; 
}else if (randomNumber1 == 5 , randomNumber2 == 2) {
    img1.src = './images/dice5.png'; 
    img2.src = './images/dice2.png'; 
}else if (randomNumber1 == 6 , randomNumber2 == 1) {
    img1.src = './images/dice6.png'; 
    img2.src = './images/dice1.png'; 
    }
    
// if (randomNumber1 > randomNumber2) {
//     h2text.textContent = "o jogador 1 ganhou";
//     h2text.style.color = 'gold';
// } else {
//     h2text.textContent = "o jogador 2 ganhou";
//     h2text.style.color = 'gold';
// };

};

