
import './App.css';

import Home from './components/Home';
import ModelDisplayP18 from './components/modelP18/ModelDisplayP18';
import ModelDisplayP17 from './components/modelP17/ModelDisplayP17';
import {BrowserRouter as Router , Routes,Route } from "react-router-dom"
import ModelDisplayP13 from './components/modelP13/ModelDisplayP13';
import ModelDisplayP4 from './components/modelp4/ModelDisplayP4';


function App() {
  return (
    <Router >
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/modelP18" element={<ModelDisplayP18/>} />
      <Route exact path="/modelP17" element={<ModelDisplayP17/>} />
      <Route exact path="/modelP13" element={<ModelDisplayP13/>} />
      <Route exact path="/modelP4" element={<ModelDisplayP4/>} />
      </Routes>
     
    </Router>
    
   
   
    
  );
}

export default App;
