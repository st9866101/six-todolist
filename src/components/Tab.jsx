import React from 'react';

export default function Input({ currentTab, setCurrentTab }) {
    const tabList = [
        { type: "all", title: "全部" },
        { type: "pending", title: "待完成" },
        { type: "completed", title: "已完成" },
    ];
    // 6.必做：狀態頁籤切換功能(全部、待完成、已完成)
    const handlerTabType = (type) => {
        setCurrentTab(type);
    };
    const ClassType = (type) => {
        return currentTab === type ? "active c-pointer" : "c-pointer";
    };

    return (
        <ul className="todoList_tab">

            {tabList.map((tab) => (
                <li key={tab.type}>
                    <div
                        className={ClassType(tab.type)}
                        onClick={() => handlerTabType(tab.type)}
                    >
                        {tab.title}
                    </div>
                </li>
            ))}
        </ul>
    )
};