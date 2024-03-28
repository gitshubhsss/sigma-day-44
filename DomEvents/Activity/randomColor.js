const randomColor = Math.floor(Math.random() * 8000000) + 1; //randomNum=randomColor
const hexColor = `#${randomColor}`;

//selecting the elements from html
let h1 = document.querySelector("#colorName");
let btn = document.querySelector("#pickColor");
let box = document.querySelector(".box");

function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values as an object
  rgb = `rgb(${r},${g},${b})`;
  return rgb;
}
rgbColor = hexToRgb(hexColor);

btn.addEventListener("click", () => {
  rgbColor = hexToRgb(hexColor);
  h1.innerText = `${rgbColor}`;
  box.style.backgroundColor = `${rgbColor}`;
});
