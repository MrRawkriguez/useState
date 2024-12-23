import './App.css'
import {useState} from "react"

function App() {

  let [isImportant, setIsImportant] = useState("Yes")
  //setIsImportant("Heck Yes")

  function handleClick() {
    setIsImportant("Definitley")
  }

  return (
    <>
      <main>
        <h1 className='title'>Is state important to know?</h1>
        <button onClick={handleClick} className='value'>{isImportant}</button>
      </main>
    </>
  )
}

export default App
