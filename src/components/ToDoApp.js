import React, { useState } from 'react';
import Todo from './Todo';

import './ToDoApp.css';

const ToDoAp = () => {
    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            setTitle("Write here your pending tasks to do!");
            return;
        }

        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false,
        };

        setTodos([...todos, newTodo]);

        setTitle("");
    }

    // update todos object 
    const handleUpdate = (id, value) => {
        if (!value) {
            alert('Task to do not updated!');
            return;
        }
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    const handleDelete = (id) => {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }

    return (
        <div className="todo-container">
            <h1>To Do App With React</h1>
            <form onSubmit={handleSubmit} className="todo-form">
                <input
                    onChange={handleChange}
                    className="todo-form__input"
                    type="search"
                    value={title}
                />
                <input
                    onClick={handleSubmit}
                    className="todo-form__button-submit"
                    type="submit"
                    value="Add To Do"
                />
            </form>

            <div className="todos-list">
                {
                    todos.map((item) => (
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                    ))
                }
            </div>
        </div>
    );
}

export default ToDoAp;