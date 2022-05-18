
const selectPaint = document.querySelector('#start');
const selectReset = document.querySelector('#reset');
const selectBlue = document.querySelector('#blue');
const selectRed = document.querySelector('#red');
const sketchPad = document.querySelector('#grid');
const selectCreate = document.querySelector('#create');

function addPixels(){
    for(i=0; i < 256; i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        document.getElementById('grid').appendChild(pixel);
    }
}


    function paint(){
       const squares = document.querySelectorAll('.pixel');
        squares.forEach (square => {
    
            square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'black';

    })});
    }

    function reset(){
       const squares = document.querySelectorAll('.pixel');
        squares.forEach (square => {

            square.style.backgroundColor = 'white';
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

    

selectCreate.addEventListener('click', addPixels);
selectPaint.addEventListener('click', paint);
selectReset.addEventListener('click', reset);
selectBlue.addEventListener('click', blue);
selectRed.addEventListener('click', red);
