const squares = document.querySelectorAll('.pixel');
const selectPaint = document.querySelector('#start');
const selectReset = document.querySelector('#reset');


    function paint(){
        squares.forEach (square => {
    
            square.addEventListener('mouseover', function(){
            square.style.backgroundColor = 'black';

    })});
    }

    function reset(){
        squares.forEach (square => {

            square.style.backgroundColor = 'aqua';
        })
    }

selectPaint.addEventListener('click', paint);
selectReset.addEventListener('click', reset);