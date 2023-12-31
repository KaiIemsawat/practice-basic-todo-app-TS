import { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App = () => {
    // const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);
    // Instead of above line, create a model, import and use as the next line
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
        setTodos((prevTodo) => [
            ...prevTodo,
            { id: Math.random().toString(), text: text },
        ]);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    return (
        <>
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
        </>
    );
};

export default App;
