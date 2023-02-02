import React, { useRef, useState } from "react";
import BackButton from "../../../Components/Common/BackButton";
import BreadCrumbCommon from "../../../Components/Common/BreadCrumbCommon";
import DeleteButton from "../../../Components/Common/DeleteButton";
import editicon from "../../../assets/images/Icons/edit-icon.svg";
import Layout from "../../../Layout/Customer/Layout";
import DatatableComponent from "../../../Components/Common/DatatableComponent";
import { Link, useNavigate } from "react-router-dom";
import demo1 from "../../../assets/images/demo1.png";
import TitleInput from "../../../Components/Common/TitleInput";
import TitleAction from "../../../Components/Common/TitleAction";
import { Button, Divider, Form, Upload, message } from "antd";
import Reciptdemo from "../../../assets/images/recipt.png";
import RequestRejectForm from "../../../Components/ManageRequest/RequestRejectionModal";
// import { useLanguage } from "../../../../Constants/LanguageContext";
import HeaderOnly from "../../../Components/Common/HeaderOnly";
import { BeforUploadFileCheck, FileSizeCheck } from "../../../Constants/global";
import FormTextInput from "../../../Components/Common/FormTextInput";
import FormTextAreaInput from "../../../Components/Common/FormTextAreaInput";
import ChangePassword from "../Profile/ChangePassword";
import  group from "../../../assets/images/group.png";


function CustomeDetail() {
  const navigate = useNavigate();
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
                                        : group
                                }
                                className="profile-image"
                            />
                        </Upload>
                    </div>
</div>
                    <div className="col-lg-8 col-md-10">                   
                   <Form
                       form={form}
                       layout="vertical"
                       initialValues={{ ...user }}
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
export default CustomeDetail;
















