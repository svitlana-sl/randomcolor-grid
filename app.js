import randomColor from "randomcolor";

document.getElementById("generate").addEventListener("click", () => {
  const columns = parseInt(document.getElementById("columns").value, 10);
  const rows = parseInt(document.getElementById("rows").value, 10);
  const colorCount = parseInt(document.getElementById("colors").value, 10);

  const grid = document.getElementById("grid");
  const colorDisplay = document.getElementById("color-display");

  // clear previous grid and color display
  grid.innerHTML = "";
  colorDisplay.innerHTML = "";

  // generate an array of random colors
  const colors = [];
  for (let i = 0; i < colorCount; i++) {
    colors.push(randomColor());
  }

  // create grid
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  // track how many times each color is used
  const colorUsage = {};

  // generate grid cells with random colors
  for (let i = 0; i < rows * columns; i++) {
    const color = colors[i % colorCount]; // cycle through the colors
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.backgroundColor = color;
    grid.appendChild(cell);

    // track color usage
    colorUsage[color] = (colorUsage[color] || 0) + 1;
  }

  // display the color usage
  for (let color in colorUsage) {
    const colorItem = document.createElement("div");
    colorItem.className = "color-item";

    const colorCircle = document.createElement("span");
    colorCircle.style.backgroundColor = color;

    colorItem.textContent = `${colorUsage[color]} cells`;
    colorItem.insertBefore(colorCircle, colorItem.firstChild);

    colorDisplay.appendChild(colorItem);
  }
});
