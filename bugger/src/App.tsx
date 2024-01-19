import React from 'react';

import './App.css';
import { routes } from './router';
import ResponsiveAppBar from './components/Menu';
import { Navigate, Route, Routes } from "react-router-dom";

import { useLocation } from 'react-router-dom';

function App() {


  const location = useLocation();
  let isOpen: boolean = true;
  // console.log(location.pathname);

  function toggle() {
    isOpen = false;
  }

    if (location.pathname === '/signup' || location.pathname === '/' ) {
       toggle();
      console.log(isOpen);
    }

  
  
  return (
    <div className="App">
     
     {/* {isOpen} */}
     {isOpen ? <ResponsiveAppBar/> : null }

     <Routes>
      {
        routes.map((r,index)=>(
          <Route key={index} path={r.path} element={<r.component />}/>))
         
      }
     </Routes>
     {/* <Routes>
          <Route path="/" />
          <Route path="/signup"  />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> */}
    </div>
  );
}

export default App;




