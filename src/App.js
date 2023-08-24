import "./App.css"
import Header from "./components/Header"
import Rankings from "./components/Rankings"
import Seasons from "./components/Seasons"

function App() {
  return (
    <div className='flex flex-col gap-[90px] bg-[#EFEFEF]'>
      <Header />
      <div className='container flex flex-col gap-[90px]  px-[154px]'>
        <Seasons />
        <Rankings />
      </div>
    </div>
  )
}

export default App
