var $car = document.querySelector('.car');
var id = null;
var position = 0;

window.addEventListener('keydown', rotateCar);

function rotateCar(event) {
  if (event.key === 'ArrowDown') {
    $car.className = ('car down');
  } else if (event.key === 'ArrowUp') {
    $car.className = ('car up');
  } else if (event.key === 'ArrowLeft') {
    $car.className = ('car left');
  } else if (event.key === 'ArrowRight') {
    $car.className = ('car right');
  } else if (event.key === ' ') {
    startCar();
  }
}
function startCar() {
  clearInterval(id);
  id = setInterval(startEngine, 16);
  function startEngine() {
    position++;
    $car.style.left = position + 'px';
  }
}
