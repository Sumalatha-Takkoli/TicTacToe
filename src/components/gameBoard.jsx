import { useState } from "react"

let initialBoard=[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBoard({onSelectGrid, turns}){
    let gameBoard=initialBoard;
    for(const turn of turns)
    {
        let {square, player}=turn
        let {row,col}=square
        gameBoard[row][col]=player
    }
    // let [gameBoard, setGameBoard]=useState(initialBoard);
    // function handleSelect(row,column){
    //     setGameBoard((prevGameBoard)=>{
    //     let updatedGateBoard=[...prevGameBoard.map((innerBoard)=>[...innerBoard])]
    //     updatedGateBoard[row][column]=isActive
    //     return updatedGateBoard;
    // })
    // onSelectGrid();
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>{row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={()=>onSelectGrid(rowIndex,colIndex)} disabled={playerSymbol!==null?true:false}>{playerSymbol}</button></li>)}</ol>
        </li>)}</ol>
    )
}