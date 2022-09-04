import React from 'react';

export default function Input({
    item,
    todos,
    setTodos,
}) {
    // 5.必做：切換代辦狀態(打勾表示已完成、未勾表示待完成)
    const handlerTodoState = (id) => {
        const newTodos = todos.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
        );
        setTodos(newTodos);
    };

    //4.必做：移除代辦功能
    const delTodo = (id) => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    };

    return (
        <li>
            <label className="todoList_label">
                <input

                    className="todoList_input"
                    type="checkbox"
                    onChange={() => handlerTodoState(item.id)}
                    checked={item.done}
                />
                <span>{item.todo}</span>
            </label>
            <a href="/#" onClick={() => delTodo(item.id)}>
                X
            </a>
        </li>
    )
};