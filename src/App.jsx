import Players from "./components/players.jsx"
import GameBoard from "./components/gameBoard.jsx"
import Log from "./components/Log.jsx"
import { WINNING_COMBINATIONS } from "./components/combinations.js"
import GameOver from "./components/gameOver.jsx"
import { useState } from "react"
let initialBoard=[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function getcurrentPlayer(turns){
  let currentPlayer='X'
      if(turns.length>0 && turns[0].player==='X')
      {
        currentPlayer="O"
      }
      return currentPlayer;
}
function App() {
  let [gameTurns, setgameTurns]=useState([])
  let [player, setPlayer]=useState({
    X: "Player1",
    O: "Player2"
  })
  let activePlayer=getcurrentPlayer(gameTurns)

  function reStart(){
  setgameTurns([])
  }

  function handleOnNameChange(symbol, newName){
    setPlayer((prevName)=>{
      return {
        ...prevName,
        [symbol]:newName
      }
    })
  }
  let gameBoard=[...initialBoard.map((array)=>[...array])];
  for(const turn of gameTurns)
  {
      let {square, player}=turn
      let {row,col}=square
      gameBoard[row][col]=player
  }
  let winner;
  for(const combination of WINNING_COMBINATIONS)
    {
      const firstcombination=gameBoard[combination[0].row][combination[0].column]
      const secondcombination=gameBoard[combination[1].row][combination[1].column]
      const thirdcombination=gameBoard[combination[2].row][combination[2].column]

      if(firstcombination && firstcombination===secondcombination && firstcombination===thirdcombination){
        winner=player[firstcombination]
      }
    }
  const hasDrawn=gameTurns.length==9 && !winner
  function handleSelectGrid(rowIndex,colIndex){
    setgameTurns((previousTurns)=>{
      let currentPlayer=getcurrentPlayer(previousTurns)
      let updatedTurns=[
        {square:{row:rowIndex, col:colIndex},player:currentPlayer},
        ...previousTurns
      ]
      return updatedTurns;
    })

  }
return (
<main>
  <div id="game-container">
    <ol id="players" className="highlight-player">
    <Players initialName="player 1" symbol="X" isActive={activePlayer==="X"} onChangeName={handleOnNameChange}></Players>
    <Players initialName="player 2" symbol="O" isActive={activePlayer==="O"} onChangeName={handleOnNameChange}></Players>
    </ol>
    {(winner || hasDrawn) &&<GameOver winner={winner} onRestart={reStart}></GameOver>}
    <GameBoard onSelectGrid={handleSelectGrid} turns={gameBoard}></GameBoard>
  </div>
  <Log turns={gameTurns}></Log>
</main>
)
}

export default App