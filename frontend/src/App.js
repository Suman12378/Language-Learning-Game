import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.scss'
import Home from './components/home/Home'
import Login from './container/login/Login'
import Signup from './container/signup/Signup'
import {ToastContainer } from "react-toastify";
import toast, { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import axios from "axios"
import { BACKEND_DOMAIN } from './config'
import Navbar from './components/navbar/Navbar'
import Lobby from "./container/lobby/Lobby";
import Leaderboard from './components/leaderboard/Leaderboard'
import Questions from './components/question.js/Questions'

const auth = getAuth();

const App = () => {

  const dispatch = useDispatch();
  const { user } = useSelector( state => state.user);

  useEffect(() => {
      try{
          onAuthStateChanged( auth, async(user) => {
             console.log(user);
               if(user){
                
                  const authtoken = await user.getIdToken(false);
                  // console.log(authtoken);
                   
                
                  const response = await axios.post(
                    `${BACKEND_DOMAIN}/auth/profile`, 
                            {},
                            {
                                headers: {
                                  authtoken: authtoken,
                                },
                            }
                     );


                    //  console.log(response.data);

                     dispatch({
                       type: 'SignIn',
                       payload: {
                           ...response.data.user,
                           authtoken: authtoken,
                       },
                     });
                 
               }
               else{
                 dispatch({
                    type: 'SignOut',
                    payload: null,
                 });
               }
          });
      }
      catch(error){
         toast.error(error.message);
         console.log(error);

      }
  }, []);



  return (
     <div className='game'>


      <Router> 
        <Routes>
             <Route path='/' index element = {<Home/>}/>
             {!user && <Route path='/login' element = {<Login/>}/>}
             {!user && <Route path='/signup' index element = {<Signup/>}/>}
               <Route path='/lobby'  element = {<Lobby/>}/>
                <Route path='leaderboard' element = {<Leaderboard/>}/>
                <Route path='question' element = {<Questions/>}/>
              
        </Routes>
        <Toaster/>
    </Router>


     </div>

  )
}

export default App