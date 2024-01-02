const containerDiv = document.querySelector('.container-div');
const numOfSquaresBtn = document.querySelector('.number-of-squares-btn');
let numberOfSquaresPerSide = 0;
let validInput = false;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

numOfSquaresBtn.addEventListener('click', () => {

    while(validInput == false){
        numberOfSquaresPerSide = prompt('Please enter the number of squares for your new grid.');
        if(numberOfSquaresPerSide >= 0 && numberOfSquaresPerSide <= 100)
        {validInput = true;} 
    }
    validInput = false;

    let boxSize = containerDiv.clientWidth/numberOfSquaresPerSide;
    

    containerDiv.style.gridTemplateColumns = `repeat(${numberOfSquaresPerSide}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${numberOfSquaresPerSide}, 1fr)`;
    for(let i = 0; i <= numberOfSquaresPerSide * numberOfSquaresPerSide; i++){

        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', paint);
        gridElement.addEventListener('mousedown', paint);
        containerDiv.appendChild(gridElement);
            
    }
});

function paint(e) {
    event.preventDefault();
    if (e.type === 'mouseover' && !mouseDown){
        return;
    } 
    else {
        e.target.style.backgroundColor = "black";
    }
}






