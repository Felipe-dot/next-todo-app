const TodoItem = ({ todo }) => {
  return (
    <div>
      <li>
        <input type="checkbox" id={todo.title} name={todo.title} />
        <label for={todo.title}>{todo.title}</label>
      </li>
    </div>
  );
};

export default TodoItem;
