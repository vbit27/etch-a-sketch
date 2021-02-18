

const sketchContainer = document.getElementById('sketch-container');




function addBoxes(num) {

    //repeat(auto-fit, minmax(75px, 1fr))
    sketchContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    
    for (let i = 0; i < num*num; i++) {
        const sketchField = document.createElement('div');
        sketchField.style.backgroundColor = 'white';
        sketchContainer.style.height = '0';
        sketchField.style.paddingBottom = '70%';
        sketchField.style.border = '1px solid grey';
        sketchField.classList = `box${i}`;
        sketchContainer.appendChild(sketchField);

    }
}

addBoxes(50)


