import React, { useRef } from 'react';
import './signup.scss';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {toast} from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { BACKEND_DOMAIN } from '../../config';


const auth  = getAuth();

const Signup = () => {

  const dispatch = useDispatch();

  const emailRef = useRef();
	const passwordRef = useRef();
  const nameRef = useRef();
	const repasswordRef = useRef();
	const navigate = useNavigate();

  const {user} = useSelector(state => state.user);


const submitHandler = async(event) => {
   event.preventDefault();

   try{
       const name = nameRef.current.value;
       const email = emailRef.current.value;
       const password = passwordRef.current.value;
       const repassword = repasswordRef.current.value;

       if(password!==repassword){
        toast.error('Please Enter Same Password');
         console.log('Please Enter Same Password');
         return;
       }

       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       
      //  let result = await axios.post(
			// 	`${BACKEND_DOMAIN}auth/v1/auth/profile`,    
			// 	{ 
			// 		name: name,  
      //     email:email    
					
					
			// 	},
			// 	{
			// 		headers: {
			// 			authtoken: user.authtoken,
			// 		},
			// 	}
			// );

      // console.log(result);




       toast.success('Account Created Successfully');
       navigate('/lobby');


   }
   catch(error){
    toast.error(error.message);
       console.log(error); 
   }
};


  return (
   <div className="signup">
      <div className="top">

      </div>

       <div className="signup-card">
          <h2>Create Account</h2>
           <form  onSubmit={submitHandler}>
                <div className="signup-inputs">
              <label >
               Name
              </label>
              <input ref={nameRef}
              name='Name'
              type='text'
              placeholder='Name'
              required />

              <label >
								Email
							</label>
							<input ref={emailRef}
								name="email"
								type="text"
                placeholder='xyz@gmail.com'
								required />
							<label >
								Password
							</label>
							<input ref={passwordRef}
								name="password"
								type="password"
                placeholder='password'
								required />
							<label >
								Re-enter Password
							</label>
              <input ref={repasswordRef}
								name="EnterPassword"
								type="password"
                placeholder='Re-Enter password'
								required />

                <button type='submit'> Create Account </button>
                </div>
           </form>
       </div>
        
   </div>
  )
}

export default Signup