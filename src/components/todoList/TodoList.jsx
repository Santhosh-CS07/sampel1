import React, { useState } from 'react';
import "./todolist.css";

const TodoList = () => {
    // creating local state variable using useState hook
    const [inputValue, setInputValue] = useState();
    // creating an array state which stores my input values
    const [item, setItems] = useState([]);
    const handleInputValues = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };
    const handleAddItem = () => {
        setItems([...item, inputValue]);
        setInputValue("");
    };


  return (
    <>
    <div className='heading'>TodoList</div>
    <div className='inputbox'>
        {/* <input onChange={(e)=>{handleInputValues()}} type='text' placeholder='Enter your text'/> */}
        <input value={inputValue} onChange={handleInputValues} type='text' placeholder='Enter your text'/>
        <button onClick={handleAddItem}>Add Item</button>
    </div>
    <br/>
    <br/>
    <div style={{textAlign:'center'}}>
        {item?.map((text)=>{
            return <>
          <div className='textBox'>
          {text}
          </div>
            </>
        })}
    </div>
    </>
  )
}

export default TodoList