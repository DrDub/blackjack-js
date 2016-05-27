describe("Player", function() {
  var player, card1, card2, card3;

  beforeEach(function() {
    player = new Player();
    card1 = new Card (2, 'Hearts');
    card2 = new Card (8, 'Clubs');
    card3 = new Card (1, 'Diamonds');
    card4 = new Card (13, 'Spades');
    card5 = new Card (10, 'Spades');
  });

  it('initializes with an empty hand', function() {
    expect(player.hand).toEqual([]);
  });

  it('initializes with a score of 0', function(){
    expect(player.getScore()).toEqual(0);
  });

  it('displays total score', function(){
    player.hand = [card1, card2];
    expect(player.getScore()).toEqual(card1.worth + card2.worth);
  });

  it('determines bust', function(){
    player.hand = [card1, card4, card5];
    expect(player.isBust()).toBeTruthy();
  });

  it('adds ace as 11 if total score less than 11', function(){
    player.hand = [card1, card2, card3];
    expect(player.getScore()).toEqual(21);
  });
});
