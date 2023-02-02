import React from 'react';
import { Form, Input, Select } from "antd";
// import { useLanguage } from '../../Constants/LanguageContext';

function FormSelect({ name = "", label = "", placeholder = "", rules, options = [] }) {
    // const changeLanguage = useLanguage();
    // const { t } = changeLanguage;
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{
                required: true,
                message: 'Please input your ' + name.replaceAll('_', ' ') + '!',
            }]}
            
        >
            <Select className={"primary-input"} 
            >
                {
                    options.map((option, index) => {
                        return <Select.Option key={index} value={option.value}>{option.label}</Select.Option>
                    })
                }
            </Select>
        </Form.Item>
    );
}

export default FormSelect;
