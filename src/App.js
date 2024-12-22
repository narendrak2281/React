import './App.css';
import React, { useEffect, useState} from 'react';

import MyComponent from './MyComp';

function App() {

  const [isVisible, setVisible] = useState(true)

  useEffect(() => {
    console.log("App component is mounting...")
  }, [])

  return <div className="App">
    {isVisible ? <MyComponent/> : <></>} 
    <button onClick={() => setVisible(!isVisible)} >Toggle</button>
  </div>
      
}

export default App;
