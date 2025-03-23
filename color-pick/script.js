const colorInput = document.getElementById("color-input");
const hexValue = document.getElementById("hex-value");
const rgbValue = document.getElementById("rgb-value");

colorInput.addEventListener("input", function() {
    const color = colorInput.value;
    hexValue.textContent = color;
    rgbValue.textContent = hexToRgb(color);
    document.body.style.background = `linear-gradient(135deg, ${color}, #fad0c4)`;
});

function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}
function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
    });
}
