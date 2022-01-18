import React from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
function AddTodoForm() {
  const [form] = Form.useForm();

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
              <Input placeholder="what do you need to do?" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={7} lg={5} xl={4}>
            <Button type="primary" htmlType="submit" block>
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
