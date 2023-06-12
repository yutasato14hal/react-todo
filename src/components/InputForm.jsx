import React, { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {

  const [inputText, setInpitText] = useState("");

  const handleDelete = () => {
    // タスクを削除

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputに打ち込んだ文字をコンソールに出力したい
    console.log(inputText);
    // タスクを追加したい
    setTaskList([
      ...taskList,
      {
        id: taskList.lengh,
        text: inputText,
        completed: false
      }
    ]);
    // 入力した文字を消す
    setInpitText("");
  };
  const handleChange = (e) => {
    setInpitText(e.target.value);
  };
  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} required/>
        <button onClick={handleDelete}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
