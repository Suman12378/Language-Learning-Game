import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to the Language Learning App</h1>
        <p>Choose an option to get started:</p>
      </div>

      <div className="card-container">
        <div className="card">
          <h2>Login</h2>
          <p>Already have an account? Log in to continue your language learning journey.</p>
          <Link to="/login" className="btn-login">Login</Link>
        </div>

        <div className="card">
          <h2>Sign Up</h2>
          <p>New to our app? Sign up now and start exploring the world of languages.</p>
          <Link to="/signup" className="btn-signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
