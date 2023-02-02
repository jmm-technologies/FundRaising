import React from 'react';
import { DatePicker, Input, Slider } from "antd";
import { Inertia } from "@inertiajs/inertia";
import { useLanguage } from '../../Constants/LanguageContext';

function TitleDate({ name, className = "" }) {
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
                [name.toLowerCase().replaceAll(" ", "_")]: e.format('DD-MM-YYYY'),
            },
            {
                preserveState: true,
            }
        );
    };
    return (
        <div className={`py-2 ${className}`}>
            <p className={"f-14 fw-600 mb-15 "}>{t(name)}</p>
            <DatePicker onChange={handleSearch} format={"DD-MM-YYYY"} placeholder={t('Select date')} />
        </div>
    );
}

export default TitleDate;
