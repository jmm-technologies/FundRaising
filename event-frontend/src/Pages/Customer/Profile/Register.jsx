import React from "react";
import { Button, Divider, Form, Upload, message } from "antd";
import FormTextInput from "../../../Components/Common/FormTextInput";
import FormTextAreaInput from "../../../Components/Common/FormTextAreaInput";
// import FormSelect from "../../../Components/Common/FormSelect";
// import FormSwitch from "../../../Components/Common/FormSwitch";
// import FormUpload from "../../../Components/Common/FormUpload";
// import { formatErrors } from "../../../Constants/global";
// import BreadCrumbCommon from "../../../Components/Common/BreadCrumbCommon";
// import BackButton from "../../../Components/Common/BackButton";
// import { Link, useNavigate  } from "react-router-dom";
import HeaderOnly from "../../../Components/Common/HeaderOnly";
import { BeforUploadFileCheck, FileSizeCheck } from "../../../Constants/global";
import ProfileAvatar from "../../../assets/images/Profile_Avatar.svg";


// import { useLanguage } from "../../../../Constants/LanguageContext";

function RegisterCustomer() {
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  // const { t } = useLanguage();

  const onFinish = (values) => {
    values = { ...values, images: values.images.fileList.map(img => img.originFileObj) }

    if (values?.images?.length === 0) {
      form.setFields([
        {
          name: 'images',
          errors: "Image field is required"
        }
      ])
      return
    }


    // Inertia.post(route("admin.market-item.store"), values, {
    //     onSuccess: () => {
    //         message.success(t('Item Added Successfully'));
    //         form.resetFields();
    //     },
    //     onError: (errors) => {
    //         form.setFields(formatErrors(errors));
    //     },
    // });
  };


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
    <div>
      <div className={"card-wrapper"}>
        <HeaderOnly
          title={'Customer Registration'}
          subTitle={'Enter the details below to add item'}
        />
        <div className={"custom-card-body"}>
          <Form layout={"vertical"} onFinish={onFinish} form={form}>
            <div className="row">
              <div className="col-md-2">
            <div className="profileInfo d-flex flex-column gap-3 align-items-center">
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

                        <div className="my-2">
                            <a href="#/" className="text-english-forest">Upload Picture</a>
                        </div>
                    </div>
                    </div>
                <div className="col-md-10">
                  <div className="row">
              <div className="col-md-6">
                <FormTextInput
                  name={"name"}
                  label={'Customer Name'}
                />
              </div>
              <div className="col-md-6">
                <FormTextInput
                  name={"ar_name"}
                  label={'Father Name'}
                  // isArabicRule={true}
                />
              </div>
              <div className="col-md-3">
                <FormTextInput
                  name={"name"}
                  label={'File Name'}
                />
              </div>
              <div className="col-md-3">
                <FormTextInput
                  name={"ar_name"}
                  label={'CNIC Number'}
                  // isArabicRule={true}
                />
              </div>
              <div className="col-md-3">
                <FormTextInput
                  name={"name"}
                  label={'Phone Number'}
                />
              </div>
              <div className="col-md-3">
                <FormTextInput
                  name={"ar_name"}
                  label={'Email address'}
                  // isArabicRule={true}
                />
              </div>
              </div>
              </div>
              </div>
              <div className="row">
              <div className="col-md-6">
                <FormTextAreaInput
                  name={"description"}
                  label={'Permanent Address'}
                />
              </div>
              <div className="col-md-6">
                <FormTextAreaInput
                  name={"ar_description"}
                  label={'Residential Address'}
                  // isArabicRule={true}
                />
              </div>
              <Divider />
              <div className="custom-card-header-noborder">
                <div>
                  <p className={"f-18 fw-500"}>{'Responsible person'}</p>
                  <p className={"text-muted"}>
                    {" "}
                    {'Information of responsible person after customer'}

                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <FormTextInput
                  name={"ar_name"}
                  label={'CNIC Number'}
                  // isArabicRule={true}
                />
              </div>
              <div className="col-md-3">
                <FormTextInput
                  name={"name"}
                  label={'Phone Number'}
                />
              </div>
              <div className="col-md-3">
                <FormTextInput
                  name={"ar_name"}
                  label={'Email address'}
                  // isArabicRule={true}
                />
              </div>
              <div className="col-md-6">
                <FormTextAreaInput
                  name={"description"}
                  label={'Permanent Address'}
                />
              </div>
              <div className="col-md-6">
                <FormTextAreaInput
                  name={"ar_description"}
                  label={'Residential Address'}
                  // isArabicRule={true}
                />
              </div>

              <div className="col-md-12  d-flex justify-content-end mt-4">
                <Button
                  className="transparent--btn m-2"
                >
                  {'Cancel'}
                </Button>

                <Button  htmlType="submit" className='primary--btn m-2'> {'Register'}</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    {/* </Layout> */}
    </div>
  );
}

export default RegisterCustomer;