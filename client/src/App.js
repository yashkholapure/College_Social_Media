 import React, { createContext, useReducer } from 'react'
 import {Route,Routes} from 'react-router-dom';
 import "./App.css"
import Home from './components/Home';
import Login from './components/Login';
 import Navbar from "./components/Navbar";
 import Signup from "./components/Signup";
 import Post from "./components/Post";
 import Error from "./components/Error";
  import Logout from './components/Logout';
 import Create from './components/Create';

import { initialState,reducer } from '../src/reducer/UseReducer';


 export const UserContext=createContext();

 const Routing=()=>{

  return(
    <Routes>
     <Route path="/" element={<Home/>} />
        
     <Route path="/post" element={<Post/>} />

     <Route path="/login" element={<Login/>} />

     <Route path="/signup" element={<Signup/>} />

          <Route path="/logout" element={<Logout/>} />    

       <Route path="/create" element={<Create/>} />  

     <Route  element={<Error/>} />
       
       
     {/* <Route path="/signup">
       <Signup />
     </Route> */}
     </Routes>
  )
   
}

 const App = () => {

  const [state, dispatch] = useReducer(reducer,initialState)


   return (
     
     <>
     <UserContext.Provider value={{state, dispatch}}>
     <Navbar />
      <Routing />
     </UserContext.Provider>
      
     </>
   )
 }
 
 export default App
 