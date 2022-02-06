const container = document.getElementById('container');
const grid = document.createElement('div')
const resetButton = document.getElementById('reset')
const erasorButton = document.getElementById('erasor')
const drawButton = document.getElementById('draw')
document.getElementById('container').appendChild(grid)
grid.setAttribute('id','grid')
let draw = true;

resetButton.addEventListener('click', () => handleClick('reset'))
erasorButton.addEventListener('click', () => draw = false)
drawButton.addEventListener('click', () => draw = true)


 function  handleHover(box){
    if(draw == true){
        box.style['background-color'] = "black";
    }else{
        box.style['background-color'] = "#F8F0E3";
    }
   
    
 }   
    
   
function createGrid(size){

    grid.style.setProperty('--grid-rows', size);
    grid.style.setProperty('--grid-cols', size);
    for(let x=0; x<size*size;x++) {

        const box = document.createElement('div');
        box.className = "box";
        box.addEventListener('mouseenter', () => handleHover(box));
    
        grid.appendChild(box);
    }
    console.log(size)
}

function handleClick(selection){
    if(selection == 'reset'){
        clearGrid();
        let userInput = prompt('Enter an amount of boxes')

        createGrid(userInput)
    }

}
    
function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}



createGrid(64)



