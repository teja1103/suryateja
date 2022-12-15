import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


const Admin = () => {
  const [data,setData] = useState([])
  const [branch,setBranch] = useState("")
  useEffect(()=>{
    axios.get('http://localhost:5000/getall').then(res => setData(res.data))
  },[])

  const submitHandler = () =>{
    console.log(branch)
    axios.post('http://localhost:5000/indprofilee',{branch:branch}).then(res => setData(res.data))
  }
  return (
    <div>
      
        <br /><br /><br />
        <center>
        <h4>Branch:</h4>
                    <select name="branch" onChange={e => setBranch(e.target.value)} >
                        <option value="">Select</option>
                        <option value="IT">IT</option>
                        <option value="CSE">CSE</option>
                        <option value="AI">AI</option>
                        <option value="CSE-DS">CSE-DS</option>
                        <option value="CSE-AI&ML">CSE-AI&ML</option>
                        <option value="AI&DS">AI&DS</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="MTech">MTech</option>
                    </select>&nbsp;&nbsp;
        <button onClick={submitHandler} className="btn btn-primary">search</button><br /><br />
        </center>
        <div >

                    
                {data.length >=1 ?
                  <div>
                  <center>
                  <table className="table" id="stocksData">
                  <thead>
                      <tr>
                          <th scope="col">Student name</th>
                          <th scope="col">StudentId</th>
                          <th scope="col">branch</th>
                          <th scope="col">email</th>
                          </tr>
                  </thead>

                  <tbody>
                  {data.map((singleitem,index) => 
                      <tr key={index}>
                      
                      
                          <td>{singleitem.fullname}</td>
                          <td>{singleitem.StudentId}</td>
                          <td>{singleitem.branch}</td>
                          <td>{singleitem.email}</td>

                          </tr>
                      )}
                  
                  </tbody>
                  </table>
                  </center>
                  </div>
                :
                <h4>Search with valid fields</h4>
                }


                <br /><br /><br />
                <center>
                    <ReactHTMLTableToExcel className="btn btn-success"
                    table = "stocksData"
                    filename="reportexcel"
                    sheet="sheet"
                    buttonText="Export excel"/>
                </center>
                <br /><br /><br />
                    
                </div>
    </div>
  )
}

export default Admin