import AddUser from "./components/AddUser"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ContactUs from "./components/ContactUs"
import {Route , Routes} from "react-router-dom"
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import Post from './components/Post';

function App() {
  return (
    <>
    
    <div className="App">
    <Navbar/>
    
      <Routes>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/registration" element = {<AddUser/>}/>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/contactUs" element = {<ContactUs/>}/>
        <Route path = "/picture" element = {<PostForm/>}/>
        <Route path = "/gallery" element = {<AllPost/>}/>
      </Routes>
      
       
       </div>
       </>
  )
}

export default App