import React from "react";
import Body from "./components/Body";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Body/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
