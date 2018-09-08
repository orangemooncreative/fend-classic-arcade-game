// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    TODO:
    // set initial location (x & y coordinates)
    // set the speed

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if enemy is not out of bounds (screen edge)
        // move forward
        // multiple x by dt parameter
    // else
        // set position to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

TODO:
// Player class
class Player {
    constructor(x, y) {
        // set the x & y coordinates
        this.x = x;
        this.y = y;
        // set the image sprite
        this.sprite = 'images/char-pink-girl.png';
    }
    // Methods
        // update() => update position
            // check for collision (did the enemy's x & y coordinates cross with the player's)
            // check for end of game (did the player reach the final position)
        // render() => show position
            // get current x and y position and draw player
        // handleInput() => handle keyboard input
            // update player x and y positions based on keyboard input (arrow keys)
            // check to keep player from moving offscreen
        // reset the game if player reaches water or collides with enemy
            // move player back to initial location => x and y coordinates

}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

TODO:
// Create new Player object

// initialize allEnemies array
// push new Enemy object in the array for each enemy created



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
