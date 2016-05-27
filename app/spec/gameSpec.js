describe('Game', function(){
  var game, $;

  beforeEach(function(){
    game = new Game();
    player = new Player();
    dealer = new Player();
    game.deal();
    $ = 'selector';
  });

  it('is initialised with a new full deck', function(){
    game = new Game();
    expect(game.deck.length).toEqual(52);
  });

  it('starts a new game by dealing two cards to players', function(){
    expect(player.hand.length).toEqual(2);
    expect(dealer.hand.length).toEqual(2);
  });

  it("deals a card to player when 'hit'", function(){
    game.hit();
    expect(player.hand.length).toEqual(3);
  });

    describe('deals a card to dealer', function(){
      it("when 'stick'", function(){
        spyOn(dealer, 'getScore').and.returnValue(17);
        game.stick();
        expect(dealer.hand.length).toEqual(3);
        expect(player.hand.length).toEqual(2);
      });

      it('if player scores blackjack', function(){
        spyOn(player, 'getScore').and.returnValue(21);
        spyOn(dealer, 'getScore').and.returnValue(18);
        game.hit();
        expect(dealer.hand.length).toEqual(3);
      });

      it('if player goes bust', function(){
        spyOn(player, 'getScore').and.returnValue(25);
        spyOn(dealer, 'getScore').and.returnValue(18);
        game.hit();
        expect(dealer.hand.length).toEqual(3);
      });
    });

  it('determines dealer as winner', function(){
    spyOn(player, 'getScore').and.returnValue(25);
    spyOn(dealer, 'getScore').and.returnValue(18);
    game.hit();
    expect(dealer.status).toEqual('Dealer wins. Sucks for you');
  });

  it('determines player as winner', function(){
    spyOn(player, 'getScore').and.returnValue(21);
    spyOn(dealer, 'getScore').and.returnValue(17);
    game.hit();
    expect(player.status).toEqual('WINNER, YEAH!');
  });
});
