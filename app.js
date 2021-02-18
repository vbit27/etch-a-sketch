const sketchContainer = document.getElementById('container');

const sketchField = document.createElement('div');






function addBoxes(num) {
    sketchContainer.style.gridTemplateColumns = `repeat(${num}, auto)`
    sketchContainer.style.gridTemplateRows = `repeat(${num}, auto)`
    
    for (let i = 0; i < num*num; i++) {
        

        const sketchField = document.createElement('div');
        sketchField.style.backgroundColor = 'white';
        sketchField.style.padding = '2em';
        sketchField.style.maxWidth = '100%';
        sketchField.style.maxHeight = '100%';

        sketchField.style.border = '0.1px solid grey';
        sketchField.classList = `box${i}`;

        
        sketchContainer.appendChild(sketchField);

    }
}

addBoxes(15)


