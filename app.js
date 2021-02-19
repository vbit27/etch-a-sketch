const sketchContainer = document.getElementById('sketch-container');


// Add boxes inside container

function addBoxes(size = 20) {
    sketchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;


    for (let i = 0; i < size*size; i++) {
        const sketchField = document.createElement('div');
        sketchField.classList.add('boxes');
        sketchField.accessKey = `${i}`;
        sketchContainer.appendChild(sketchField);
    }
}

let size = 20;


addBoxes(50)

// Change color when mouse over
const sketchSquares = document.querySelectorAll('.boxes');


sketchContainer.addEventListener('mouseover', function(e) {
    if (e.target !== e.currentTarget) {
        sketchSquares.item(e.target.accessKey).classList.add('black');  
    }
})


const pickSizeButton = document.getElementById('pick-size');

pickSizeButton.addEventListener('click', pickSize)

function pickSize() {
    size = prompt('Pick a size between 16 and 50.')
        if (size < 16 || size > 50 || size == NaN) {
            alert('Only type a number between 16 and 50.');
            return size = 30;
        } else 
        sketchContainer.querySelectorAll('*').forEach(n => n.remove());
        return  addBoxes(size);
}


