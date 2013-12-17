Crafty.scene('Game', function() {
    
    // A 2D array to keep track of all the occupied tiles
    this.occupied = new Array(Game.map_grid.width);
    for(var i = 0; i < Game.map_grid.width; i++) {
        this.occupied[i] = new Array(Game.map_grid.height);
        for(var y = 0; y < Game.map_grid.height; y++) {
            this.occupied[i][y] = false;
        }
    }
    
    Crafty.e('Player').at(5, 5);
    
    for(var i = 0; i < 20; i++) {
        var x = Math.floor(Math.random() * 47) + 43,
            y = Math.floor(Math.random() * 33) + 3;
        Crafty.e('Enemy').at(x, y);
    }
});

Crafty.scene('Loading', function() {
    Crafty.e('2D, DOM, Text').text('Loading; please wait...').attr({
        x: 0,
        y: Game.height() / 2 - 24,
        w: Game.width()
  });

  Crafty.load(['assets/Untitled.png'], function() {
        Crafty.sprite(16, 'assets/Untitled.png', {
            spr_enemy: [0,0],
            spr_player: [1,0] 
        });

        Crafty.scene('Game');
    })
});