import { useState } from "react"
export default function Players({ initialName, symbol, isActive }) {

  let [isEditing, setIsEditing] = useState()
  let [playerName, setplayerName] = useState(initialName)

  function handleClick() {
    setIsEditing(!isEditing)
  }
  function handleChange(event) {
    setplayerName(event.target.value)
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>
  if (isEditing) {
    editablePlayerName = 
    <input type="text" required value={playerName} onChange={handleChange}></input>
  }
  return (
    <li className={isActive? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditing ? 'Edit' : "Save"}</button>
    </li>
  )
}