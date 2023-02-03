import React from 'react';
import { Form, Input } from "antd";
import { ValidationRules } from '../../Constants/validationRules';
const { TextArea } = Input;

function FormTextAreaInput({ name = "", label = "", placeholder = "", rows = "",
    isArabicRule = false, description,
}) {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[
                ValidationRules(name).RequiredRule,
                isArabicRule && ValidationRules(name).ArabicRule
            ]}
            initialValue={description}
        >
            {/* <Input.TextArea className={"primary-input w-100"} placeholder={placeholder} rows={4} /> */}
            <TextArea
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                className={"primary-input"}
                placeholder={placeholder}
                autoSize={{
                    minRows: 12,
                    maxRows: 50,
                }}
            />
        </Form.Item>
    );
}

export default FormTextAreaInput;
