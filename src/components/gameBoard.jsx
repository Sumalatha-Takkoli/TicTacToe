import { useState } from "react"

let initialBoard=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard(){
    let [gameBoard, setGameBoard]=useState(initialBoard);
    function handleSelect(row,column){
        setGameBoard((prevGameBoard)=>{
        let updatedGateBoard=[...prevGameBoard.map((innerBoard)=>[...innerBoard])]
        updatedGateBoard[row][column]='X'
        return updatedGateBoard;
    })
    }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>{row.map((col, colIndex) => <li key={colIndex}><button onClick={()=>handleSelect(rowIndex,colIndex)}>{col}</button></li>)}</ol>
        </li>)}</ol>
    )
}