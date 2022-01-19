import React from "react";
import { Tooltip, List, Popconfirm, Button, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import "./style.css";

function TodoItem({ todo, id }) {
  return (
    <div>
      <List.Item
        actions={[
          <Tooltip
            id={id}
            // title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
          >
            {todo.name}
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              // onChange={() => onTodoToggle(todo)}
              // defaultChecked={todo.completed}
            />
          </Tooltip>,
          <Popconfirm
            title="Are you sure you want to delete?"
            okText="Yes"
            cancelText="No"
            // onConfirm={() => {
            //   onTodoRemoval(todo);
            // }}
          >
            <Button className="remove-todo-button" type="primary" danger>
              X
            </Button>
          </Popconfirm>,
        ]}
        // className="list-item"
        // key={todo.id}
      >
        {/* <div className="todo-item"> */}
        {/* <Tag color={todo.completed ? "cyan" : "red"} className="todo-tag"> */}
        {/* {todo.name} */}
        {/* </Tag> */}
        {/* </div> */}
      </List.Item>
    </div>
  );
}

export default TodoItem;
