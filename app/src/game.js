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
  if (player.getScore() > 20) {
    if (player.getScore() > 21){
      player.status = 'BUSTED';
    } else {
      player.status = 'Blackjack, baby.';
    }
    _dealToDealer();
  }
};

Game.prototype.stick = function () {
  _dealToDealer();
};

var player = new Player();
var dealer = new Player();


function _dealToPlayer(){
  player.hand.push(this.deck.pop());
}

function _dealToDealer(){
  dealer.hand.push(this.deck.pop());
  _checkWinner();
}

function _checkWinner(){
  if (player.isBust() || player.getScore() < dealer.getScore()){
    dealer.status = 'Dealer wins. Sucks for you';
    player.status = 'Pffft. You lost.';
  } else if (dealer.isBust() || player.getScore() > dealer.getScore()){
    player.status = 'WINNER, YEAH!';
    dealer.status = 'Loser right here.';
  }
}
