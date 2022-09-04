import React, { useState } from 'react';
import Input from '../components/Input';
import Tab from '../components/Tab';
import TodoLi from '../components/TodoLi';
export default function Todo() {
    const [todos, setTodos] = useState([{ id: Date.now(), todo: '倒垃圾', done: false }]);

    const [currentTab, setCurrentTab] = useState("all");

    // 7.必做：確認待完成項目總數 (5 個待完成項目)
    const completedTodo = todos.filter((item) => !item.done).length;

    // 8.必做：清除已完成項目
    const clearCompletedTodo = () => {
        const newTodos = todos.filter((item) => !item.done);
        setTodos(newTodos);
    };

    //根據頁籤更換顯示todos
    const filteredTodos = todos.filter((item) => {
        if (currentTab === "pending") return !item.done;
        if (currentTab === "completed") return item.done;

        return item;
    });
    return (<div className="todoList_Content">
        {/* Input */}
        {/* {JSON.stringify(todos)} */}
        <Input todos={todos} setTodos={setTodos} />
        <div className="todoList_list">
            {/* Tab */}
            <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
            {/* list */}
            <div className="todoList_items">
                <ul className="todoList_item">
                    {todos.length > 0 ? (
                        filteredTodos.map((item, i) => (
                            <TodoLi
                                key={i + item.todo}
                                item={item}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))
                    ) : (
                        <li>
                            <label className="todoList_label">目前尚無代辦事項</label>
                        </li>
                        // 2.代辦為零筆資料時，需顯示文字「目前尚無代辦事項」
                    )}
                </ul>
                <div className="todoList_statistics">
                    <p> {completedTodo} 個待完成項目</p>
                    <div className='c-pointer clear-btn' onClick={clearCompletedTodo}>
                        清除已完成項目
                    </div>
                </div>
            </div>
        </div>
    </div>)
};