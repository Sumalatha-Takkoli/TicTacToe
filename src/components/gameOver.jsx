export default function GameOver({winner, onRestart})
{
    return (
        <div id="game-over">
            <h2>Game Over!!</h2>
            {winner &&<p>{winner} You Won !!</p>}
            {!winner && <p>It's a Draw</p>}
            <p>
            <button onClick={onRestart}>ReMatch</button>
            </p>
        </div>
    )
}