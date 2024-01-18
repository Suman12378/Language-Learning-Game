import React from 'react';
import './navbar.scss'
import { MdLeaderboard, MdLogout, MdOutlineLeaderboard, MdOutlineLogout } from "react-icons/md"
import { CgLogOut, CgProfile } from "react-icons/cg";
import {getAuth, signOut } from "firebase/auth"
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

     const navigate = useNavigate();



  const leaderboardHandler = async() => {

  };

  const profileHandler = async() => {
      
  };

  const logoutHandler = async() => {
        const auth = getAuth();
        signOut(auth).then(()=>{
               console.log("Sign Out Successfully");
               toast.success("Signed Out Successfully");
               navigate("/login")
        }).catch((error)=> {
            toast.error(error.message);
            console.log("sign out error"+error);
        })
  };




  return (
    <nav class="navbar">
  <div class="navbar-logo">
    Logo Here
  </div>

  <div class="navbar-links">
    {/* <a href="#" class="navbar-link">Leaderboard</a>
    <a href="#" class="navbar-link">Profile</a>
    <a href="#" class="navbar-link">Logout</a> */}
      <div className="leaderboard" onClick={leaderboardHandler}>
           {<MdOutlineLeaderboard/>} <span>Leaderboard</span>
      </div>

      <div className="profile" onClick={profileHandler}>
          {<CgProfile/>} <span>Profile</span>
      </div>

      <div className="logout" on onClick={logoutHandler}>
         { <MdLogout/>} <span>Logout</span>
      </div>
  </div>
</nav>
  );
};

export default Navbar;
