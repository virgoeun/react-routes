// App.jsx

import './App.css';
import Home from "./pages/home/index"
import Cats from "./pages/cats/index"
import Dogs from "./pages/dogs/index"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/dogs" element={<Dogs />} /> 
        <Route path="/cats" element={<Cats />} /> 
   </Routes>
   </Router>
    </div>
  );
}

export default App;

