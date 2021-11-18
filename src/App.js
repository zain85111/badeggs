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
        <Route path="/about" component={SecondaryPage} />
        <Route path="/faq" component={SecondaryPage} />
        <Route path="/roadmap" component={SecondaryPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
