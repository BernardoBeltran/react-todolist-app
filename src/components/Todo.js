import React, { useState } from "react";

const Todo = ({ item, onUpdate, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false);
    
    // component to edit todos
    const FormEdit = () => {
        const [newTitle, setNewTitle] = useState(item.title);

        const handleSubmit = (e) => {
            e.preventDefault();

        }

        const handleChange = (e) => {
            const value = e.target.value;
            setNewTitle(value);
        }

        const handleClick = () => {
            onUpdate(item.id, newTitle);
            setIsEdit(false);
        }

        return (
            <form onSubmit={handleSubmit} className="todo-form-update">
                <input onChange={handleChange} type="search" className="todo-form-update__input" value={newTitle}/>
                <button onClick={handleClick} className="todo-form-update__button">Update</button>
            </form>
        );
    }

    // Component to set options
    const TodoOptions = () => {
        return (
            <div className="todo-options">
                <span className="todo-title">{item.title}</span>
                 <button onClick={() => setIsEdit(true)} className="button">Edit</button>
                <button onClick={(e) => onDelete(item.id)} className="button-delete">Delete</button>
            </div>
        );
    }

    return (
        <div className="todo">
            {isEdit ? <FormEdit /> : <TodoOptions />}
        </div>
    );
};

export default Todo;
