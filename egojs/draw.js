// Variables
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const colounns = canvas.width / scale;
var snake;

(function setup() {
  snake = new Snake();
  snake.draw();
  fruit = new Fruit();
  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }
    snake.checkCollision();
    document.querySelector(".score")
      .innerText = snake.total;
  }, 150);
})();

window.addEventListener("keydown", evt => {
  const direction = evt.key.replace("Arrow", "");
  snake.changeDirection(direction);
});
