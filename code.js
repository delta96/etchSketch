
const selectPaint = document.querySelector('#start');
const selectReset = document.querySelector('#reset');
const selectBlue = document.querySelector('#blue');
const selectRed = document.querySelector('#red');
const sketchPad = document.querySelector('#grid');
const selectSize = document.querySelector('#size');

function addPixels(num){
    total = num * num;

    for(i=0; i < total; i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        document.getElementById('grid').appendChild(pixel);
    }

} 

function changePixelSize(num){
    let dimensions = 600 / num;

    const pixelList = document.querySelectorAll('.pixel');
    pixelList.forEach (pixel => {
        pixel.style.width = dimensions + 'px';
        pixel.style.height = dimensions + 'px';
    });
}

function paint(){
    const squares = document.querySelectorAll('.pixel');
     squares.forEach (square => {
 
         square.addEventListener('mouseover', function(){
         square.style.backgroundColor = 'black';

 })});
 }

function getSize(){
    let gridSize = prompt('Please enter size of grid (Max 100):', 16);

    if(gridSize <= 100){
        addPixels(gridSize);
        changePixelSize(gridSize);
    } else if(gridSize > 100){
        addPixels(100);
        changePixelSize(100);
    }
    paint();

}
















    

    function reset(){
       const squares = document.querySelectorAll('.pixel');
        squares.forEach (square => {

            square.style.backgroundColor = 'silver';
        })
    }

    function blue(){
       const squares = document.querySelectorAll('.pixel');
        squares.forEach (square => {

            square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'blue';
        })});
    }

    function red(){
        const squares = document.querySelectorAll('.pixel');
        squares.forEach (square => {

            square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'red';
        })});
    }

    

selectSize.addEventListener('click', getSize);
selectPaint.addEventListener('click', paint);
selectReset.addEventListener('click', reset);
selectBlue.addEventListener('click', blue);
selectRed.addEventListener('click', red);
