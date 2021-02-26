

const deck = [1,2,3,4,5,6,7,8,9,10,11,12,13];


const typeOfCard=['H','D','S','C']
const deck1 = [1,2,3,4,5,6,7,8,9,10,'J','Q','K'];
const getDeckOfCards = (deck1,typeOfCard) => {
  let cards=[];
  for (let i = 0; i < 52; i++)  {
    for (let k = 0; k < typeOfCard.length; k++)  {
      for (let j = 0; j < deck1.length; j++)  {
      cards.push(`${typeOfCard[k]}${deck1[j]}`);
      }
  } 
  return cards;
}
};
const deckCard = getDeckOfCards(deck1,typeOfCard);

const playerCard1 = document.querySelector('.playerCard1');
const playerCard2 = document.querySelector('.playerCard2');

const shuffle = (deck)=> {
  if(document.getElementById('P1').checked ==false && document.getElementById('P2').checked ==false){
      document.getElementById('P1').checked = true;
    }

  for (let i = 0; i < 3; i++) {
    const card = document.createElement('div');
    card.className = `card player1Card showcard`;
    console.log(card.innerHTML);
    card.innerHTML = deck[Math.floor(Math.random() * deck.length)];
    card.style.backgroundPosition = "0px"; 
    playerCard1.appendChild(card);
    
  }
  for (let j = 0; j < 3; j++) {
    const card2 = document.createElement('div');
    card2.className = `card player2Card showcard`;
    card2.innerHTML = deck[Math.floor(Math.random() * deck.length)];
    card2.style.backgroundPosition = "0px"; 
    playerCard2.appendChild(card2);
  }
  
}
const buttonShuffle =document.getElementsByClassName("shuffle")[0];
buttonShuffle.addEventListener("click",(event)=>{
  event.preventDefault();
  buttonShuffle.disabled = true;
shuffle(deck);
})
const pokerCards = document.querySelector('.playerCards');
const start = (deckCard)=> {

    let numberOfCards = deckCard.length;  
    for (var i=0; i<numberOfCards; i++) {
      let j = Math.floor(Math.random() * numberOfCards);
      let tmp = deckCard[i];
      deckCard[i] = deckCard[j];
      deckCard[j] = tmp;
    }
  
  for (let i = 0; i < 5; i++) {
    const card = document.createElement('div');
    card.className = `card pokerCard`;
    card.innerHTML = deckCard.pop();
    card.style.backgroundPosition = "0px"; 
    pokerCards.appendChild(card);
    
  }

  
}
const buttonStart =document.getElementsByClassName("start")[0];
buttonStart.addEventListener("click",(event)=>{
  event.preventDefault();
  buttonStart.disabled = true;
start(deckCard);
})
const deal = ()=> {
  const pc = document.querySelectorAll('.pokerCard');
  let newArray = [];
  // consecutiveNumberPatern = /0[1-9]|1[2-9]|2[3-9]|3[4-9]|4[5-9]|5[6-9]|6[7-9]|7[8-9]|8[9-10]|9[10-J]|10[J-K]|J[K-Q]/;
  patternToCheckDuplicateType = /(.)\1{9,}/;
  pc.forEach(element => {
    element.style.backgroundImage ="none";
    element.style.color = "green";
    element.style.padding = "20px";
    element.style.fontSize = "30px";
    console.log(element);
    console.log(element.innerHTML);
    newArray.push(`${element.innerHTML}`);
  });
  const newDealArray= newArray.sort();
  let firstCharstring = `${newDealArray[0].charAt(0)}${newDealArray[1].charAt(0)}${newDealArray[2].charAt(0)}${newDealArray[3].charAt(0)}${newDealArray[4].charAt(0)}`;  
  let secCharstringTemp  = `${newDealArray[0].substring(1)}${newDealArray[1].substring(1)}${newDealArray[2].substring(1)}${newDealArray[3].substring(1)}${newDealArray[4].substring(1)}`;  
  console.log(secCharstringTemp);

  
  let temp1 = Array.from(secCharstringTemp);
  let temp = temp1.sort();
  console.log(temp);
  let secCharstring ="";
  if (temp.length > 5){
   secCharstring = `${temp[0]}${temp[1]}${temp[2]}${temp[3]}${temp[4]}${temp[5]}`;
  }
  else {
     secCharstring = `${temp[0]}${temp[1]}${temp[2]}${temp[3]}${temp[4]}`;
  }  
  console.log(secCharstring);

  secCharstring.toChar
  const h2 = document.getElementById('result2');
  // <li>Rank 1:Five of Kind(all cards of Ace value+Joker)</li>
  //unsorted array used
  if (/1111/.test(secCharstringTemp)){
    h2.innerHTML = `You are Winner with Rank 1!! : Five of Kind`;
  }

  // <li>Rank 2:Royal Flush(all cards of in sequence of 110JKQ)</li>
 
  else if (/HHHH|DDDD|SSSS|CCCC/.test(firstCharstring)){ 
    if(secCharstring == '011JQK' || secCharstring == '011JKQ' ){ 
    h2.innerHTML = `You are Winner with Rank 2!! : Royal Flush`;
  }
  }
  // <li>Rank 3:Straight Flush(sequence of same style card)</li>

  else if (/HHHH|DDDD|SSSS|CCCC/.test(firstCharstring)){ 
    if( /12345|23456|34567|45678/.test(secCharstring) ||/56789|016789|01789J|0189JK|019JKQ/.test(secCharstring) || secCharstring == '110JQK' || secCharstring == '110JKQ' ){ 
    h2.innerHTML = `You are Winner with Rank 3!! : Straight Flush`;
  }
  }
 // <li>Rank 4:Four of Kind(all cards of same value+Joker)</li>

  else if(/2222|3333|4444|5555|6666/.test(secCharstring) || /7777|8888|9999|00001111|JJJJ|KKKK|QQQQ/.test(secCharstring) ){ 
    h2.innerHTML = `You are Winner with Rank 4!! : Four of its Kind`;
    }

  // <li>Rank 5:Flush(3 card in sequence)</li>
  else if( /123|234|345|456|567|678/.test(secCharstring) ||/789|8910|019J|01JK|JKQ|JQK/.test(secCharstring)){ 
      h2.innerHTML = `You are Winner with Rank 5!! : Flush`;
  }

/* <li>Rank 6:Full House(3 card of same value+2 card of same value)</li> */
 
  else if(/11|22|33|44|55|66/.test(secCharstring) || /77|88|99|0011|JJ|KK|QQ/.test(secCharstring)){ 
    if(/222|333|444|555|666/.test(secCharstring) || /777|888|999|000111|JJJ|KKK|QQQ/.test(secCharstring)){ 
      h2.innerHTML = `You are Winner with Rank 6!! : Full House`;
    }
  }
   
  // <li>Rank 7:Straight(5 card in sequence any colour)</li>
  else if( /01123|11234|12345|23456|34567|45678/.test(secCharstring) ||/56789|016789|01789J|0189JK|019JKQ/.test(secCharstring) || secCharstring == '011JQK' || secCharstring == '011JKQ' ){ 
    h2.innerHTML = `You are Winner with Rank 7!! : Straight`;
  }

  // <li>Rank 8:Three card of Kind(3  cards of same value+ any two card)</li>
  else if(/222|333|444|555|666/.test(secCharstring) || /777|888|999|111|000|JJJ|KKK|QQQ/.test(secCharstring)){
      h2.innerHTML = `You are Winner with Rank 8!! : Three card of Kind`;
  }
  
  // <li>Rank 9:Two Pair(2 pair of cards of same value+ any 3 card)</li>
  //Not Sure
  else if(/[0-9]\1{2,3}|[10JKQ]\1{2,3}/.test(secCharstring)){ 
    {
      h2.innerHTML = `You are Winner with Rank 8!! : Three card of Kind`;
    }
  } 
  
  // <li>Rank 10:One Pair(1 pair cards of same value+ any 3 card)</li>
  
  else if(/[1|2|3|4|5|6|7|8|9|00|J|K|Q]\1+/.test(secCharstring)){ 
      h2.innerHTML = `You are Winner with Rank 10!! : One Pair`;
    }
  else {
  // No Rank
    h2.innerHTML = `You lost!! : Better luck next time`;
  }
  // h2.innerHTML = `You lost!! : Better luck next time`;
  console.log(h2);

}
const buttonDeal =document.getElementsByClassName("deal")[0];
buttonDeal.addEventListener("click",(event)=>{
  event.preventDefault();
  buttonDeal.disabled = true;
  deal();
})

const show = ()=> {
  const pcard1 = document.querySelectorAll('.player1Card');
  const pcard2 = document.querySelectorAll('.player2Card');
  const result = document.getElementById('image');
  const h2 =document.getElementsByTagName("h2")[0];
  
  // document.getElementById("P1").checked = true;

  let player1score = 0;
  let player2score = 0;
  pcard1.forEach(element => {
    element.style.backgroundImage ="none";
    element.style.color = "red";
    element.style.padding = "50px";
    element.style.fontSize = "30px";
  
    player1score+=Number(element.innerHTML);
  });


  pcard2.forEach(element => {
    element.style.backgroundImage ="none";
    element.style.color = "green";
    element.style.padding = "50px";
    element.style.fontSize = "30px";
    player2score+=Number(element.innerHTML);
  });
  h2.style.width="100%";
    h2.style.fontFamily="verdana";
    h2.style.margin = "auto";
    h2.style.padding = "10px";
    h2.style.fontSize = "15px";
    let flag = false;
  if (player1score > player2score) {
   flag = true;
  h2.innerHTML = `Player 1 is Winner!! Player1=${player1score} Player2=${player2score}`; 
  } else if(player1score < player2score) {
    flag = false;
  h2.innerHTML = `Player 2 is Winner!! Player1=${player1score} Player2=${player2score}`; 
  }else{
    
  h2.innerHTML = `Its a tie with score of ${player1score}`; 
  }

  //declare player win
  let result1 = document.createElement('div');

  if(document.getElementById('P1').checked == flag) {
    result1.innerHTML = `You are the winner!`
    result.appendChild(result1);
  }else {
    result1.innerHTML = `You Lost!`
    result.appendChild(result1);
  }
 
  result1.style.width="100%";
  result1.style.height="100px";
  result1.style.fontFamily="verdana";
  result1.style.color="red";
  result1.style.alignItems="center";
  result1.style.padding = "5px";
  result1.style.fontSize = "20px";
 

 }

const buttonShow =document.getElementsByClassName("show")[0];
buttonShow.addEventListener("click",(event)=>{
  event.preventDefault();
  buttonShow.disabled = true;
show();
})

const buttonReset =document.getElementsByClassName("reset")[0];
buttonReset.addEventListener("click",(event)=>{
  event.preventDefault();
location.reload();  
})

const buttonReset1 =document.getElementsByClassName("reset")[1];
buttonReset1.addEventListener("click",(event)=>{
  event.preventDefault();
location.reload();

})



 

