import { useState } from "react"

function App() {

  const [color, setColor] = useState('blue')

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-1 rounded-3xl">
            <button className="px-5 rounded-full text-xl shadow-sm"
              style={{backgroundColor: "red"}}
              onClick={()=>{setColor('red')}}
            >
              Red
            </button>
            <button className="px-5 rounded-full text-xl shadow-sm"
              style={{backgroundColor: "yellow"}}
              onClick={()=>{setColor('yellow')}}
            >
              Yellow
            </button>
            <button className="px-5 rounded-full text-xl shadow-sm"
              style={{backgroundColor: "blue"}}
              onClick={()=>{setColor('blue')}}
            >
              Blue
            </button>
            <button className="px-5 rounded-full text-xl shadow-sm"
              style={{backgroundColor: "green"}}
              onClick={()=>{setColor('green')}}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
