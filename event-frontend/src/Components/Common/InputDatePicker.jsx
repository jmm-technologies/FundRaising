import React from "react";
import { DatePicker, Form } from "antd";
import { isRequired } from "../../Constants/validationRules";
import moment from "moment/moment";

const dateFormat = "YYYY/MM/DD";

const InputDatePicker = ({
    name = "",
    label = "",
    width = 145,
    borderColor = "#D4D4D4",
    className = "",
    boxShadow = "none",
    allowClear = false,
    background = "#FCFCFC",
    height = 32,
    formItemStyle = { margin: 0 },
    rules = null,
    isDisabled = false,
    ...restField
}) => {

    // function disabledDate(current) {
    //     // Can not select days before today and today
    //     return current.isBefore(moment().subtract(1, "day"));
    // }
    return (
        <Form.Item
            name={name}
            label={label}
            style={formItemStyle}
            rules={rules ? rules : [isRequired((`${label} is required`))]}
            {...restField}
        >
            <DatePicker
                disabled={isDisabled}
                style={{ width, borderColor, boxShadow, height, background }}
                format={dateFormat}
                className={className}
                allowClear={allowClear}
            // disabledDate={disabledDate}
            />
        </Form.Item>
    );
};

export default InputDatePicker;
