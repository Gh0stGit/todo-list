import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routers} from 'react-router-dom'
import { Header } from './components/Header'
import { Home,About,Tasks, Todo } from './components'

function App() {
  // const [count, setCount] = useState(0)

  // useEffect(() => {

  //   console.log("useEffect called")

  // }, [count])

  // console.log("render called")

  return (
    <>
        <Header />
      <Routers>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/todo/:todoId" element={<Todo/>} />
      </Routers>

      {/* <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button> */}
    </>
  )
}

export default App
