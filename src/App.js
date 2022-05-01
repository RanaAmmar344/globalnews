import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import React from "react";

import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'



const App =(props)=> {
  
  
    return (
     <>
        <Router>
      <div>
          <NavBar />
          
          <Routes> 
            <Route exact  path="/" element={<News  key='General'  pageSize={8}  category="General"/>} /> 
            <Route exact  path="/business" element={<News  key='Business'  pageSize={8}  category="Business"/>} /> 
            <Route exact  path="/entertainment" element={<News  key='Entertainment'  pageSize={8}  category="Entertainment"/>} /> 
            <Route exact  path="/health" element={<News  key='health'  pageSize={8}  category="Health"/>} /> 
            <Route exact  path="/science" element={<News  key='science'  pageSize={8}  category="Science"/>} /> 
            <Route exact  path="/sports" element={<News  key='sports'  pageSize={8}  category="Sports"/>} /> 
            <Route exact  path="/general" element={<News  key='general'  pageSize={8}  category="General"/>} /> 
            <Route exact  path="/technology" element={<News  key='technology'  pageSize={8}  category="Technology"/>} /> 
            </Routes>
        
          
      </div>
        </Router>
     
     

        </>
    );
  
}
export default App