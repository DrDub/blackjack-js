describe('Card', function(){
  var card, number, suit;

  beforeEach(function(){
    number = 12;
    suit = 'Hearts';
    card = new Card(number, suit);
  });

  it('has a suit', function(){
    expect(card.suit).toEqual(suit);
  });

  it('has a value', function(){
    number = 9;
    card = new Card(number, suit);
    expect(card.worth).toEqual(number);
  });

  it('has value set to 10 if number greater than 10', function(){
    expect(card.worth).toEqual(10);
  });
});
