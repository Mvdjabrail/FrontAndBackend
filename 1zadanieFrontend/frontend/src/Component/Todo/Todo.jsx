import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodos, updateTodos} from "../Reducer";
import css from "../Todo/todo.module.css";

const Todo = () => {
  const todos = useSelector((state) => state.reducer.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(deleteTodos(id));
  };

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  console.log(todos)
  const handleCheck = (id) => {
    dispatch(updateTodos(id))
  };
  return (
    <div className={css.todoDiv}>
      {todos.map((el, index) => {
        return (
          <div key={index} className={el.complited ? css.divTodo : css.divTodo1}>
            <input
              type="checkbox"
              onChange={() => handleCheck(el)}
              checked={el.complited}
            />
            {el.text} <button className={css.btn1} onClick={() => handleRemove(el._id)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
