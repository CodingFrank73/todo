
import { useState } from "react";

const NewTodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const addNewTodo = (e) => {
        e.preventDefault();

        props.setTodos(current => [...current, {
            "id": Math.random().toString().substring(2, 8),
            "todo": newTodo,
            "completed": false
        }])
    }

    return (
        <div>
            <form>
                <input
                    value={newTodo}
                    onChange={(event) => setNewTodo(event.target.value)}
                    placeholder="What will you do today?" />

                <button onClick={addNewTodo}>add Todo</button>

            </form>
        </div>
    );
}

export default NewTodoForm;