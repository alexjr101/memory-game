const cardArray = [
    {
        name: 'sun',
        img: 'images/sun.png'
    },
    {
       name: 'cloud' ,
       img: 'images/cloud.png'
    },
    {
        name: 'lightning' ,
        img: 'images/lightning.png'
     },
     {
        name: 'moon' ,
        img: 'images/moon.jpeg'
     },
     {
        name: 'rainbow' ,
        img: 'images/rainbow.jpeg'
     },
     {
        name: 'star' ,
        img: 'images/star.png'
     },
     {
        name: 'sun',
        img: 'images/sun.png'
    },
    {
       name: 'cloud' ,
       img: 'images/cloud.png'
    },
    {
        name: 'lightning' ,
        img: 'images/lightning.png'
     },
     {
        name: 'moon' ,
        img: 'images/moon.jpeg'
     },
     {
        name: 'rainbow' ,
        img: 'images/rainbow.jpeg'
     },
     {
        name: 'star' ,
        img: 'images/star.png'
     }
];
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');
let score = 0; 

function createBoard() {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/question.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

createBoard();

let cardsChosen = [];
let cardsChosenIDs = [];
const cardsWon = [];

function flipCard() {
    const cardID = this.getAttribute('data-id');
    this.setAttribute('src', cardArray[cardID].img);
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenIDs.push(cardID);
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneID = cardsChosenIDs[0];
    const optionTwoID = cardsChosenIDs[1];
    if (optionOneID == optionTwoID) {
        alert('You have clicked the same image!');
        cards[optionOneID].setAttribute('src', 'images/question.png');
    }
    else if(cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneID].setAttribute('src', 'images/blank.png');
        cards[optionTwoID].setAttribute('src', 'images/blank.png');
        cards[optionOneID].removeEventListener('click', flipCard);
        cards[optionTwoID].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        score += 1;
        document.getElementById('result').innerHTML = score;
    } else {
        cards[optionOneID].setAttribute('src', 'images/question.png');
        cards[optionTwoID].setAttribute('src', 'images/question.png');
    }

    if (cardsWon.length == cardArray.length / 2) {
        alert("Congratulations! You won!");
    }
    cardsChosen = [];
    cardsChosenIDs = [];
}