function Player() {
  this.hand = [];
}

Player.prototype.getScore = function() {
  var score = 0;

  for(i = 0; i < this.hand.length ; i++){
    if(this.hand[i].number === 1){
      score++;
    } else {
      score += (this.hand[i].worth > 10 ? 10 : this.hand[i].worth);
    }
  }

  for(var i = 0; i < this.hand.length; i++){
    if(this.hand[i].number === 1 && score <= 11){
      score += 10;
    }
  }
  return score;
};


Player.prototype.isBust = function () {
  return this.getScore() > 21;
};
