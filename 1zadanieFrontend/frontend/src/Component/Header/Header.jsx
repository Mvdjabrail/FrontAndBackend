import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "../Header/header.module.css";
import { add, postTodos } from "../Reducer";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      dispatch(postTodos(text));
      setText("");
    }
  };

  const handleText = (e) => {
    setText(e.target.value);

  };

  const handleClick = () => {
    if (text !== "") {
      dispatch(postTodos(text));
    }
    setText("");
  };

  return (
    <div className={css.header}>
      <div className={css.divMain}>
        <form action=""
         type="submit"
          onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={handleText}
            value={text}
            type="text"
            className={css.mainInput}
          />
        </form>
        <button className={css.btnAdd} onClick={handleClick}>Add</button>
      </div>
    </div>
  );
};

export default Header;
