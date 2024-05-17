import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddUser() {
  let navigate=useNavigate()
  const [user,setUsers]=useState({
    name:"",
    username:"",
    email:""
  });
  const{name,username,email}=user
  const onInputChange=(e)=>{
    setUsers({...user,[e.target.name]:e.target.value});
  };
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate("/");

  };
  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Register User</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="Name" className="from-label">Name</label>
          <input
          type={"text"}
          className="form-control"
          placeholder="From your name"
          name="name"
          value={name}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Username" className="from-label">UserName</label>
          <input
          type={"text"}
          className="form-control"
          placeholder="From your Username"
          name="username"
          val={username}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="from-label">E-mail</label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your e-mail address"
          name="email"
          val={email}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <button type="submit" className="btn btn-outline-primary">submit</button>
        <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
        </form>
      </div>
    </div>
  </div>
}
