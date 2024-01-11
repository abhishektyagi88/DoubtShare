import React from "react";
import { Form, Input, Checkbox, Button, message } from 'antd';
import { Link } from "react-router-dom";
import { RegisterStudent } from "../../ApiCalls/students";
import { useNavigate } from "react-router-dom";


function StudentRegister() {
    const navigate = useNavigate();
    const onFinish = async (value) => {
        try {
            const response = await RegisterStudent(value);
            if (response.success) {
                message.success(response.message);
                navigate('/login');
            } else {
                message.error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    }



    return (
        <div style={{ backgroundImage: "url('https://c0.wallpaperflare.com/preview/225/565/175/design-device-flat-illustration-thumbnail.jpg')" }}
            className="h-[100vh] bg-blue-600 flex flex-col">

            <div className="mt-[120px] ml-[450px]" >
                <p className="text-4xl mb-2 font-bold text-yellow-400 underline ml-[130px]">Signup for Students</p>
                <Form className="border-4 pr-[100px] h-[500px] bg-yellow-400 rounded-3xl"
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
                        <p className="font-medium text-sm text-blue-600 ml-3 mb-10">Igniting Brilliance, Shaping Futures</p>
                    </div>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

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
                        Already have an account ? | <Link to={"/login"} className="cursor-pointer">Login</Link> |
                        <Link to={"/tutorregister"}> For Tutors </Link>|
                    </div>
                </Form>

            </div>

        </div>
    )
}

export default StudentRegister;