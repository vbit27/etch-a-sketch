const sketchContainer = document.querySelector('.sketch-container');

/*const sketchField = document.createElement('div');
sketchField.style.backgroundColor = 'white';
sketchField.textContent = 'Haii';
sketchField.style.border = '2px solid black';

sketchContainer.appendChild(sketchField);*/

const sizeOfSketch = prompt('How big');

function addBoxes(num) {
    for (let i = 0; i < num; i++) {
        
        const sketchField = document.createElement('div');
        sketchField.style.backgroundColor = 'white';
        sketchField.textContent = 'Haii';
        sketchField.style.border = '2px solid black';
        sketchField.classList = `box${i}`;

        
        sketchContainer.appendChild(sketchField);

    }
}

addBoxes(sizeOfSketch);
