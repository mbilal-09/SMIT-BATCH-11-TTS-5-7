import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { auth } from "../utils/firebase";
// import { signOut } from "firebase/auth";
const CheckOutModal = ({
  isModalOpen,
  handleOk,
  checkoutOrder,
  handleCancel,
}) => {
  useEffect(() => {
    return setContinueAsGuest(false);
  }, []);

  const [continueAsGuest, setContinueAsGuest] = useState(false);
  const isLogin = auth.currentUser;
  return (
    <Modal
      title="Check0ut Modal"
      open={isModalOpen}
      onOk={handleOk}
      closable = {false}
      footer={null}
      onCancel={handleCancel}
    >
      {!isLogin && !continueAsGuest && (
        <div className="flex flex-col items-center">
          <h1 className="text-center my-5">
            Login to Save your Order's and See Progress
          </h1>
          <Button type="primary" >Continue with Google</Button>
          <h1 className="text-center my-5">----- OR -----</h1>
          <Button onClick={() => setContinueAsGuest(true)}>
            Continue as a Guest
          </Button>
        </div>
      )}

      {isLogin ||
        (continueAsGuest && (
          <Form onFinish={checkoutOrder} layout="vertical">
            <Form.Item name={"username"} label={"Username"}>
              <Input />
            </Form.Item>
            <Form.Item name={"email"} required label={"Email"}>
              <Input type="email" />
            </Form.Item>
            <Form.Item name={"number"} required label={"Phone Number"}>
              <Input type="number" />
            </Form.Item>
            <Form.Item required name={"address"} label={"Address"}>
              <Input.TextArea placeholder="Address" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        ))}
    </Modal>
  );
};
export default CheckOutModal;
