import React, { useEffect, useState } from "react";
import { List } from "antd";
import TodoItem from "../TodoItem";
import todoApi from "../../api/todoApi";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    todoApi.getAll().then((response) => {
      setTodoList(response.data);
    });
  }, []);

  return (
    <div>
      <List
        local={{ emtyText: "There's nothing to do" }}
        size="large"
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        // dataSource={}
        // renderItem={() => <TodoItem />}
      />
      {todoList.map((todo, index) => (
        <TodoItem />
      ))}
    </div>
  );
}

export default TodoList;
