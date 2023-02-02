import React from 'react';
import { Form, Input, Switch } from "antd";


function FormSwitch({ name = "", label = "", styling = '', placeholder = "", rules, switchClassName = "", onChange = {} }) {

    return (
        <Form.Item
            label={label}
            name={name}
            valuePropName={"checked"}
            className={styling}
            initialValue={true}

        >
            <Switch defaultChecked={true} placeholder={placeholder} className={switchClassName} onChange={onChange} />
        </Form.Item>
    );
}

export default FormSwitch;
