function Player() {
  this.hand = [];
}

Player.prototype.getScore = function() {
  var score = 0;

  for(i = 0; i < this.hand.length ; i++){
    score += (this.hand[i].worth > 10 ? 10 : this.hand[i].worth);
  }

  return score;
};

Player.prototype.isBust = function () {
  return true;
};
