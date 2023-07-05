import React from 'react'
import { useState } from 'react'
//default export and import 
//named export and import {}

export default function Todos() {
    const [count, setCount] = useState(0) //state
    const [todo, setTodo] =  useState([])
    const [text,setText] =  useState('')
    let a = 1
    //state 

    //state variable =  count
    //state update function = setCount 

    const increaseNumber =() => {
        setCount(count + 1)
    }
     const addTodo = () => {
         todo.push(text) //
       // console.log(todo)
         setTodo(todo)
        console.log(todo)
      

    }

    const setTextX = (e) =>{
        
        setText(e.target.value)
        
    }
    //re-render

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseNumber}> Click </button>
            
            <div>

                <input type='text'    onKeyUp={setTextX} />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
               {console.log(todo)}
                {todo.map(function(item){
                    return(
                        <li key={a++}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}
