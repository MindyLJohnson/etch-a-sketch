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
        squareDiv.innerText = i;
        container.appendChild(squareDiv);
    }
}

createSquareDivs(16, 16);