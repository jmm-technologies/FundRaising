import React from 'react';
import { Input, Slider } from "antd";
import { Inertia } from "@inertiajs/inertia";
import { getMaxValue } from '../../Constants/global';
import { useMemo } from 'react';
import { useLanguage } from '../../Constants/LanguageContext';

function TitleSlider({ name, sliderData = [], property = '' }) {
    const { t } = useLanguage()
    const urlParams = new URLSearchParams(window.location.search);
    const MaxValue = useMemo(() => {
        if (sliderData.length > 0) {

            return Math.max(...sliderData.map((o) => o[property]));

        }
        return 0
    })
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
        <div className={"py-2 w-100"}>
            <p className={"f-14 fw-600  mb-24"}>
                {t(name)}
            </p>
            <Slider defaultValue={0} max={MaxValue} trackStyle={{ backgroundColor: '#336EF8' }}

                onAfterChange={handleSearch} />
        </div>
    );
}

export default TitleSlider;
