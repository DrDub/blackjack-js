describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });

  it('should initialise with an empty hand', function() {
    expect(player.hand).toEqual([]);
  });

  it('should initialise with a score of 0', function(){
    expect(player.getScore()).toEqual(0);
  });

  it('should display total score', function(){
    player.hand = [2, 9];
    expect(player.getScore()).toEqual(11);
  });
});
