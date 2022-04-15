var $car = document.querySelector('.car');

window.addEventListener('keydown', rotateCar);

function rotateCar(event) {
  if (event.key === 'ArrowDown') {
    $car.className = ('class', 'car down');
  } else if (event.key === 'ArrowUp') {
    $car.className = ('class', 'car up');
  } else if (event.key === 'ArrowLeft') {
    $car.className = ('class', 'car left');
  } else if (event.key === 'ArrowRight') {
    $car.className = ('class', 'car right');
  }
}
