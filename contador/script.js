const resultado = document.querySelector('.result');
let suma = 0;
const contador = (event) =>
{
  if (event.target.innerHTML == "+ 1") {
    suma += 1
  } else if (event.target.innerHTML == "+ 10") {
    suma += 10
  } else if (event.target.innerHTML == "+ 100") {
    suma += 100
  } else if (event.target.innerHTML == "- 1") {
    suma -= 1
  } else if (event.target.innerHTML == "- 10") {
    suma -= 10
  } else if (event.target.innerHTML == "- 100") {
    suma -= 100
  }
  suma = suma < 0 ? 0 : suma;
  resultado.innerHTML = suma;
}


const init = () =>
{
  resultado.innerHTML = suma;
  document.querySelector('.buttons').addEventListener('click', contador)
}


window.onload = init;
