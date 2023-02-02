import { Form, Input } from 'antd'
import React from 'react'
// import { useLanguage } from '../../Constants/LanguageContext';

function FormPassword({ name, placeHolder = '', rules }) {
    // const changeLanguage = useLanguage();
    // const { t } = changeLanguage;
    return (
        <Form.Item
            name={name}
            rules={[
                {

                    required: true,
                    message: 'Please input your ' + ` ${name}!`,
                },
                // {
                //     pattern: new RegExp(/^[a-zA-Z0-9]*$/),
                //     message: t('No Special Characters Allowed')
                // }
            ]}
        >
            <Input.Password placeholder={placeHolder}  className='primary-input'/>
        </Form.Item>

    )
}

export default FormPassword