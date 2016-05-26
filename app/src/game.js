function Game(){
  this.deck = new Deck();
  var player = new Player();
  var dealer = new Player();
}

Game.prototype.start = function () {
  for (var i = 0; i < 2; i++){
    _dealToPlayer();
    _dealToDealer();
  }
};

Game.prototype.hit = function(){
  _dealToPlayer();
  if (player.getScore() > 20) {
    if (player.getScore() > 21){
      console.log('loser.');
    } else {
      console.log('badass.');
    }
    _dealToDealer();
  }
};

Game.prototype.stick = function () {
  while (dealer.getScore() < 18){
    _dealToDealer();
  }
  // _checkWinner();
};

//
// function _checkWinner(){
//   if
// }

function _dealToPlayer(){
  player.hand.push(this.deck.pop());
}

function _dealToDealer(){
  dealer.hand.push(this.deck.pop());
}
