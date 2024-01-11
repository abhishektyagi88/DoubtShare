import React from "react";
import { Form, Modal, Col, Row, message } from "antd";
import { AddDoubt } from "../../ApiCalls/doubts";
import moment from 'moment';

function DoubtForm({
    formModal,
    setFormModal
}) {

    const onFinish = async (values) => {
        try {
            const response = await AddDoubt(values);
            if (response.success) {
                message.success(response.message);
                setFormModal(false);
            } else {
                message.error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    }


    return (
        <Modal
            title="Create a Doubt"
            open={formModal}
            onCancel={() => {
                setFormModal(false);
            }}
            footer={null}
            width={800}
        >
            <Form layout="vertical"
                initialValues="hello"
                onFinish={onFinish}
            >
                <Row gutter={16} >
                    <Col span={24} >
                        <Form.Item label="Doubt Title" name="title">
                            <input type="text" className="border-2 border-orange-600 rounded-lg w-[100%]" />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item label="Doubt Description" name="description">
                            <textarea type="text" className="border-2 border-orange-600 rounded-lg w-[100%]" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Date" name="date">
                            <input min={moment().format("YYYY-MM-DD")} type="date" className="border-2 border-orange-600 rounded-lg" />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Language" name="language">
                            <select name="" id="" className="border-2 border-orange-600 rounded-lg">
                                <option value="">Select Language</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Telgu">Telgu</option>
                            </select>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Issue Type" name="issue">
                            <select name="" id="" className="border-2 border-orange-600 rounded-lg">
                                <option value="">Select Issue</option>
                                <option value="Clarifying Problem">Clarifying Problem</option>
                                <option value="Facing Compilation Error">Facing Compilation Error</option>
                                <option value="Rectify the Syntax">Rectify the Syntax</option>
                                <option value="Repo not intialized">Repo not intialized</option>
                                <option value="Editor not working">Editor not working</option>
                                <option value="Runtime Error">Runtime Error</option>
                                <option value="M.L.E Error">M.L.E Error</option>
                                <option value="T.L.E Error">T.L.E Error</option>
                            </select>
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label="Subject" name="subject">
                            <select name="" id="" className="border-2 border-orange-600 rounded-lg">
                                <option value="">Select Subject</option>
                                <option value="React">React</option>
                                <option value="NodeJS">NodeJS</option>
                                <option value="Java">Java</option>
                                <option value="MongoDb">MongoDb</option>
                                <option value="ExpressJs">ExpressJs</option>
                                <option value="Python">Python</option>
                            </select>
                        </Form.Item>
                    </Col>
                    <Col span={16}>
                        <Form.Item label="Link to Doubt (If Any)" name="link">
                            <input type="text" className="border-2 border-orange-600 rounded-lg w-[100%]" />
                        </Form.Item>
                    </Col>
                </Row>

                <div className="flex justify-end gap-1">
                    <button type="button" class="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none 
        focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 
        text-center me-2 mb-2 dark:focus:ring-orange-900" onClick={() => {
                            setFormModal(false);
                        }}>Cancel</button>
                    <button type="submit" class="text-white bg-orange-400 hover:bg-orange-500 focus:outline-none 
        focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 
        text-center me-2 mb-2 dark:focus:ring-orange-900">Save</button>
                </div>
            </Form>
        </Modal>
    )
}

export default DoubtForm;