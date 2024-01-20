import React from 'react'
import "./lobby.scss";
import Navbar from "../../components/navbar/Navbar"
import {useSelector} from "react-redux"
import axios from 'axios';
import { BACKEND_DOMAIN } from '../../config';
import { useHistory, useNavigate } from 'react-router-dom'


const Lobby = () => {

 const {user} = useSelector(state => state.user );
 const navigate = useNavigate();
   
 const handleLanguageSelect = async(lang) => {
  // Implement the logic to handle the selected language
  //console.log(`Selected language: ${language}`);

    
   
   try{
    const response = await axios.post(`${BACKEND_DOMAIN}/get`, {lang});

    //  console.log(response.data);

    const { arr } = response.data;

    console.log(arr);
   
    navigate('/question', {state: {arr}});
    
     
   }
   catch(error){
     console.log(error);
   }
    
};

  return (
   <div className="lobby">
       <div className="header">
       
       </div>

       <div className="content">
       <div className="language-selection-container">
      <h2>Which language do you want to learn?</h2>

      <div className="language-cards">
        <div className="language-card" onClick={() => handleLanguageSelect('Hindi')}>
          <h3>Hindi</h3>
          {/* You can add more details or styling as needed */}
        </div>

        <div className="language-card" onClick={() => handleLanguageSelect('English')}>
          <h3>English</h3>
          {/* You can add more details or styling as needed */}
        </div>
      </div>
    </div>
       </div>
       
   </div>
  )
}

export default Lobby