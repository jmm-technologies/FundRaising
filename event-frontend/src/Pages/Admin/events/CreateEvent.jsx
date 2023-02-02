import React, { useRef, useState } from "react";
import { InboxOutlined } from '@ant-design/icons';
import BackButton from "../../../Components/Common/BackButton";
import BreadCrumbCommon from "../../../Components/Common/BreadCrumbCommon";
import DeleteButton from "../../../Components/Common/DeleteButton";
import editicon from "../../../assets/images/Icons/edit-icon.svg";
import Layout from "../../../Layout/Customer/Layout";
import DatatableComponent from "../../../Components/Common/DatatableComponent";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Upload, message } from "antd";
import { BeforUploadFileCheck, FileSizeCheck } from "../../../Constants/global";
import FormTextInput from "../../../Components/Common/FormTextInput";
import FormTextAreaInput from "../../../Components/Common/FormTextAreaInput";
import group from "../../../assets/images/group.png";
const { Dragger } = Upload;

function CreateEvent() {
    const navigate = useNavigate();
    // const { user } = usePage().props;
    const [form] = Form.useForm();
    // const changeLanguage = useLanguage();
    // const { t } = changeLanguage;
    const handleFinish = (values) => {
        // Inertia.post(route("user.profile-information.update"), values, {
        //     onSuccess: () => {
        //         message.success(t("Profile settings update successfully"));
        //     },
        //     onError: (errors) => {
        //         Object.keys(errors).map((el) => {
        //             message.error(errors[el]);
        //         });
        //     },
        //     preserveState: false,
        // });
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
    // const { offering = {}, items = [] } = usePage().props;
    // const componentRef = useRef();
    // const changeLanguage = useLanguage();
    // const { getLangtext, t } = changeLanguage;
    // create a data using loop
    // const [isModalVisible, setIsModalVisible] = useState(false);
    // const onCreate = (values) => {
    //   console.log('Received values of form: ', values);
    // };
    // const toggleModal = () => setIsModalVisible(!isModalVisible);
    const data = [];
    for (let i = 1; i <= 100; i++) {
        data.push({
            s_no: `${i}`,
            Month: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
            Amount: `45,000 PKR`,
            Status: "Pending",
        });
    };

    return (
        <Layout activePage={'List of plots'}>
            <div className={"card-wrapper"}>
                <div className="p-3 border-bottom">
                    <BackButton />

                </div>
                <div className={"custom-card-body"}>
                    <div className="row m-0 p-0">
                        <div className="col-lg-4 col-md-10">
                            <div className="profileInfo  d-flex gap-3 align-items-center">
                                {/* <Upload
                                    accept={`.jpg, .jpeg, .png ,.svg`}
                                    {...props}
                                    onChange={handleChange}
                                >
                                    <img
                                        src={group}
                                        className="profile-image"
                                    />
                                </Upload> */}
                                  <Dragger {...props} 
                                  style={{height:'500px'}}
                                  >
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Add Relative Image to blog</p>
    <p className="ant-upload-hint">
      {/* Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files */}
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
                            <Form
                                form={form}
                                layout="vertical"
                                //    initialValues={{ ...user }}
                                onFinish={handleFinish}
                                className=""
                            >
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
                                    {/* <div className="col"> */}
                                    <Button
                                        htmlType="submit"
                                        className="btn-height custom-lg-btn btn-cancel"
                                    // className="primary--btn btn-height"

                                    >
                                        {"Cancel"}
                                    </Button>

                                    {/* </div> */}
                                    {/* <div className="col d-flex justify-content-end"> */}
                                    <Button
                                        htmlType="submit"
                                        type="primary"
                                        className="primary--btn btn-height custom-lg-btn"
                                    // className="primary--btn btn-height"

                                    >
                                        {"Save changes"}
                                    </Button>

                                    {/* </div> */}
                                </div>


                            </Form>
                        </div>

                    </div>


                </div>
            </div>
        </Layout>
    );
}
export default CreateEvent;
















