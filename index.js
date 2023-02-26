let player = {
    name : 'Harry',
    chips : 145
}

let cards = []
let sum = 0
let message = ''
let isBlackjack = false;
let isAlive = false;
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips



function getRandomCard(){
    let random = Math.floor(Math.random()*13)+1
      if(random === 1){
        return 11
      }
      else if(random > 10){
        return 10
      }else{
        return random
      }
    
}


function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    isAlive = true;
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame();
}


function renderGame(){
    
    cardsEl.textContent = "Cards : "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }
    sumEl.textContent = "Sum : "+sum
    if(sum<=20){
        message = "Do you wanna draw a new Card?"
    }
    else if(sum===21){
        message = "You've got Blackjack!"
        isBlackjack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive===true && isBlackjack===false){
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
   
}



