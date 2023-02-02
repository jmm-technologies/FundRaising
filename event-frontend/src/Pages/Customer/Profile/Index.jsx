import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/Customer/Layout";
import BreadCrumbCommon from "../../../Components/Common/BreadCrumbCommon";
import ProfileAvatar from "../../../assets/images/Profile_Avatar.svg";
import { Button, Form, message, Upload, Divider } from "antd";
import FormTextInput from "../../../Components/Common/FormTextInput";
import ChangePassword from "./ChangePassword";
// import { useLanguage } from "../../../Constants/LanguageContext";
import { BeforUploadFileCheck, FileSizeCheck } from "../../../Constants/global";
import FormTextAreaInput from "../../../Components/Common/FormTextAreaInput";
import HeaderOnly from "../../../Components/Common/HeaderOnly";

function Index() {
    // const { user } = usePage().props;
    const [form] = Form.useForm();
    // const changeLanguage = useLanguage();
    // const { t } = changeLanguage;
    const user = {
        fullname: "user khan",
        email: "user@gmail.com",
        phone_number: "1234567890",
        profile_image: "https://www.w3schools.com/howto/img_avatar.png",
        address: "1234, Street, City, Country",
    };
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
    const props = {
        name: "image",
        multiple: false,
        action: "user.profile-logo.update",
        beforeUpload: (file) => {
            const isImage = BeforUploadFileCheck(file, false);
            const fileSize = FileSizeCheck(file, false);
            if (!isImage) {
                message.error(`${file.name} is not a Image file`);
            }

            if (!fileSize) {
                message.error("Image Size shoudl be less than 2mb");
            }
            return (fileSize && isImage) || Upload.LIST_IGNORE;
        },
        maxCount: 1,
        showUploadList: false,
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
        <Layout activePage={""}>
            <BreadCrumbCommon crumbs={["Profile"]} />
            <div className={"card-wrapper"}>
                {/* <div className="custom-card-header">
                    <div>
                        <p className={"text-primary f-18 fw-500"}>
                            {"Manage Profile"}
                        </p>
                        <p className={"text-muted"}>
                            {"Update or change your profile information"}
                        </p>
                    </div>
                </div> */}
                <HeaderOnly
                    title={"Manage Profile"}
                    description={"Update or change your profile information"}
                />

                <div className="p-15-22px mt-4">
                    <div className="profileInfo  d-flex gap-3 align-items-center">
                        <Upload
                            accept={`.jpg, .jpeg, .png ,.svg`}
                            {...props}
                            onChange={handleChange}
                        >
                            <img
                                src={
                                    user?.image
                                        ? window.location.origin +
                                        "" +
                                        user?.image
                                        : ProfileAvatar
                                }
                                className="profile-image"
                            />
                        </Upload>

                        <div>
                            <h5 className="f-18 text-primary">
                                {user?.fullname}
                            </h5>
                            <p className="f-12 text-secondary">Super user</p>
                        </div>
                    </div>
                    <Form
                        form={form}
                        layout="vertical"
                        initialValues={{ ...user }}
                        onFinish={handleFinish}
                        className="mt-5"
                    >
                        <div className="row">
                            <div className="col-md-4">
                                <FormTextInput
                                    name={"fullname"}
                                    label={"Full Name"}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <FormTextInput
                                    name={"email"}
                                    label={"Email address"}
                                />
                            </div>
                            <div className="col-md-4">
                                <FormTextInput
                                    name={"phone_number"}
                                    label={"Phone number"}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <FormTextAreaInput
                                    name={"address"}
                                    label={"Address"}
                                    rows="3"
                                />
                            </div>
                        </div>
                        <Divider />
                        {/* <div className="row"> */}
                        <h3 className="f-18 fw-500">Responsible Person Information</h3>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <FormTextInput
                                    name={"fullname"}
                                    label={"Reponsible person name"}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <FormTextInput
                                    name={"fullname"}
                                    label={"Reponsible person CNIC"}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <FormTextInput
                                    name={"fullname"}
                                    label={"Reponsible person Number"}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <FormTextAreaInput
                                    name={"address"}
                                    label={"Address"}
                                    rows="3"
                                />
                            </div>
                        </div>
                        <div className="row row-cols-2 row-cols-md-3 gap-3 mt-4">
                            <div className="col">
                                <ChangePassword />
                                <p
                                    className="f-10 text-secondary mt-5px w-75"
                                // style={{ width: 178 }}
                                >
                                    {
                                        "Incase you want to change or your password got leaked."
                                    }
                                </p>
                            </div>
                            <div className="col d-flex flex-column align-items-end">
                                <div className="">
                                    <Button
                                        htmlType="submit"
                                        type="primary"
                                        className="primary--btn btn-height custom-lg-btn"
                                    // className="primary--btn btn-height"

                                    >
                                        {"Save changes"}
                                    </Button>
                                    <p
                                        className="f-10 text-secondary mt-5px"
                                        style={{ width: 138 }}
                                    >
                                        {
                                            "To update your information click on this button."
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>


                    </Form>
                </div>
            </div>
        </Layout>
    );
}

export default Index;
