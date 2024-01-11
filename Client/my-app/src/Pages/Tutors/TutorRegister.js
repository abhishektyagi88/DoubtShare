import React from "react";
import { Form, Input, Checkbox, Button, message } from 'antd';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RegisterTutor } from "../../ApiCalls/tutors";

function TutorRegister() {
    const navigate = useNavigate();
    const onFinish = async (value) => {
        try {
            const response = await RegisterTutor(value);
            if (response.success) {
                message.success(response.message);
                navigate("/login");
            } else {
                message.error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    }
    return (
        <div className="h-[100vh] flex justify-between">

            <div className="mt-[50px] ml-[80px]" >
                <p className="text-4xl mb-2 font-bold text-yellow-400 underline ml-[150px]">Signup for Tutors</p>
                <Form className="border-4 pr-[100px] h-[600px] w-[600px] bg-yellow-400 rounded-3xl"
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
                        <p className="font-medium text-sm text-blue-600 ml-3 mb-10">Empowering Minds, Inspiring Success</p>
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
                        label="Highest Qualification"
                        name="qualification"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your qualification!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Experience (Yrs)"
                        name="experience"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your experience!',
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
                    <div className="mt-[65px] ml-[15px] text-xl font-semibold">
                        Already have an account ? |<Link to={"/login"}> Login </Link>|
                    </div>
                </Form>

            </div>
            <div className="mr-[50px] mt-[80px]">
                <img className="h-[500px]" src=
                    "https://content.jdmagicbox.com/comp/hyderabad/k9/040pxx40.xx40.131101123827.f2k9/catalogue/sri-sai-balaji-home-tuitions-new-nagole-hyderabad-home-tutors-quu2eq.jpg?clr="
                    alt="pic"
                />
            </div>

        </div>
    )
}

export default TutorRegister;