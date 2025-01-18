import Players from "./components/players.jsx"
import GameBoard from "./components/gameBoard.jsx"
import Log from "./components/Log.jsx"
import { useState } from "react"
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
  let activePlayer=getcurrentPlayer(gameTurns)

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
    <Players initialName="player 1" symbol="X" isActive={activePlayer==="X"}></Players>
    <Players initialName="player 2" symbol="O" isActive={activePlayer==="O"}></Players>
    </ol>
    <GameBoard onSelectGrid={handleSelectGrid} turns={gameTurns}></GameBoard>
  </div>
  <Log turns={gameTurns}></Log>
</main>
)
}

export default App