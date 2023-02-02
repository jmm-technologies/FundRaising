import React from 'react';
import back from '../../assets/images/Icons/back.svg'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
// import { useLanguage } from '../../Constants/LanguageContext';


function BackButton({ backUrl = "" }) {
    const navigate = useNavigate();
    // const changeLanguage = useLanguage();
    // const { t } = changeLanguage;

    return (
        <Button onClick={() => navigate(-1)} type="link">
        <span href={backUrl} className={"d-flex align-items-center text-decoration-none mb-1"}>
            <img src={back} alt="back" className='back-btn-image' width={14} height={14} /> <span className={"mx-2 text-primary"}>
                Back</span>
        </span>
        </Button>
    );
}

export default BackButton;
