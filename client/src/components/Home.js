import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './Home.css'
import Logo from './Logo'

const Home = () => {

    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");
    const [StudentId,setStudentId] = useState("");
    const [branch,setBranch] = useState("")
    const [section,setSection]=useState("")
    const [x,setX] = useState(false)
    const [y,setY] = useState(false)
    const [z,setZ] = useState(false)
    const [p,setP] = useState(false)
    const [q,setQ] = useState(false)
    const [r,setR] = useState(false)
    const [s,setS] = useState(false)

    const submitHandler = () =>{

        if(fullname && email && StudentId && branch && section)
        {
            localStorage.setItem("fullname",fullname);
            localStorage.setItem("email",email)
            localStorage.setItem("StudentId",StudentId)
            localStorage.setItem("branch",branch)
            localStorage.setItem("section",section)
            console.log(branch)

            if(branch === "IT")
            {
                setX(true)
            }
            else if(branch === "MECH")
            {
                setY(true)
            }
            else if(branch === "CIVIL")
            {
                setZ(true)
            }
            else if(branch === "EEE")
            {
                setP(true)
            }
            else if(branch === "ECE")
            {
                setQ(true)
            }
            else if(fullname === "VJIT" && StudentId === "VJIT" && branch === "MTech")
            {
                setS(true)
            }

            else if(branch === "CSE" || branch === "AI" || branch === "CSE(DS)"||branch === "CSE(AI&ML)"|| branch ==="AI&DS")
            {
                setR(true)
            }
            
        }
        else{
            alert("fill the complete info")
        }

    }

    if(x){
        return <Navigate to='/it' />
    }
    if(y){
        return <Navigate to='/mech' />
    }
    if(z){
        return <Navigate to='/civil' />
    }
    if(p){
        return <Navigate to='/eee' />
    }
    if(q){
        return <Navigate to='/ece' />
    }
    if(r){
        return <Navigate to='/cse' />
    }
    if(s){
        return <Navigate to='/admin' />
    }
    

    return (
        <div >
            <center>

             <Logo />  
            <div className='hom'>
                <section  style={{"marginTop":"140px"}}>
                
                    <h1  className='home-heading' style={{"paddingTop":"2rem"}} ><b>Student Course Registration Form</b></h1>
                    <input type="text" value={fullname} name="fullname" placeholder="fullname" onChange={e => setFullname(e.target.value)} /><br /><br />
                    <input type="text" value={StudentId} name="StudentId" placeholder="studentId" onChange={e => setStudentId(e.target.value)} /><br /><br />
                    <input type="email" value={email} name="email" placeholder="email"  onChange={e => setEmail(e.target.value)} /><br /><br />
                    
                    <h4>Branch:</h4>
                    <select name="branch" onChange={e => setBranch(e.target.value)} >
                        <option value="">Select</option>
                        <option value="AI">AI</option>
                        <option value="AI&DS">AI&DS</option>
                        <option value="CSE">CSE</option>
                        <option value="CSE(AI&ML)">CSE(AI&ML)</option>                            
                        <option value="CSE(DS)">CSE(DS)</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="MTech">MTech</option>
                    </select>
                    <br /><br />
                    <h4>Section:</h4>
                    <select name="section" onChange={e => setSection(e.target.value)}>
                    <option value="">Select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                    <br /><br />
                    <button onClick={submitHandler} className="btn btn-success">submit</button>
                    <br /><br /><br /><br />
                
                </section>
            </div>

            </center>
        </div>
        
    )
}

export default Home
