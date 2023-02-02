import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import FormTextAreaInput from '../Common/FormTextAreaInput';
const RequestRejectForm = ({ isModalVisible, handleCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={isModalVisible = {}}
            title="Reason for rejection"
            // okText="Submit"
            // cancelText="Cancel"
            onCancel={handleCancel}
          
            style={{ borderRadius: 15 }}
            footer={[
                <Button onClick={handleCancel} className='transparent--btn'>
                  Cancel
                </Button>,
                <Button   onClick={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }} className='primary--btn'>
                  Submit
                </Button>
              ]}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <FormTextAreaInput
                    name={"rejectionreason"}
                    placeholder='Type here...'
                />
            </Form>
        </Modal>
    );
};

export default RequestRejectForm;