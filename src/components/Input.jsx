import React from 'react';

export default function Input({ todos, setTodos }) {
    const { useState } = React;
    const [newTodo, setNewTodo] = useState("");
    // 3.必做：新增代辦功能
    const addTodo = () => {
        newTodo.trim() === ""
            ? setNewTodo("")
            : setTodos([...todos, { id: Date.now(), todo: newTodo, done: false }]);

        setNewTodo("");
    };
    // 增加todo
    const handlerNewTodo = (e) => {
        setNewTodo(e.target.value);
    };
    return (
        <div className="inputBox">
            <input
                type="text"
                placeholder="請輸入待辦事項"
                value={newTodo}
                onChange={handlerNewTodo}
            />
            <div className='c-pointer' onClick={addTodo}>
                <i className="fa fa-plus" onClick={addTodo}></i>
            </div>
        </div>
    )
};