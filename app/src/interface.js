$(document).ready(function(){
  var game = new Game();
  $('#hit').prop('disabled', true);
  $('#stick').prop('disabled', true);
  $('#status').hide();
  
  $('#deal').click(function(){
    game.start();
    listPlayerCards(player.hand);
    $('#deal').prop('disabled', true);
    $('#hit').prop('disabled', false);
    $('#stick').prop('disabled', false);
  });
});

  $('#hit').click(function(){
    console.log('here!');
    game.hit();
    listPlayerCards(player.hand);
    $('#hit').prop('disabled', true);
    $('#stick').prop('disabled', true);
  });


function listPlayerCards(hand){
  for(var i = 0; i < hand.length; i++){
    var card = cardName(hand[i].number) + ' of ' + hand[i].suit;
    console.log(card);
    var li = $('<li>').text(card);
    $('#player-cards').append(li);
    $('#player-score').html(player.getScore());
  }
}

function listDealerCards(hand){
  for(var i = 1; i < hand.length; i++){
    var card = cardName(hand[i].number) + ' of ' + hand[i].suit;
    console.log(card);
    var li = $('<li>').text(card);
    $('#dealer-cards').append(li);
    $('#dealer-score').html(dealer.getScore());
  }
}

function cardName(value){
  switch(value) {
    case 1: return 'Ace';
    case 11: return 'Jack';
    case 12: return 'Queen';
    case 13: return 'King';
    default: return value;
  }
}
