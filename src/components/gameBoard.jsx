import { useState } from "react"

export default function GameBoard({onSelectGrid, turns}){

    return (
        <ol id="game-board">
            {turns.map((row, rowIndex) => <li key={rowIndex}>
            <ol>{row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={()=>onSelectGrid(rowIndex,colIndex)} disabled={playerSymbol!==null?true:false}>{playerSymbol}</button></li>)}</ol>
        </li>)}</ol>
    )
}