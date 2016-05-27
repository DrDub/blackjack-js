function Game(){
  this.deck = new Deck();
}

Game.prototype.deal = function () {
  for (var i = 0; i < 2; i++){
    _dealToPlayer();
    dealer.hand.push(this.deck.pop());
  }
};

Game.prototype.hit = function () {
  _dealToPlayer();
  if (player.getScore() > 21) {
    _checkWinner();
  }
};

Game.prototype.stick = function () {
  _checkWinner();
};

var player = new Player();
var dealer = new Player();


function _dealToPlayer(){
  player.hand.push(this.deck.pop());
}

function _dealToDealer(){
  while (dealer.getScore() < 18){
  dealer.hand.push(this.deck.pop());
  }
}

function _checkWinner(){
  if (player.isBust()) {
    dealer.status = 'Obviously, this guy wins.';
    player.status = 'BUSTED';
  } else {
    _dealToDealer();
    if (dealer.isBust() || player.getScore() > dealer.getScore()){
      player.status = 'WINNER, YEAH!';
      dealer.status = 'Loser right here.';
    } else {
      dealer.status = 'Dealer wins. Sucks for you';
      player.status = 'Pffft. You lost.';
    }
  }
}
