function Deck(){
  deck = [];

  for(var i = 1; i < 14; i++){
    deck.push(new Card(i, 'Hearts'));
    deck.push(new Card(i, 'Clubs'));
    deck.push(new Card(i, 'Diamonds'));
    deck.push(new Card(i, 'Spades'));
  }
    deck.sort(function(){
      return (0.5 - Math.random());
    });

  return deck;
}
