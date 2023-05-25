import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './components/Login'
import Register from './components/Register';
import Reset from './components/Reset';
import Mail from './components/Mail';
import Container from './components/Container'

import Navbar from './components/Navbar'

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
          </>
        </Routes>
      </Container>
      
    </Router>
  );
}

export default App;
