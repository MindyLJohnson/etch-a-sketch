function createSquareDivs(gridSize) {
    const container = document.querySelector('.container');
    const oldNumberOfSquares = container.childElementCount;
    const numberOfColumns = gridSize;
    const numberOfRows = gridSize;
    const gridTemplateColumns = `repeat(${(numberOfColumns)}, auto)`;
    const gridTemplateRows = `repeat(${(numberOfRows)}, auto)`;
    const numberOfSquares = numberOfColumns*numberOfRows;

    container.style.gridTemplateColumns = gridTemplateColumns;
    container.style.gridTemplateRows = gridTemplateRows;

    for (let i = oldNumberOfSquares; i > numberOfSquares; i--) {
        container.removeChild(container.lastChild);
    }

    for (let i = oldNumberOfSquares; i < numberOfSquares; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList = 'square-div';
        container.appendChild(squareDiv);
    }

    const squareDivs = document.querySelectorAll('.square-div');
    squareDivs.forEach(squareDiv => {
        squareDiv.addEventListener('mouseover', changeSquareColor);
    });
}

function changeSquareColor() {
    const randomR = Math.floor(Math.random()*255);
    const randomG = Math.floor(Math.random()*255);
    const randomB = Math.floor(Math.random()*255);
    const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

    this.style.backgroundColor = randomColor;
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearSquareColors);

function clearSquareColors() {
    const squareDivs = document.querySelectorAll('.square-div');
    squareDivs.forEach(squareDiv => {
        squareDiv.style.backgroundColor = "";
    });
}

function updateGridSize() {
    clearSquareColors();
    createSquareDivs(this.value);

    const gridSizeLabel = document.querySelector('#slider-label');
    gridSizeLabel.textContent = `Grid Size: ${this.value}x${this.value}`;
}

const gridSizeSlider = document.querySelector('.slider');
gridSizeSlider.addEventListener('change', updateGridSize);
createSquareDivs(gridSizeSlider.value);

const gridSizeLabel = document.querySelector('#slider-label');
gridSizeLabel.textContent = `Grid Size: ${gridSizeSlider.value}x${gridSizeSlider.value}`;