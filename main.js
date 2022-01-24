const bigBox = document.querySelector('.bigbox');

function colorReset(e) {
    const removeSquares = document.querySelectorAll('.square');
    for ( let i = 0; i < removeSquares.length; i++ ) {
        removeSquares[i].style.background = 'darkslateblue';
    }
}

// Change color when mouseover

function changeColor (e) {
    e.target.style.background = 'cornflowerblue';
    /*
    console.log("yes");
    const colorSquare = document.querySelectorAll('.square');
    for ( let i = 0; i < colorSquare.length; i++ ) {
        colorSquare[i].style.background = 'blue';
    }
    */
}

function clearDrawGrid() {
    const removeSquares = document.querySelectorAll('.square');
    for ( let i = 0; i < removeSquares.length; i++ ) {
        removeSquares[i].remove();
    }
}

function drawGrid(totalSquares) {
    clearDrawGrid();
    
    for ( let i = 0; i < totalSquares; i++ ) {
        const smallSquare = document.createElement('div');
        smallSquare.classList.add("square");
        bigBox.appendChild(smallSquare);
    }

    //Resize small squares
    newSquareSize = (512/squaresPerSide-2).toFixed(2)-0.02+"px";
    const everySquare = document.querySelectorAll('.square');
    for ( let i = 0; i < everySquare.length; i++ ) {
        everySquare[i].style['flex-basis'] = newSquareSize;
    }

    // Display grid size
    const pSize = document.querySelector('p');
    pSize.textContent = `${squaresPerSide} x ${squaresPerSide}`;
}

// Decrease/increase grid size
const increase = document.querySelector('.increase');
increase.addEventListener('click', () => {
    if ( squaresPerSide < 100) {
        squaresPerSide++;
        return drawGrid(squaresPerSide**2);
    }
});
const decrease = document.querySelector('.decrease');
decrease.addEventListener('click', () => {
    if ( squaresPerSide > 1 ) {
        squaresPerSide--;
        drawGrid(squaresPerSide**2);
    }
});

// Reset color of squares
const resetbutton = document.querySelector('.reset-button');
resetbutton.addEventListener('click', () => {
    colorReset()
});

// Draw default grid
let squaresPerSide = 20;
drawGrid(squaresPerSide**2);

bigBox.addEventListener('mouseover', changeColor);

/*
mouseTarget.forEach(('.square') => {
    $('.square').addEventListener('mouseenter', e => {
        changeColor.style.background = 'blue';
    });
});
*/
/*
changeColor.forEach((changeColor) => {
    changeColor.addEventListener('mouseenter', () => {
        changeColor.style.background = 'blue';
    });
}
*/