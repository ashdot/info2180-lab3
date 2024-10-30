
document.addEventListener("DOMContentLoaded", function() {

let game_history = Array(9).fill(null);
var player = ['X','O'];
let current_player = player[0];
const message = document.getElementById('status');
var btn = document.getElementsByClassName('btn');

const winners =  [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

const squares = document.querySelectorAll("#board div");

for (let i = 0; i < squares.length; i++) {
    squares[i].classList.add("square");
    squares[i].addEventListener("click", function(){



        if (!squares[i].textContent) {
        squares[i].textContent = current_player;
        squares[i].classList.add(current_player);
        game_history[i] = current_player;

        if (checkWin(current_player)) {
            message.textContent=`Congratulations! ${current_player} wins!`
            message.classList.add('you-won');
            game_history = Array(9).fill(null);
        }
        //game_history.push({ player: current_player, square: i });
        current_player = current_player === 'X' ? 'O' : 'X';
        }

        
        
    
    })


    squares[i].addEventListener('mouseenter', () => {
        squares[i].classList.add("hover");
    });
    
    squares[i].addEventListener('mouseleave', () => {
        squares[i].classList.remove("hover");
    });

    

    function checkWin(current_player) { //X 
            for(let i = 0; i < winners.length; i++){ /// i = 11 
                const [a, b, c] = winners[i] // [0,1,2] = winners[i] , [3,4,5], [6,7,8]
                if((game_history[a] === current_player) && 
                    (game_history[b] === current_player) && 
                    (game_history[c] === current_player)){
                    return true
            }
                else {
                    continue } 
        }

        return false;
    }
    
}

    btn[0].addEventListener("click", () => {
        game_history = Array(9).fill(null);
        squares.forEach((square) => {   
            square.innerText = ''; 
            square.classList.remove('X', 'O');
        });
        message.textContent = 'Move your mouse over a square and click to play an X or an O.';
        message.classList.remove('you-won');
        



    })

} )  


    


    
    

    



    


    

 











/* Another way to do it 
squares.forEach(square => {
    square.classList.add("square");
});*/




/*
square.onclick = function (X,O) {

    document.getElementsByClassName(square)

}*/


