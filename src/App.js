import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Signup-login-Assign-Frontend' element={<Home />}/>
          <Route path='/login' element={ <LoginSignup /> } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
