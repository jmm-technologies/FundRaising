import React from 'react';
import { Button } from 'antd';
// import { useLanguage } from '../../Constants/LanguageContext';
const ChangeLangBtn = () => {
    // const changeLanguage = useLanguage();
    // const { language, updateLanguage } = changeLanguage;
    return (
        // <Button type="text" onClick={() => updateLanguage(language === 'en' ? 'ar' : 'en')}>{language === 'en' ? 'عربى' : 'Eng'}</Button>
        <Button type="text" onClick={() => console.log('change lang')}>Eng</Button>
    )
}

export default ChangeLangBtn;