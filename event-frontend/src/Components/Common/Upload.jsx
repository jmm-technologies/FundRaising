import React, { useEffect, useState } from "react";
import { Form, Upload } from "antd";

const UploadFile = ({ previewImage = "",
    isDisabled = false
}) => {
    const [uploadPreview, setUploadPreview] = useState(previewImage);

    useEffect(() => {
        setUploadPreview(previewImage);
    }, [previewImage]);
    return (
        <>
            <Form.Item
                name="file"
                required={false}
            >
                <Upload
                    style={{ height: '400px' }}
                    disabled={isDisabled}
                    className="primary-image-upload"
                    listType="picture-card"
                    beforeUpload={false}
                    showUploadList={false}
                    onChange={({ file }) => {
                        setUploadPreview(URL.createObjectURL(file.originFileObj))
                    }}
                >
                    {uploadPreview ? (
                        <img src={uploadPreview} alt="eventimage" className="imgfluid"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    )
                        : (
                            <div>
                                <p className="ant-upload-text text-black py-2">Add Relative Image to blog</p>
                                <p className="ant-upload-hint">
                                    <span className="text-primary fw-500">
                                        Drag file
                                    </span>
                                    or
                                    <span className="text-primary fw-500">
                                        Upload
                                    </span>
                                </p>
                            </div>
                        )}
                </Upload>
            </Form.Item>

        </>
    );
};

export default UploadFile;
