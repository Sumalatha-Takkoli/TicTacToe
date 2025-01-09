import Players from "./components/players.jsx"
function App() {
return (
<main>
  <div id="game-container">
    <ol id="players">
    <Players name="player 1" symbol="X"></Players>
    <Players name="player 2" symbol="O"></Players>
    </ol>
    GAMEBOARD
  </div>
  LOG
</main>
)
}

export default App