function createSquareDivs(numberOfColumns, numberOfRows) {
    const container = document.querySelector('.container');
    const gridTemplateColumns = `repeat(${(numberOfColumns)}, auto)`;
    const gridTemplateRows = `repeat(${(numberOfRows)}, auto)`;
    const numberOfSquares = numberOfColumns*numberOfRows;

    container.style.gridTemplateColumns = gridTemplateColumns;
    container.style.gridTemplateRows = gridTemplateRows;

    for (let i = 1; i <= numberOfSquares; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList = "square-div";
        container.appendChild(squareDiv);
    }

    const squareDivs = document.querySelectorAll('.square-div');
    squareDivs.forEach(squareDiv => {
        squareDiv.addEventListener('mouseover', changeSquareColor);
    });
}

function changeSquareColor() {
    this.style.backgroundColor = "green";
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', clearSquareColors);

function clearSquareColors() {
    const squareDivs = document.querySelectorAll('.square-div');
    squareDivs.forEach(squareDiv => {
        squareDiv.style.backgroundColor = "";
    });
}

createSquareDivs(16, 16);