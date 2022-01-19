import React, { useState } from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import todoApi from "../../api/todoApi";
function AddTodoForm() {
  const [form] = Form.useForm();

  const [todo, setTodo] = useState("");

  const handleSubmit = async () => {
    try {
      await todoApi.addTodo({
        name: todo,
      });
    } catch (error) {
      console.log("errors");
    }
  };

  const onFinish = () => {
    // onFormSubmit({
    //   name: form.getFieldValue("name"),
    // });
    // form.resetFields();
  };

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        className="todo-form"
      >
        <Row gutter={20}>
          <Col xs={24} sm={24} md={17} lg={19} xl={20}>
            <Form.Item
              name={"name"}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input
                placeholder="what do you need to do?"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={7} lg={5} xl={4}>
            <Button
              type="primary"
              htmlType="submit"
              block
              onClick={handleSubmit}
            >
              <PlusCircleFilled />
              Add todo
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddTodoForm;
