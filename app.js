const sketchContainer = document.getElementById('sketch-container');

// Add boxes inside container

function addBoxes(num) {
    sketchContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num*num; i++) {
        const sketchField = document.createElement('div');
        sketchField.classList.add('boxes');
        sketchField.accessKey = `${i}`;
        sketchContainer.appendChild(sketchField);

    }
}

addBoxes(50)


// Change color when mouse over

const sketchSquares = document.querySelectorAll('.boxes');



sketchContainer.addEventListener('mouseover', function(e) {
    if (e.target !== e.currentTarget) {
        sketchSquares.item(e.target.accessKey).classList.add('black');  
    }
})


