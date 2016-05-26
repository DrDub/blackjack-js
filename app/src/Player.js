function Player() {
  this.hand = [];
}

Player.prototype.getScore = function () {
  var score = 0;
  var hand = this.hand;
  for(i = 0; i < hand.length ; i++){
    score += (hand[i] > 10 ? 10 : hand[i]);
  }
  return score;
};
