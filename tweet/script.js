const contador = document.querySelector('#contador');
const textarea = document.querySelector('#tweet');
const button = document.querySelector('#button');
let suma = 240;

const tweetCount = () =>
{

  if (suma > 0) {
    suma = 240 - textarea.value.length;
    contador.innerHTML = suma;
  } else {
    suma = 240 - textarea.value.length;
    contador.innerHTML = suma;
  }

  if (suma > 0) {
    button.disabled = false;
    contador.classList.remove('exceed')
  } else {
    button.disabled = true;
    contador.classList.add('exceed')
  }
}

const sendTweet = (event) =>
{
  console.log(event)
  alert("Enviado")
  textarea.value = "";
  suma = 240;
  contador.innerHTML = suma;
}

const init = () =>
{
  contador.innerHTML = suma;
  textarea.addEventListener('keyup', tweetCount)
  button.addEventListener('click', sendTweet)
}


window.onload = init;
