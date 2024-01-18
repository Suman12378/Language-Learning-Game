import React, { useRef } from 'react';
import './login.scss';
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Login = () => {

  const navigate = useNavigate();
  // const dispatch=useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleGoogleLogin = async() => {
       try{
            await signInWithPopup(auth, provider);

            toast.success('Signed In Successfully');
            navigate('/lobby');
       }
       catch(error){
        toast.error(error.message);
        console.log(error);
       }
  };

  const submitHandler = async(event) => {
    try{
         event.preventDefault();
         const email = emailRef.current.value;
         const password = emailRef.current.value;

         await signInWithEmailAndPassword(auth, email, password);

         toast.success('Signed In Successfully');
         navigate('/lobby');
    }
    catch(error){
            toast.error(error.message);
            console.log(error);
    }
  }; 





  return (
   
      
    <div className="signin">
          <div className="top">

          </div>
          
           <div className="signin-body">
         <h2>Log In</h2>
         <h5>Welcome Back</h5>
         <button className="sign-in-box" onClick={handleGoogleLogin}>
           {' '}
           <FcGoogle className='google-icon'/> Sign In with Google {' '}
         </button>

         <p>Or</p>

         <form onSubmit={submitHandler}>
             <div className="signin-inputs">
                  <label >Email</label>
                  <input
                  ref={emailRef}
                  type='email'
                  name='email'
                  placeholder='eg. xyz@gmail.com'
                  required
                />
                <label>Password</label>
                <input
                  ref={passwordRef}
                  name='password'
                  type='password'
                  placeholder='Password'
                  required
                />

                <button className="login-box" type='submit'>
                  {' '}Login{' '}
                </button>
             </div>
         </form>

         <span>
            Not a Member?
            <Link className='link-text' to={'/signup'}>
               {' '} Get Started
            </Link>
         </span>
        
  </div>
    </div>

  
     
  )
}

export default Login