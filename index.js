const gameBoard = {
    board:[``,``,``,``,``,``,``,``,``],
    winner: null
}

function Player(name,marker){
    this.name = name;
    this.marker = marker
}

//const gameFlowObject ={}/


const player1 = new Player('player1','X')
const player2 = new Player('player2','O')


console.log(player1)
console.log(player2)
console.log(gameBoard)


function gameFlow(){

    while (gameBoard.board[0] == `` || 
        gameBoard.board[1] == `` || 
        gameBoard.board[2] == `` || 
        gameBoard.board[3] == `` || 
        gameBoard.board[4] == `` || 
        gameBoard.board[5] == `` || 
        gameBoard.board[6] == `` || 
        gameBoard.board[7] == `` || 
        gameBoard.board[8] == `` 

    ) {
        let markPosition = prompt('Enter Box Number to mark for Player 1')
        if (gameBoard.board[markPosition] == ``){
            gameBoard.board[markPosition] = player1.marker
        }   
    
        
        let markPosition2 = prompt('Enter Box Number to mark for Player 2')
        if (gameBoard.board[markPosition2] == ``){
            gameBoard.board[markPosition2] = player2.marker
        }

       const playerX = (checkWinner('X'))
       const playerO =(checkWinner('O'))

       if (playerX){return gameBoard.winner=player1.name}
       if (playerO){return gameBoard.winner=player2.name}
      
    
    }

   
    if(gameBoard.winner==null){gameBoard.winner='Draw'}
    console.log(gameBoard)
    
}

function checkWinner(symbol){

    const winCon = symbol + symbol + symbol;
    const sequence = [
        gameBoard.board[0] + gameBoard.board[1] + gameBoard.board[2],
        gameBoard.board[3] + gameBoard.board[4] + gameBoard.board[5],
        gameBoard.board[6] + gameBoard.board[7] + gameBoard.board[8],
        gameBoard.board[0] + gameBoard.board[3] + gameBoard.board[6],
        gameBoard.board[1] + gameBoard.board[4] + gameBoard.board[7],
        gameBoard.board[2] + gameBoard.board[5] + gameBoard.board[8],
        gameBoard.board[0] + gameBoard.board[4] + gameBoard.board[8],
        gameBoard.board[2] + gameBoard.board[4] + gameBoard.board[6],
      ];

    if (sequence.includes(winCon)) {
        return true;
    } else {
        return false;
      }

}

gameFlow()