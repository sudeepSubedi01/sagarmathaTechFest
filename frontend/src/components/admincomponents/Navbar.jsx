import React, { useEffect, useState } from "react";
import axios from 'axios'
import { UserState } from "../../contexts/userProvider";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {user,setUser}= UserState()
  const getLoggedInUser = async ()=>{
    try {
      setLoading(true)
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      const {data} = await axios.get(`/api/volunteers/login?token=${userInfo?.token}`)
      setLoading(false)
      if(user){
        setUser(data)
      }else{
        localStorage.removeItem('userInfo')
        navigate('/login')
      }
    } catch (error) {
      setLoading(false)
      console.log(error.message)
      navigate('/login')
    }
  }
  useEffect(() => {
    
  

  }, [])
  
  return (
    <div className="navbar bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Dashboard</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
      <a>Item 2</a>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end text-black">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default Navbar;
