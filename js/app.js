// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // TODO:
  // set the move distance
  this.step = 101;
  this.jump = 83;
  // set initial location (x & y coordinates)
  this.x = x;
  this.y = y + 45;
  // set the speed
  this.speed = speed;
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

  this.x =
    this.x < this.step * 5
      ? (this.x += dt * this.speed)
      : (this.x = -this.step);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// create Player class
class Player {
  constructor() {
    // set the move distance
    this.step = 101;
    this.jump = 83;
    // set the origin position
    this.xOrigin = this.step * 4;
    this.yOrigin = this.jump * 5 - 40;
    // set the x & y coordinates
    this.x = this.xOrigin;
    this.y = this.yOrigin;
    // set the image sprite
    this.sprite = 'images/char-pink-girl.png';
  }
  // Methods
  // TODO:
  // update() => update position
  // check for collision (did the enemy's x & y coordinates cross with the player's)
  // check for end of game (did the player reach the final position)

  // get current x and y position and draw player
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  // handleInput() => handle keyboard input
  // update player x and y positions based on keyboard input (arrow keys)
  // prevent player from moving offscreen
  handleInput(key) {
    switch (key) {
      case 'left':
        this.x = this.x > 0 ? this.x - this.step : this.x;
        break;
      case 'right':
        this.x = this.x < this.step * 4 ? (this.x += this.step) : this.x;
        break;
      case 'down':
        this.y = this.y < this.jump * 5 - 40 ? (this.y += this.jump) : this.y;
        break;
      case 'up':
        this.y = this.y > 0 ? this.y - this.jump : this.y;
        break;
    }
  }
  // reset the game if player reaches water or collides with enemy
  // move player back to initial location => x and y coordinates
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// TODO:
// create new Player object
const player = new Player();
// create new nemy object
const enemy1 = new Enemy(-101, 0, 300);
const enemy2 = new Enemy(-101, 83, 100);
const enemy3 = new Enemy(-101 * 2.5, 83 * 2, 200);
// initialize allEnemies array
// push new Enemy object in the array for each enemy created
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

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
