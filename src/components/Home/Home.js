import React, { useContext } from 'react';
import { catagoryContext } from '../../App';

const Home = () => {
    
    const [count , setCount] = useContext(catagoryContext);
    return (
        <div>
            <h2>I am Home : {count}</h2>
          <button onClick={()=> setCount(count+1)}>Increase</button>
        </div>
    );
};

export default Home;