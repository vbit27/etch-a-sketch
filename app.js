const sketchContainer = document.getElementById('sketch-container');
const pickSizeButton = document.getElementById('pick-size');
const resetSettings = document.getElementById('reset');
const changeColor = document.getElementById('color');
const changeColorBlack = document.getElementById('black');

let size;
let sketchSquares;


// Add boxes inside container & initialize painting

const addBoxes = (size = 20) => {
    sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        const sketchField = document.createElement('div');
        sketchField.classList.add('boxes');
        sketchField.accessKey = `${i}`;
        sketchContainer.appendChild(sketchField);
    }
    sketchSquares = sketchContainer.querySelectorAll('.boxes');
    startPainting(); //initialize painting
};

// Change color when mouse over (Black)

const startPainting = () => {
    sketchContainer.addEventListener('mouseover', (e) => {
        if (e.target !== e.currentTarget) {
            sketchSquares[e.target.accessKey].style.backgroundColor = 'grey';
        }
    })
};

// Change color when mouse over (Random)

const startPaintingRandom = () => {
    sketchContainer.addEventListener('mouseover', function(e) {
        if (e.target !== e.currentTarget) {
            sketchSquares[e.target.accessKey].style.backgroundColor = 
            '#' + Math.random().toString(16).substr(-6);
        }
    })
};



//Reset all settings

const reset = () => {
    sketchSquares.forEach(n => n.style.backgroundColor = '');
};


//Change the size of the container

const pickSize = () => {
    size = prompt('Pick a size between 16 and 60.');
        if (size < 16 || size > 60 || isNaN(size)) {
            alert('Only type a number between 16 and 60.');
            return size = 30;
        }  
    sketchContainer.querySelectorAll('.boxes').forEach(n => n.remove()); //delets the old divs
    addBoxes(size);
};


addBoxes();

pickSizeButton.addEventListener('click', pickSize);
resetSettings.addEventListener('click', reset);
changeColor.addEventListener('click', startPaintingRandom);
changeColorBlack.addEventListener('click', startPainting);


