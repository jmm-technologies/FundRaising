// import { useLanguage } from "./LanguageContext";

export const confirmRule = (message, name) => {
    return [
        {
            required: true,
            message,
        },
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue(name) === value) {
                    return Promise.resolve();
                }

                return Promise.reject(new Error(message));
            },
        }),
    ];
};
export const requiredRule = (label = "Field") => {
    return {
        required: true,
        message: `${label === "" ? "Field" : label} is required`,
    };
};
export const isRequired = (message) => {
    return {
        required: true,
        message,
    };
};

export const ValidationRules = (name = "") => {
    // const { t } = useLanguage();

    const Rules = {
        RequiredRule: {
            required: true,
            message: "Please input your " + name.replaceAll("_", " ") + "!",
        },
        ArabicRule: {
            required: true,
            pattern: "^[\u0621-\u064A0-9 ]+$",
            message:
                "Please input your " +
                name.replaceAll("_", " ") +
                " in Arabic",
        },
        isEmail: {
            type: "email",
            message: "Please input valid  email",
        },
        PhoneFormat: {
            pattern: /^\+?[0-9]+$/,
            message: "Phone Number Format is Incorrect",
        },
    };

    return Rules;
};
