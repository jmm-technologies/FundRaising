import React from 'react';
import { Form, message } from "antd";
import { Upload } from 'antd';
import { BeforUploadFileCheck, FileSizeCheck, ReturnImagesForDefaultList } from '../../Constants/global';
// import { useLanguage } from '../../Constants/LanguageContext';



const { Dragger } = Upload;

function FormUpload({
    name = "",
    label = "",
    rules = [{
        required: true,
        message: 'Please input your ' + name.replaceAll('_', ' ') + '!',
    }],
    multiple = false,
    defaultFileList = [],
    maxCount = null,
    acceptVideo = false
}) {
    // const { t } = useLanguage()
    const props = {
        name: name,

        multiple: multiple,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        beforeUpload: (file) => {
            const isImage = BeforUploadFileCheck(file, acceptVideo)
            const fileSize = FileSizeCheck(file, acceptVideo)
            if (!isImage) {
                message.error(`${file.name} is not a Image file`);
            }

            if (!fileSize) {
                let text = ''
                if (file.type === "video/mp4") {
                    text = 'Video Size shoudl be less than 20mb'
                }
                else {
                    text = 'Image Size shoudl be less than 2mb'

                }
                message.error(text);

            }
            return (fileSize && isImage) || Upload.LIST_IGNORE;
        },
        defaultFileList: ReturnImagesForDefaultList(defaultFileList),

        maxCount: maxCount,
        listType: 'picture-card',
        customRequest: ({ file, onSuccess }) => {
            setTimeout(() => {
                onSuccess("ok");
            }, 0);
        }
    };

    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}


        >
            <Dragger {...props} accept={`.jpg, .jpeg, .png ,.svg , ${acceptVideo && 'video/mp4'}`}
            // style={{ height: '400px' }}
            className=''
            >
                <p className="ant-upload-text">{'Drop Images here to upload'}</p>
                <p className="ant-upload-hint">
                    {'jpg,png ' + 'Format only'}
                </p>
            </Dragger>
        </Form.Item>
    );
}

export default FormUpload;