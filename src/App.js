import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import PrimaryPage from "./primaryPage";
import SecondaryPage from "./secondaryPage";



const App = () => {
  return (
    <div> 
      <BrowserRouter>
        <Route path="/" component={PrimaryPage} exact/>
        <Route path="/about" component={SecondaryPage} exact/>
        <Route path="/faq" component={SecondaryPage} exact/>
        <Route path="/roadmap" component={SecondaryPage} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
