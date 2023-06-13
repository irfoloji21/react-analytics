import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactGA from 'react-ga';

function App() {

  ReactGA.initialize('G-WEYH625Q9M');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    ReactGA.event({
      category: 'InvalidEmail',
      action: 'LoginAttempt',
      label: email,
    });
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
