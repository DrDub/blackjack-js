describe("Player", function() {
  var player, card1, card2;

  beforeEach(function() {
    player = new Player();
    card1 = new Card (2, 'Hearts');
    card2 = new Card (9, 'Clubs');
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
    expect(player.isBust()).toBeTruthy();
  });
});
