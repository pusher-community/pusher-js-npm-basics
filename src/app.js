var Pusher = require('../pusher');

Pusher.log = function(msg) {
  console.log(msg);
};

function App() {
  this.pusher = new Pusher('0b2f668ffd067365b2c8');
}

var app = new App();
