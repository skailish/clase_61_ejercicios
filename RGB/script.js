const r = document.querySelector('#R');
const g = document.querySelector('#G');
const b = document.querySelector('#B');
const body = document.body;

// FUNCIÓN ENCONTRADA CON EL ORÁCULO GOOGLE
const RGBToHSL = (r, g, b) =>
{
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0)
    h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l];
}

const updateValues = () =>
{
  const hsl = RGBToHSL(r.value, g.value, b.value);
  const hslValue = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
  const rgbValue = `rgb(${r.value}, ${g.value}, ${b.value})`

  const value1 = document.querySelector('#HSL').checked ? "H: " + hsl[0] : "R: " + document.querySelector('#R').value;
  const value2 = document.querySelector('#HSL').checked ? "S: " + hsl[1] + "%" : "G: " + document.querySelector('#G').value;
  const value3 = document.querySelector('#HSL').checked ? "L: " + hsl[2] + "%" : "B: " + document.querySelector('#B').value;

  document.querySelector('#value1').innerHTML = value1;
  document.querySelector('#value2').innerHTML = value2;
  document.querySelector('#value3').innerHTML = value3;

  document.getElementsByTagName('h1')[0].innerHTML = document.querySelector('#HSL').checked ? "HSL" : "RGB";
  document.querySelector('#totalValue').innerHTML = document.querySelector('#HSL').checked ? hslValue : rgbValue;
}

const changeColor = () =>
{
  const hsl = RGBToHSL(r.value, g.value, b.value);
  const hslValue = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
  const rgbValue = `rgb(${r.value}, ${g.value}, ${b.value})`
  body.style.backgroundColor = document.querySelector('#HSL').checked ? hslValue : rgbValue;
  updateValues()
}

const updateColor = () =>
{
  r.addEventListener('mouseup', changeColor)
  g.addEventListener('mouseup', changeColor)
  b.addEventListener('mouseup', changeColor)
  document.querySelector('#HSL').addEventListener('change', updateValues)
}

const init = () =>
{
  updateColor()
  changeColor()
  updateValues()
}


window.onload = init;
