function TodoItem({ todo, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        onClick={() => toggleTask(todo.id)}
        className={todo.completed ? "completed" : ""}
      >
        {todo.text}
      </span>

      <button onClick={() => deleteTask(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;