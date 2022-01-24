import React from "react"

export const Item = ({ item, func1, func2 }) => {
  return (
    <li>
      <h4 className={item.complete ? "complete" : "incomplete"}>{item.value}</h4>
      <button onClick={func1}>Remove</button>
      <button onClick={func2}>Complete</button>
    </li>
  )
}
