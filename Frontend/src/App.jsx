import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";




export default function App(){
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path ='/register' element={<Register/>} />
         <Route path ='/admin' element={<Admin/>} />
      </Routes>
    </Router>
  )
}