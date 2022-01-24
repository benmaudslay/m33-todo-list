import React from "react"
import { Item } from "./Item"

export const ItemsContainer = ({ list, handleRemove, handleComplete }) => {
  return (
    <ul>
      {list.map((item, index) => {
        return <Item key={index} item={item} func1={() => handleRemove(index)} func2={() => handleComplete(index)} />
      })}
    </ul>
  )
}
