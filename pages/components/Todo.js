import React, {useState, useEffect} from 'react';
import styles from '../../styles/Home.module.css';
import TodoItem from './TodoItem';

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const handleInput = (event) => {
        setNewTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newTodo);
    }

    return(
        <div className={styles.maincont}>
            <h1>Todo App</h1>
            <div className={styles.newTodo}>
                <h3>Add new todo</h3>
                <div className={styles.semi}>
                    <input 
                        type='text'
                        value={newTodo}
                        onChange={(e)=>{handleInput(e)}}
                    />
                    <button onClick={handleSubmit}>Add Todo</button>
                </div>
            </div>
            <div>
                <TodoItem />
            </div>
        </div>
    )
}

export default Todo;