const randomColor = Math.floor(Math.random() * 8000000) + 1;
function hexToRgb(hex) {
    // Remove the leading '#' if present
    hex = hex.replace(/^#/, '');

    // Convert the hex value to decimal
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return the RGB values as an object
    rgb= `rgb(${r},${g},${b})`;
    return rgb;
}

// Example usage
const hexColor = `#${randomColor}`; // Green color in hexadecimal
const rgbColor = hexToRgb(hexColor);
console.log(rgbColor); // Output: { r: 0, g: 255, b: 0 }
