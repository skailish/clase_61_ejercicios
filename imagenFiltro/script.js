const img = document.getElementById('img');
const getImage = () =>
{
  img.src = document.getElementById('url').value;
}

const updateFilter = (event) =>
{

  const filter = document.getElementById('filters').value;
  const percent = document.getElementById('range').value;

  document.getElementById('rangeValue').innerHTML = document.getElementById('range').value;

  img.style.filter = `${filter}(${percent}%)`;
  console.log(`${filter}(${percent}%)`)
}

const init = () =>
{
  getImage();
  document.getElementById('url').addEventListener('change', getImage);
  document.getElementById('filters').addEventListener('change', updateFilter);
  document.getElementById('range').addEventListener('click', updateFilter)
}


window.onload = init;
