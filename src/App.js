import React from 'react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './home';
import Secure from './secure';
import HomeTwo from './hometwo';
import Next from './next';


function App() {
  return (
      <>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTwo />}/>
          <Route path="/secure" element={<Secure />}/>
          <Route path="/sign-in" element={<Next />} />
        


        

          
            
        </Routes>
      </BrowserRouter>
      
      </>
  );
}

export default App;
