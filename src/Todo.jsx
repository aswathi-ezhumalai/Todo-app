import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import FilterButtons from "./FilterButtons";

function Todo({ user, onLogout }) {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: task, completed: false }
    ]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    filter === "all"
      ? true
      : filter === "completed"
      ? todo.completed
      : !todo.completed
  );

  return (
    <div className="container">
      <div className="card">
        <h2>Student Task Manager</h2>
        <p>Logged in as: {user}</p>
        <button onClick={onLogout}>Logout</button>

        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />

        <button onClick={addTask}>Add Task</button>

        <FilterButtons setFilter={setFilter} />

        <p>Total: {todos.length}</p>
        <p>Completed: {todos.filter(t => t.completed).length}</p>

        <ul>
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;