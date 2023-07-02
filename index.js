var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceRandImg = 'dice' + randomNumber1 + '.png';
var randImgSrc = 'images/' + diceRandImg;
var img1 = document.querySelectorAll('img')[0];
img1.setAttribute('src', randImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceRandImg2 = 'dice' + randomNumber2 + '.png';
var randImgSrc2 = 'images/' + diceRandImg2;
var img2 = document.querySelectorAll('img')[1];
img2.setAttribute('src', randImgSrc2)

var h1text = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    h1text.textContent = 'O jogador 1 é o vencedor!'
} else if (randomNumber1 < randomNumber2) {
  h1text.textContent = "O jogador 2 é o vencedor! ";
} else if (randomNumber1 == randomNumber2) {
    h1text.textContent = "Empate!!";
}

function reloadPage() {
    location.reload();
}


