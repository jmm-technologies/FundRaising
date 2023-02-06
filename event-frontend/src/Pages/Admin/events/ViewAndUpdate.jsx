import React, { useEffect, useState } from "react";
import BackButton from "../../../Components/Common/BackButton";
import Layout from "../../../Layout/Admin/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, message } from "antd";
import FormTextInput from "../../../Components/Common/FormTextInput";
import FormTextAreaInput from "../../../Components/Common/FormTextAreaInput";
import { useSelector, useDispatch } from "react-redux";
import { fetchEventById, updateEvent } from "../../../features/showevents/showEventSlice";
import UploadFile from "../../../Components/Common/Upload";

function ViewAndUpdateEvent() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [eventData, setEventData] = useState({});

    const fetchEvent = useSelector((state) => state.eventSlice.event);
    const handleFinish = (values) => {
        dispatch(updateEvent({ ...values, id }));
        message.success("Event updated successfully");
        navigate("/event");
    };
    useEffect(() => {
        dispatch(fetchEventById(id));
        setEventData({
            name: fetchEvent.name,
            description: fetchEvent.description,
            image: fetchEvent.photoId?.path,
        });
    }, [id, dispatch, navigate, fetchEvent.name, fetchEvent.description, fetchEvent.photoId?.path]);
    useEffect(() => {
        form.setFieldsValue(eventData);
    }, [eventData, form]);
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
                        initialValues={eventData}
                    >
                        <div className="row m-0 p-0">

                            <div className="col-lg-4 col-md-10">
                                <div className="profileInfo  d-flex gap-3 align-items-center">

                                    <UploadFile
                                        previewImage={eventData.image}
                                    />
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
                                        {"Update"}
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
export default ViewAndUpdateEvent;
















