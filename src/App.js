import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { useState, createContext } from 'react';

export const catagoryContext = createContext();
function App() {
  const [count , setCount] =  useState(0);
  
  return (
    <catagoryContext.Provider value={[count , setCount]}>

       <p>Count Value : {count}</p>
       <Header></Header>
       <Home ></Home>
       <Shipment ></Shipment>
    </catagoryContext.Provider>
  );
}

export default App;
