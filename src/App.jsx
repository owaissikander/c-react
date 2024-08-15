import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {count}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add_1
        </button>
        <button onClick={() => setCount((count) => count + 2)}>
          Add_2
        </button>
        <button onClick={() => setCount((count) => count + 3)}>
          Add_3
        </button>
        <button onClick={() => setCount((count) => count + 4)}>
          Add_4
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Sub_1
        </button>
        <button onClick={() => setCount((count) => count - 2)}>
          Sub_2
        </button>
        <button onClick={() => setCount((count) => count - 3)}>
          Sub_3
        </button>
        <button onClick={() => setCount((count) => count - 4)}>
          Sub_4
        </button>
      </div>
    </>
  )
}

export default App
