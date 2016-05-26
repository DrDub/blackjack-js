function Card(number, suit){
  this.suit = suit;
  this.worth = getValue(number);
}

function getValue(number){
  return number > 10 ? 10 : number;
}
