import React from 'react';
import {withTranslation} from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = (props) => {

    const onChangeLanguage = language =>{
        const{ i18n } = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    };

    return (
        <div className='container'>
            <img src="https://flagcdn.com/24x18/tr.png" alt="Turkish Flag"
            onClick={()=>onChangeLanguage('tr')} className="mr-1"
            style={{cursor:'pointer'}} ></img>
            <img src="https://flagcdn.com/24x18/us.png" alt="USA Flag"
            onClick={()=>onChangeLanguage('en')}
            style={{cursor:'pointer'}}></img>
        </div>
    );
};

export default withTranslation()(LanguageSelector);