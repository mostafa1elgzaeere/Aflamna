import Home from "./Components/home/Home";
import Navv from "./Components/nav/Nav";
import About from "./Components/About/About";
import Faqs from "./Components/Faqs/Faqs";
import Vote from "./Components/Vote/Vote";
import Film from "./Components/Film/Film";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Search from "./Components/Search/Search";
import Error from "./Components/Error404/Error";
import Statiscs from "./Components/Statistcs/Statiscs";
import { Routes , Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

function App() {

  let navigate=useNavigate()

  let[userDataObject,setUserDataObject]=useState(null)


  let decodeToken=()=>{
    let token=localStorage.getItem("Token")
    let decode_data=jwt_decode(token)

    setUserDataObject(decode_data)
  }


  let logOut=()=>{
    localStorage.removeItem("Token")
    setUserDataObject(null)
    navigate("/login")
    
  }
  useEffect(()=>{
    if(localStorage.getItem("Token")){
      decodeToken()
    }
  },[])






  return (
    
<div className="app">
    <Navv userDataObject={userDataObject} logOut={logOut}/>

      <Routes>
            <Route path="/" element={<Home userDataObject={userDataObject} logOut={logOut}/>} />

            <Route path="/login" element={<Login decodeToken={decodeToken}/>} />
            
            <Route path="/register" element={<Register/>} />

            <Route path="/search" element={<Search/>} />

            <Route path="about" element={<About/>}/>

            <Route path="/faqs" element={<Faqs/>} />

            <Route path="/vote" element={<Vote/>} />

            <Route path="/statics" element={<Statiscs/>} />

            <Route path="film/:id" element={<Film userDataObject={userDataObject}/>} /> 
            
            <Route path="*" element={<Error/>} />


      </Routes>
  


    </div>
  );
}

export default App;
