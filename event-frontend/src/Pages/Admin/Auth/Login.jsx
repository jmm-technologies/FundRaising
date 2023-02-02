import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import loginlogo from "../../../assets/images/loginLogo3.png";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../../features/auth/adminAuthSlice";

function Login() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const navigate = useNavigate();


    const onFinish = (values) => {
        console.log("Success:", values);
        dispatch(adminLogin(values)).then((res) => {
            if (res.payload.token) {
                message.success("Login Successfully");
                navigate("/eventlist");
            } else {
                message.error("Login Failed");
            }
        });
    };
    const onFinishFailed = (errorInfo) => {
        message.error("Failed", errorInfo);
    };

    // check if user is already logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/eventlist");
        }
    }, []);
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 px-0 d-none d-md-flex bg-image">
                    <div className="bg-image-child">

                    </div>
                </div>


                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center pb-5">
                        <div className="container ">
                            <div className="row login-body">
                                <img src={loginlogo} alt="loginlogo" className="login-logo mb-5"></img>
                                <h1 className="text-center my-4 f-35 fw-400">LOGIN</h1>
                                <div className="col-lg-6 col-xl-6 col-md-8 col-sm-10 mx-auto">

                                    <Form className={"mt-30"} form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input email'
                                                },
                                            ]}
                                            values={form.email}
                                        >
                                            <Input placeholder="Email" className="border-radius-set my-3" />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input Password'
                                                },
                                            ]}
                                            values={form.password}
                                        >
                                            <Input.Password placeholder='Password' className="border-radius-set my-2" />
                                        </Form.Item>
                                        <Button
                                            htmlType="submit"
                                            className="btn-submit mt-5"
                                            block
                                        >
                                            Login
                                        </Button>
                                    </Form>
                                    <p className="my-5 text-center text-secondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );

}

export default Login;
