describe('Deck', function(){
  var deck;

  beforeEach(function(){
    deck = new Deck();
  });

  it('has 52 cards', function(){
    expect(deck.length).toEqual(52);
  });
});
