import React, { useContext } from 'react';
import { catagoryContext } from '../../App';

const Header = (props) => {

    const [count,setCount] = useContext(catagoryContext);
 
    return (
        <div>
            <h3>I am header : {count}</h3>
            <button onClick = {()=> setCount(count+1)}>Increase</button>
        </div>
    );
};

export default Header;