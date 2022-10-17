import AddUser from "./components/AddUser"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {Route , Routes} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
    <Navbar/>
    {/* <div className="container"> */}
      <Routes>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/registration" element = {<AddUser/>}/>
        <Route path = "/" element = {<Home/>}/>

      </Routes>
      
       {/* </div> */}
    </div>
  )
}

export default App