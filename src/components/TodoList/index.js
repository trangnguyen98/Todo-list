import React, { useEffect, useState } from "react";
import { List, Typography, Divider } from "antd";
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
        size="large"
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={todoList}
        renderItem={(item) => (
          <List.Item>
            {item.name}
            <button>Xoa</button>
          </List.Item>
        )}
      />
      {/* <List
        local={{ emtyText: "There's nothing to do" }}
        size="large"
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={["a", "b"]}
        // renderItem={() => <TodoItem />}
      /> */}
      {/* {todoList.map((todo, index) => (
          <TodoItem key={index} value={todo.id} />
        ))}
        <TodoItem value="aaa" /> */}
      {/* </List> */}
    </div>
  );
}

export default TodoList;
