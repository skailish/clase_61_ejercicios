const season = document.querySelector('#season');
const body = document.body;

const defineSeason = (date) =>
{
  console.log(date.getMonth() + 1)
  if ((date.getMonth() + 1) >= 3 && (date.getMonth() + 1) < 6) {
    return document.querySelector('#norte').checked ? "primavera" : "otoño";
  } else if ((date.getMonth() + 1) >= 6 && (date.getMonth() + 1) < 9) {
    return document.querySelector('#norte').checked ? "verano" : "invierno";
  } else if ((date.getMonth() + 1) >= 9 && (date.getMonth() + 1) < 12) {
    return document.querySelector('#norte').checked ? "otoño" : "primavera";
  } else if (((date.getMonth() + 1) < 3 && (date.getMonth() + 1) >= 1) || (date.getMonth() + 1) == 12) {
    return document.querySelector('#norte').checked ? "invierno" : "verano";
  }
}

const defineBackground = (seasonValue) =>
{
  console.log(`url(${seasonValue}.jpg)`)
  return `url(${seasonValue}.jpg)`
}
const updatePage = () =>
{
  const date = document.querySelector('#date').valueAsDate;
  if (date) {
    const seasonValue = defineSeason(date);
    season.innerHTML = seasonValue.toUpperCase();
    body.style.backgroundImage = defineBackground(seasonValue);
  }
}

const init = () =>
{
  document.querySelector('#button').addEventListener('click', updatePage)
  document.querySelector('#norte').addEventListener('click', updatePage)
}


window.onload = init;
