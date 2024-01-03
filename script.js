const containerDiv = document.querySelector('.container-div');
const numOfSquaresBtn = document.querySelector('.number-of-squares-btn');
const clearBtn = document.querySelector('.clear-btn');
let gridSize = 0;
let validInput = false;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

numOfSquaresBtn.addEventListener('click', () => {
    
    while(validInput == false){
        gridSize = prompt('Please enter the number of squares for your new grid.');
        if(gridSize >= 0 && gridSize <= 100)
        {validInput = true;} 
    }
    validInput = false;

    createGrid(gridSize);
});

clearBtn.addEventListener('click', () => {
    containerDiv.innerHTML = '';
    createGrid(gridSize);
});

function paint(e) {
    e.preventDefault();
    if (e.type === 'mouseover' && !mouseDown){
        return;
    } 
    else {
        e.target.style.backgroundColor = "black";
    }
}


function createGrid(size){
    let boxSize = containerDiv.clientWidth/size;
    

    containerDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i <= size * size; i++){

        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', paint);
        gridElement.addEventListener('mousedown', paint);
        containerDiv.appendChild(gridElement);       
    }
}





