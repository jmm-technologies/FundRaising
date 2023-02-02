import React from 'react';
import { Input, Select, Slider } from "antd";
import { Inertia } from "@inertiajs/inertia";
import { useLanguage } from '../../Constants/LanguageContext';

function TitleDropdown({ name, initial_value, options = [], Options_Objects = false }) {
    const urlParams = new URLSearchParams(window.location.search);
    const { t } = useLanguage()
    const handleSearch = (e) => {
        let query = {};
        for (let param of urlParams.entries()) {
            query[param[0]] = param[1];
        }

        Inertia.get(
            '',
            {
                ...query,
                [name.toLowerCase().replaceAll(" ", "_")]: e,
            },
            {
                preserveState: true,
            }
        );
    };

    return (
        <div className={"py-2"}>
            <p className={"f-14 fw-600  mb-15"}>
                {name}
            </p>
            <Select onChange={handleSearch} defaultValue={initial_value} style={{ minWidth: "80px" }}>
                {options.map((option, index) => (
                    <Select.Option key={index} value={Options_Objects ? option?.value : option}>{Options_Objects ? t(option?.label) : t(option)}</Select.Option>
                ))}
            </Select>
        </div>
    );
}

export default TitleDropdown;
