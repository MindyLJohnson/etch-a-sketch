function createSquareDivs(numberOfSquares) {
    const container = document.querySelector('.container');
    const gridTemplateColumns = `repeat(${Math.sqrt(numberOfSquares)}, auto)`;
    container.style.gridTemplateColumns = gridTemplateColumns;

    for (let i = 1; i <= numberOfSquares; i++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList = "square-div";
        squareDiv.innerText = i;
        container.appendChild(squareDiv);
    }
}

createSquareDivs(16);