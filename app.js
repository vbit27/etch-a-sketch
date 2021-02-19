const sketchContainer = document.getElementById('sketch-container');
const pickSizeButton = document.getElementById('pick-size');

let size;
let sketchSquares;


function pickSize() {
    size = prompt('Pick a size between 16 and 50.');
        if (size < 16 || size > 50 || size == NaN) {
            alert('Only type a number between 16 and 50.');
            return size = 30;
        }  
    sketchContainer.querySelectorAll('*').forEach(n => n.remove()); //delets the old divs
    addBoxes(size);
}


// Add boxes inside container & initialize painting

function addBoxes(size = 20) {
    sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size*size; i++) {
            const sketchField = document.createElement('div');
            sketchField.classList.add('boxes');
            sketchField.accessKey = `${i}`;
            sketchContainer.appendChild(sketchField);
        }
    sketchSquares = document.querySelectorAll('.boxes');
    startPainting(); //initialize painting
}

// Change color when mouse over

function startPainting() {
    sketchContainer.addEventListener('mouseover', function(e) {
    if (e.target !== e.currentTarget) {
        sketchSquares.item(e.target.accessKey).classList.add('black');  
        }
    })
}


pickSizeButton.addEventListener('click', pickSize);
addBoxes();


