
const selectPaint = document.querySelector('#start');
const selectReset = document.querySelector('#reset');
const selectColor = document.querySelector('#color');
const selectRed = document.querySelector('#red');
const sketchPad = document.querySelector('#grid');
const selectSize = document.querySelector('#size');

function addPixels(num){ // Function that calls to the html file and adds in divs to the grid
    total = num * num;

    for(i=0; i < total; i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        document.getElementById('grid').appendChild(pixel);
    }

} 

function changePixelSize(num){ // calls to the CSS file to change the dimensions of each individual pixel
    let dimensions = 600 / num;

    const pixelList = document.querySelectorAll('.pixel');
    pixelList.forEach (pixel => {
        pixel.style.width = dimensions + 'px';
        pixel.style.height = dimensions + 'px';
    });
}

function paintBlack(){ // Paints the pixels black when mouse hovers over
    const squares = document.querySelectorAll('.pixel');
     squares.forEach (square => {
 
         square.addEventListener('mouseover', function(){
         square.style.backgroundColor = 'black';

 })});
 }

 function disableButtons() { // Function to disable button after user has created a grid and prompts user to refresh the page
    selectSize.disabled = true;
} 

function refresh() {  // Changes the content of the Size button once input is received 
    selectSize.innerHTML = 'Refresh!';
}

function getSize(){ // Will generate a grid of user desired pixels up to 100x100 


    let gridSize = prompt('Please enter size of grid (Max 100):', 16);

    if(gridSize <= 100){ // Takes user input, up to 100, and creates a grid of pixel
        addPixels(gridSize);
        changePixelSize(gridSize);
    } else if(gridSize > 100){ // Will cap the grid build by 100 if user inputs over a 100
        addPixels(100);
        changePixelSize(100);
    }

    paintBlack();
    disableButtons();
    refresh();

}

    function reset(){ // Will "reset" the board back to silver when user presses the Shake button
       const squares = document.querySelectorAll('.pixel');
        squares.forEach (square => {

            square.style.backgroundColor = 'silver';
        })
    }


    function paintColor(){ // Will generate a random rgb value and assign it to the pixel everytime user mouses over
       const squares = document.querySelectorAll('.pixel');
        squares.forEach (square => {
            square.addEventListener('mouseover', function(){
                
            square.style.backgroundColor = `rgb(${Math.floor(Math.random() * (255 - 1 + 1) + 1)}, 
             ${Math.floor(Math.random() * (255 - 1 + 1) + 1)}, 
             ${Math.floor(Math.random() * (255 - 1 + 1) + 1)})`;
        })});

    }


    

selectSize.addEventListener('click', getSize);
selectPaint.addEventListener('click', paintBlack);
selectReset.addEventListener('click', reset);
selectColor.addEventListener('click', paintColor);



