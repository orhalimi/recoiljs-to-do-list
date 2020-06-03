import React from 'react';
import {
    useRecoilValue,
} from 'recoil';
import { filteredTodoListState } from 'atom/main';

import TodoItemCreator from 'react/TodoItemCreator';
import TodoListFilters from 'react/TodoListFilters';
import TodoItem from 'react/TodoItem';
import TodoListStats from 'react/TodoListStats';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />

            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
}


export default TodoList;