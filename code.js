const squares = document.querySelectorAll('.pixel');
const selectPaint = document.querySelector('#start');
const selectReset = document.querySelector('#reset');
const selectBlue = document.querySelector('#blue');
const selectRed = document.querySelector('#red');


    function paint(){
        squares.forEach (square => {
    
            square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'black';

    })});
    }

    function reset(){
        squares.forEach (square => {

            square.style.backgroundColor = 'white';
        })
    }

    function blue(){
        squares.forEach (square => {

            square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'blue';
        })});
    }

    function red(){
        squares.forEach (square => {

            square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'red';
        })});
    }

selectPaint.addEventListener('click', paint);
selectReset.addEventListener('click', reset);
selectBlue.addEventListener('click', blue);
selectRed.addEventListener('click', red);
