import React from "react";
import BackButton from "../../../Components/Common/BackButton";
import Layout from "../../../Layout/Admin/Layout";
import { useNavigate } from "react-router-dom";
import { Button, Form, message } from "antd";
import FormTextInput from "../../../Components/Common/FormTextInput";
import FormTextAreaInput from "../../../Components/Common/FormTextAreaInput";
import { useDispatch } from "react-redux";
import { createEvent } from "../../../features/showevents/showEventSlice";
import UploadFile from "../../../Components/Common/Upload";
// const { Dragger } = Upload;

function CreateEvent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        dispatch(createEvent(values));
        message.success("Event created successfully");
        navigate("/event");
    };

    return (
        <Layout activePage={'events list'}>
            <div className={"card-wrapper"}>
                <div className="p-3 border-bottom">
                    <BackButton />
                </div>
                <div className={"custom-card-body"}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleFinish}
                        className=""
                    >
                        <div className="row m-0 p-0">

                            <div className="col-lg-4 col-md-10">
                                <div className="profileInfo  d-flex gap-3 align-items-center">

                                    <UploadFile />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-10">

                                <div className="row">
                                    <div className="col-md-6">
                                        <FormTextInput
                                            name={"name"}
                                            label={"Blog Name"}
                                            placeholder={"Enter Event title"}

                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 descrition">
                                        <FormTextAreaInput
                                            name={"description"}
                                            label={"Description"}
                                            rows={4}
                                            placeholder={"Enter Description"}

                                        />
                                    </div>
                                </div>
                                <div className="d-flex gap-3 justify-content-end mt-4">
                                    <Button
                                        className="btn-height custom-lg-btn btn-cancel"
                                        onClick={() => navigate(-1)}
                                    >
                                        {"Cancel"}
                                    </Button>
                                    <Button
                                        htmlType="submit"
                                        type="primary"
                                        className="primary--btn btn-height custom-lg-btn"
                                    >
                                        {"Add Blog"}
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </Form>

                </div>
            </div>
        </Layout >
    );
}
export default CreateEvent;
















