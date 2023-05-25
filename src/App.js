import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Container from './components/Container'
import Navbar from './components/Navbar'

import Login from './components/Login'
import Register from './components/Register';
import Reset from './components/Reset';

import Mail from './components/Mail';
import Packages from './components/Packages';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/mail" element={<Mail />} />
            <Route exact path="/packages" element={<Packages />} />
          </>
        </Routes>
      </Container>
      
    </Router>
  );
}

export default App;
