import React, { useState } from "react"
import { CustomForm } from "./components/CustomForm"
import { ItemsContainer } from "./components/ItemsContainer"
import "./App.css"

const App = () => {
  const [list, setList] = useState([])

  const handleForm = (item) => {
    setList([...list, { value: item, complete: false }])
  }

  const handleRemove = (index) => {
    let temp = [...list]
    temp.splice(index, 1)
    setList(temp)
  }

  const handleComplete = (index) => {
    let temp = [...list]
    // do any mutations...
    temp[index].complete = !temp[index].complete
    // set temp back to state
    setList(temp)
  }

  return (
    <div>
      <h1>CN Todo App</h1>
      <CustomForm handleForm={handleForm} />
      <ItemsContainer list={list} handleRemove={handleRemove} handleComplete={handleComplete} />
    </div>
  )
}

export default App
