import React, { useState } from 'react'
import { useRef } from 'react'

export const Home = () =>{
const name = useRef('')
const surname = useRef('')
const email = useRef('')
const password = useRef('')
const [btn,setBtn] = useState(false)


return(
    <div style={{width:'150px',height:'350px',alignItems:'center'}}>
        <h2 style={{}}>Login</h2>
        <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <input ref={name} type='text' placeholder='Name'></input>
        <input ref={surname} type='text' placeholder='Surname' ></input>
        <input ref={email} type='text' placeholder='Email' ></input>
        <input ref={password} type='text' placeholder='Password'></input>
        <button onClick={()=> setBtn(true)}>Login</button>
        </div>
        {
            btn?<div>
                <p>{name.current.value}</p>
                <p>{surname.current.value}</p>
                <p>{email.current.value}</p>
                <p>{password.current.value}</p>
            
            </div>:''
        }
    </div>
)

}