import React from 'react';
import { Input } from "antd";
// import { useLanguage } from '../../Constants/LanguageContext';

function TitleInput({ name }) {
    const urlParams = new URLSearchParams(window.location.search);
    // const { t } = useLanguage()
    const handleSearch = (e) => {
        let query = {};
        for (let param of urlParams.entries()) {
            query[param[0]] = param[1];
        }


        // Inertia.get(
        //     '',
        //     {
        //         ...query,
        //         [name.toLowerCase().replaceAll(" ", "_")]: e.target.value,
        //     },
        //     {
        //         preserveState: true,
        //     }
        // );
    };
    return (
        <div className={"py-2"}>
            <p className={"f-14 fw-600 mb-15"}>
                {name}
            </p>
            <Input onChange={handleSearch} placeholder={"Search by " + name} className='input-field' />
        </div>
    );
}

export default TitleInput;
