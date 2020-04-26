let countdown = 10;
const changeBG = () =>
{
  document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const countDown = () =>
{
  if (countdown >= 0) {
    document.getElementsByTagName('h1')[0].innerHTML = countdown;
    changeBG();
    countdown--
  }
}

const init = () =>
{
  timer
}

const timer = setInterval(countDown, 1000);

window.onload = init;
