const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resizeBtn");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 400 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        let opacity = 0;

        square.addEventListener("mouseover", () => {
            if (opacity === 0) {
                square.style.backgroundColor = getRandomColor();
            }
            opacity += 0.1;
            if (opacity > 1) opacity = 1;
            square.style.opacity = opacity;
        });

        container.appendChild(square);
    }
}

createGrid(16);

resizeBtn.addEventListener("click", () => {
    let input = prompt("Enter number of squares per side (max 100):");

    if (input === null) return;

    let size = Number(input);

    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Enter a number between 1 and 100");
    }
});
