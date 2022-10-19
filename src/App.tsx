import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type AppPropsType =
    {
        userId: number
        id: number
        title: string
        completed: boolean
    }

function App() {
    const [todos, setTodos] = useState<AppPropsType[]>([])
    const onClickHandler = () => {
setTodos([])
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    },[])
    return (
        <div className="App">
            <button onClick={onClickHandler}>CLEN POSTS</button>

            <ul>
                {todos.map(t => {
                    return (
                        <li>{`${t.userId} ${t.id} ${t.title} ${t.completed}`}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
