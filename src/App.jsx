import Players from "./components/players.jsx"
import GameBoard from "./components/gameBoard.jsx"
import { useState } from "react"
function App() {
  let [activePlayer,setActivePlayer]=useState('X');
  function handleSelectGrid(){
    setActivePlayer((initialSymbol)=>initialSymbol==='X'? "O" : "X")
  }
return (
<main>
  <div id="game-container">
    <ol id="players" className="highlight-player">
    <Players initialName="player 1" symbol="X" isActive={activePlayer==="X"}></Players>
    <Players initialName="player 2" symbol="O" isActive={activePlayer==="O"}></Players>
    </ol>
    <GameBoard onSelectGrid={handleSelectGrid} isActive={activePlayer}></GameBoard>
  </div>
</main>
)
}

export default App