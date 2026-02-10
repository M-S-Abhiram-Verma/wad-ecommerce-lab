// Dynamically changing background color
const colors = ["#FFB6C1", "#87CEFA", "#98FB98", "#FFD700", "#FFA07A"];
let colorIndex = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 3000);

// Dynamically changing fonts
const fonts = ["Arial", "Verdana", "Georgia", "Courier New", "Tahoma"];
let fontIndex = 0;
setInterval(() => {
    document.body.style.fontFamily = fonts[fontIndex];
    fontIndex = (fontIndex + 1) % fonts.length;
}, 5000);

// Moving Box Animation
const movingBox = document.createElement("div");
movingBox.style.position = "absolute";
movingBox.style.width = "50px";
movingBox.style.height = "50px";
movingBox.style.backgroundColor = "red";
movingBox.style.borderRadius = "10px";
document.body.appendChild(movingBox);

let xPos = 0;
let direction = 1;
setInterval(() => {
    if (xPos >= window.innerWidth - 60 || xPos <= 0) {
        direction *= -1;
    }
    xPos += direction * 5;
    movingBox.style.left = xPos + "px";
    movingBox.style.top = "100px";
}, 50);

// Button hover effect
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

// Input field hover effect
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", () => {
        input.style.backgroundColor = "#FFFFE0";
    });
    input.addEventListener("blur", () => {
        input.style.backgroundColor = "white";
    });
});
