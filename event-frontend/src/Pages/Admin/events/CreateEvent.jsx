import React from "react";
import { InboxOutlined } from '@ant-design/icons';
import BackButton from "../../../Components/Common/BackButton";
import Layout from "../../../Layout/Customer/Layout";
import { useNavigate } from "react-router-dom";
import { Button, Form, Upload, message } from "antd";
import FormTextInput from "../../../Components/Common/FormTextInput";
import FormTextAreaInput from "../../../Components/Common/FormTextAreaInput";
import { useSelector, useDispatch } from "react-redux";
import { createEvent, showEventById } from "../../../features/showevents/showEventSlice";
const { Dragger } = Upload;

function CreateEvent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    
    const handleFinish = (values) => {
        
    };
    // const props = {
    //     name: "image",
    //     multiple: false,
    //     action: "user.profile-logo.update",
    //     beforeUpload: (file) => {
    //         const isImage = BeforUploadFileCheck(file, false);
    //         const fileSize = FileSizeCheck(file, false);
    //         if (!isImage) {
    //             message.error(`${file.name} is not a Image file`);
    //         }

    //         if (!fileSize) {
    //             message.error("Image Size shoudl be less than 2mb");
    //         }
    //         return (fileSize && isImage) || Upload.LIST_IGNORE;
    //     },
    //     maxCount: 1,
    //     showUploadList: false,
    // };

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const handleChange = (value) => {

        // Inertia.post(
        //     // route("user.profile-logo.update"),
        //     { images: value.file.originFileObj },
        //     {
        //         onSuccess: () => {
        //             message.success("Profile Image updated successfully");
        //         },
        //         onError: (errors) => {
        //             Object.keys(errors).map((el) => {
        //                 message.error(errors[el]);
        //             });
        //         },
        //         preserveState: false,
        //     }
        // );
    };
    return (
        <Layout activePage={'List of plots'}>
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
                                    <Dragger {...props}
                                        style={{ height: '500px' }}
                                    >
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Add Relative Image to blog</p>
                                        <p className="ant-upload-hint">
                                            <span className="text-primary fw-500">
                                                Drag file
                                            </span>
                                            or
                                            <span className="text-primary fw-500">
                                                Upload
                                            </span>
                                        </p>
                                    </Dragger>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-10">

                                <div className="row">
                                    <div className="col-md-6">
                                        <FormTextInput
                                            name={"fullname"}
                                            label={"Blog Name"}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 descrition">
                                        <FormTextAreaInput
                                            name={"address"}
                                            label={"Description"}
                                            rows={4}

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
                                        {"Save changes"}
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
















