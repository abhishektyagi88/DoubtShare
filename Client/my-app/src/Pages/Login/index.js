import React from "react";
import { Form, Input, Checkbox, Button, message } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../ApiCalls/students";

function Login() {
    const navigate = useNavigate();
    const onFinish = async (value) => {
        try {
            const response = await userLogin(value);
            if (response.success) {
                message.success(response.message);
                localStorage.setItem("token", response.data.jwt_token);
                if (response.data.istutor) {
                    navigate("/tutor-dashboard");
                } else {
                    navigate("/student-dashboard");
                }
            } else {
                message.error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    }

    return (
        <div style={{ backgroundImage: "url('https://c0.wallpaperflare.com/preview/260/64/58/posting-post-computer-icon-thumbnail.jpg')" }}
            className="h-[100vh] bg-blue-600 flex flex-col">
            <div className="mt-[120px] ml-[450px]" >
                <p className="text-4xl mb-2 font-bold text-yellow-400 underline ml-[250px]">login</p>
                <Form className="border-4 pr-[100px] h-[450px] bg-yellow-400 rounded-3xl"
                    onFinish={onFinish}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                >
                    <div className='font-bold pt-[20px] pl-[10px] flex'>
                        <p className='text-[30px] text-blue-600'>Doubt</p>
                        <p className='text-xl  text-blue-600'>Share</p>
                    </div>
                    <div>
                        <p className="font-medium text-sm text-blue-600 ml-3 mb-10">	Connecting Students to Success</p>
                    </div>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button className="bg-blue-600 ml-[105px] " type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    <div className="mt-[65px] ml-[25px] text-xl font-semibold">
                        New User ? |<Link to={"/studentregister"} className="cursor-pointer"> SignUp</Link> |
                    </div>
                </Form>

            </div>

        </div>
    )
}

export default Login;