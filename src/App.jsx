import Players from "./components/players.jsx"
function App() {
return (
<main>
  <div id="game-container">
    <ol id="players">
    <Players initialName="player 1" symbol="X"></Players>
    <Players initialName="player 2" symbol="O"></Players>
    </ol>
  </div>
</main>
)
}

export default App