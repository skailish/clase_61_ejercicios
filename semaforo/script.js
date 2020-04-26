const allCircles = document.querySelectorAll('.colores')

const activarSemaforo = () =>
{
  apagarSemaforo()
  const randomIndex = Math.floor(Math.random() * allCircles.length);
  allCircles[randomIndex].classList.remove('disabled')
}

const apagarSemaforo = () =>
{
  allCircles[0].classList.add('disabled');
  allCircles[1].classList.add('disabled');
  allCircles[2].classList.add('disabled');
}

const init = () =>
{
  interval
}

const interval = setInterval(activarSemaforo, 1000);

window.onload = init;
