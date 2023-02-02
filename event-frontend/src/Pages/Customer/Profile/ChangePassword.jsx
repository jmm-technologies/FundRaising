import React, { useEffect } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import FormTextInput from "../../../Components/Common/FormTextInput";
import { formatErrors } from "../../../Constants/global";
import { useState } from "react";
import editicon from "../../../assets/images/Icons/edit-icon.svg";
import FormPassword from "../../../Components/Common/FormPassword";
// import { useLanguage } from "../../../Constants/LanguageContext";

const ChangePassword = ({ editData = {}, showEditIcon = false }) => {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const changeLanguage = useLanguage();
    // const { t } = changeLanguage;

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        form.resetFields()
        setIsModalOpen(false);
    };
    const handleFinish = (values) => {
        // delete values.confirmPassword;
        // Inertia.post(route("admin.profile.changePassword"), values, {
        //     onSuccess: () => {
        //         message.success(t('Password Updated successfully'));
        //         handleCancel();
        //     },
        //     onError: (errors) => {
        //         Object.keys(errors).map((el) => {
        //             message.error(errors[el]);
        //         });
        //         // form.setFields([
        //         //     {
        //         //         name: 'password',
        //         //         errors: 'Matcnig'
        //         //     }
        //         // ])
        //     },
        //     preserveState: true,
        // });
    };




    return (
        <>
            <Button
                className="text-english-forest btn-height btn-border-color"
                onClick={showModal}
            >
                {'Change Password'}
            </Button>

            <Modal
                wrapClassName="antd-primary--modal"
                open={isModalOpen}
                footer={null}
                onCancel={handleCancel}
                closeIcon={false}
                closable={false}
                width="342px"
            >
                <div className="text-center mt-15">
                    <h5 className="f-16">{'Update your password'}</h5>
                    <p className="f-14 text-secondary mt-2">
                        {'information must be kept secret'}
                    </p>
                </div>
                <Form
                    form={form}
                    onFinish={handleFinish}

                    layout="vertical"
                    className="mt-30"
                >
                    <FormPassword name="password" placeHolder={'Old Password'} />
                    <FormPassword
                        name="newpassword"
                        placeHolder="New Password"
                    />

                    <Form.Item
                        name={"confirmPassword"}
                        dependencies={["newpassword"]}
                        rules={[
                            {
                                required: true,
                                message: 'Please Input Confirm Password',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("newpassword") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            'The two passwords that you entered do not match!',
                                        )
                                    );
                                },
                            }),
                            // {
                            //     pattern: new RegExp(/^[a-zA-Z0-9]*$/),
                            //     message: t('No Special Characters Allowed'),
                            // },
                        ]}
                    >
                        <Input.Password placeholder={'Confirm Password'}  className="primary-input"/>
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-100 text-red mb-3 primary--btn"
                    >
                        {'Save & Update'}
                    </Button>
                </Form>
            </Modal>
        </>
    );
};

export default ChangePassword;