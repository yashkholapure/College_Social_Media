import React,{useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
//import { UserContext } from '../App'
import { UserContext } from '../App'
const Logout = () => {

    //const {state,dispatch}= useContext(UserContext)
    const {state,dispatch}=useContext(UserContext)
    const navigate=useNavigate()
    useEffect(() => {
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept:"application/json","Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
           // dispatch({type:"USER",payload:false})
           dispatch({type:"USER",payload:false})
            navigate("/login")
            if (res.status!=200) {
                const error=new Error(res.error)
                throw error
            }
        }).catch((e)=>{
            console.log(e)
        })
         })
    return (
        <>
            <h1>lout ka page</h1>
         </>
    )
}

export default Logout
