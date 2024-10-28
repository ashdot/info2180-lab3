
document.addEventListener("DOMContentLoaded", function() {

let game_history = Array(9).fill(null);
var player = ['X','O']
let current_player = player[0]
//var status = document.getElementById('status')
var btn = document.getElementsByClassName('btn')

const winning =  [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

const squares = document.querySelectorAll("#board div");


for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square")
    squares[i].addEventListener("click", function(){

        if (!squares[i].textContent) {
        squares[i].textContent = current_player;
        squares[i].classList.add(current_player);
        game_history.push({ player: current_player, square: i });
        current_player = current_player === 'X' ? 'O' : 'X';
        
        }


    })

    squares[i].addEventListener('mouseenter', () => {
        squares[i].classList.add("hover");
    });
    
    squares[i].addEventListener('mouseleave', () => {
        squares[i].classList.remove("hover")
    });

}

    


    

 

//btn.addEventListener("click", function restart_game(){
    //squares.forEach(square => {
        //squares.innerText = '';
    //});
//})



})








/* Another way to do it 
squares.forEach(square => {
    square.classList.add("square");
});*/




/*
square.onclick = function (X,O) {

    document.getElementsByClassName(square)

}*/


