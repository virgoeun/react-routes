// App.jsx

import './App.css';
import Home from "./pages/home/index.jsx";
import Dogs  from "./pages/dogs/index.jsx";
import Cats from "./pages/cats/index.jsx";
import Header from './components/Header';
import { CatsBreedsPage } from './pages/cats/cats-breed';
import { DogsBreedsPage } from './pages/dogs/dogs-breed';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router> 
      <Header/>
        <Routes> 
  
        <Route path="/" element={<Home />} /> 
        <Route path="/dogs" element={<Dogs />} /> 
        <Route path="/dogs/:id" element={<DogsBreedsPage />} /> 
        <Route path="/cats" element={<Cats />} /> 
        <Route path="/cats/:id" element={<CatsBreedsPage />} /> 
   </Routes>
   </Router>
    </div>
  );
}

export default App;

