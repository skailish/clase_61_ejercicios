const circle = document.getElementById('round');

const updateCirclePosition = (event) =>
{
  circle.style = `left: ${event.x}px; top: ${event.y}px`

}

const init = () =>
{
  document.getElementById('background').addEventListener('mousemove', updateCirclePosition)
  updateCirclePosition()
}


window.onload = init;
