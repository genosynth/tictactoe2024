const gameBoard = {
    board:[``,``,``,``,``,``,``,``,``],
    winner: null,
    scoreP1:0,
    scoreP2:0
}

function Player(name,marker){
    this.name = name;
    this.marker = marker
}


const player1 = new Player('player1','X')
const player2 = new Player('player2','O')

const gameFlowObject = {
    currentPlayer: player1
}



function mark(markPosition){

    
        
        if (gameBoard.board[markPosition] == ``){
            gameBoard.board[markPosition] = gameFlowObject.currentPlayer.marker
        }   
            
 
       const playerX = (checkWinner('X'))
       const playerO =(checkWinner('O'))

       if (playerX){
        alert("Player 1 Wins")
        gameBoard.scoreP1++
        gameBoard.winner=player1.name
        
        return reset()}
       if (playerO){
        gameBoard.scoreP2++
        gameBoard.winner=player2.name
        
        alert("Player 2 Wins")
        return reset() }
      
    
    
   
    if(gameBoard.winner==null && gameBoard.board.includes(``)==false){
        gameBoard.winner='Draw'
        alert("It's a draw!")
        reset()
    }
    console.log(gameBoard)
    
}

function swapPlayer(){

    if (gameFlowObject.currentPlayer==player1){ return gameFlowObject.currentPlayer=player2}
    if (gameFlowObject.currentPlayer==player2){ return gameFlowObject.currentPlayer=player1}
    

}

function UI(){


    let board = document.getElementsByClassName('grid-item')

    for (let x=0; x<gameBoard.board.length; x++){
        board[x].innerHTML = gameBoard.board[x]
    }
    
    let player1score = document.getElementById('player1score')
    console.log(player1score.innerText)
    player1score.innerText=gameBoard.scoreP1

    let player2score = document.getElementById('player2score')
    player2score.innerText=gameBoard.scoreP2
   
  
}

function play(){

    let board = document.getElementsByClassName('grid-item')
    for (let i=0; i<board.length; i++){
        board[i].addEventListener("click",()=>{
            //console.log(i)            
            mark(i)
            swapPlayer()
            UI()

        })
    }
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

function reset(){
    gameBoard.board = [``,``,``,``,``,``,``,``,``]
    gameBoard.winner = null
    

}

play()
//gameFlow()