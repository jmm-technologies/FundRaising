import React from "react";
import { Form, Input } from "antd";
import { ValidationRules } from "../../Constants/validationRules";
// import { useLanguage } from "../../Constants/LanguageContext";

function SearchInput({
    name = "",
    label = "",
    placeholder = "",
    isArabicRule = false,
    isEmail = false,
    rules,
    isPhoneNumber = false,
    ...rest
}
) {
    // const changeLanguage = useLanguage();
    // const { t } = changeLanguage;
    return (
        <Form.Item label={label} name={name} 
            // rules={[
            //     ValidationRules(name).RequiredRule,
            //     isArabicRule && ValidationRules(name).ArabicRule,
            //     isEmail && ValidationRules().isEmail,
            //     isPhoneNumber && ValidationRules().PhoneFormat
            // ]}
        >
            <Input
                className={"input-field search-input"}
                placeholder={placeholder}
                {...rest}
                style={{
                    height: 40,
                }}
            />
        </Form.Item>
    );
}

export default SearchInput;
