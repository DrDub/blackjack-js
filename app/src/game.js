function Game(){
  this.deck = new Deck();
}

Game.prototype.deal = function () {
  for (var i = 0; i < 2; i++){
    _dealToPlayer();
    _dealToDealer();
  }
};

Game.prototype.hit = function () {
  _dealToPlayer();
};

Game.prototype.stick = function () {
  while (dealer.getScore() < 18){
    _dealToDealer();
  }
};
function _dealToPlayer(){
  player.hand.push(this.deck.pop());
}

function _dealToDealer(){
  dealer.hand.push(this.deck.pop());
  // _checkWinner();
}
