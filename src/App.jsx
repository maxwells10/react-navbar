
// import logo from './logo.svg';
import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Container>
      <header>
      <p className="Logo">Navbar</p>
      <input type="checkbox" name="" className="btn" />
      <div className="nav">
        <ol>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ol>
      </div>
    </header>
    </Container>
    </div>
    </React.Fragment> 
  );
}

export default App;
