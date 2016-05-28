$(document).ready(function(){
  var game = new Game();

  $('#new-game').click(function(){
    location.reload();
  });

  _disableButtons();
  $('#new-game').prop('disabled', true);
  $('#player-status').hide();
  $('#dealer-status').hide();


  $('#deal').click(function(){
    game.deal();
    listPlayerCards(player.hand);
    hideFirstCard(dealer.hand);
    $('#dealer-score').html('Hidden!');
    _enableButtons();

  });

  $('#hit').click(function(){
    game.hit();
    listPlayerCards(player.hand);
    if (player.isBust() || $('#score').val() === 21){
      showAllCards(dealer.hand);
      _toggleStatus();
    } else {
      hideFirstCard(dealer.hand);
    }

  });

  $('#stick').click(function(){
    game.stick();
    showAllCards(dealer.hand);
    _toggleStatus();
  });

});


function listPlayerCards(hand){
  $('#player-cards').html('');
  for(var i = 0; i < hand.length; i++){
    var card = cardName(hand[i].number) + ' of ' + hand[i].suit;
    var li = $('<li>').text(card).delay(1000);
    $('#player-cards').append(li);
    $('#player-score').html(player.getScore());
  }
}

function hideFirstCard(hand){
  $('#dealer-cards').html('');
  var li = $('<li>').text('This card is hidden!');
  $('#dealer-cards').append(li);
  listDealerCards(hand);
}

function showAllCards(hand){
  $('#dealer-cards').html('');
  var card = cardName(hand[0].number) + ' of ' + hand[0].suit,
      li = $('<li>').text(card);
  $('#dealer-cards').append(li);
  listDealerCards(hand);
  $('#dealer-score').html(dealer.getScore());
}

function listDealerCards(hand){
  for(var i = 1; i < hand.length; i++){
    var card = cardName(hand[i].number) + ' of ' + hand[i].suit;
    var li2 = $('<li>').text(card);
    $('#dealer-cards').append(li2);
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

function _toggleStatus(){
  $('#player-status').html(player.status);
  $('#dealer-status').html(dealer.status);
  $('#player-status').show();
  $('#dealer-status').show();
}

function _disableButtons(){
    $('#hit').prop('disabled', true);
    $('#stick').prop('disabled', true);
}

function _enableButtons(){
  $('#deal').prop('disabled', true);
  $('#hit').prop('disabled', false);
  $('#stick').prop('disabled', false);
  $('#new-game').prop('disabled', false);
}
