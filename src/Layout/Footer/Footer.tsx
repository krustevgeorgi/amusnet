import React, {FC} from "react";
import './styles.scss'

import logo from '../../assets/brand/logo.svg'
import {useNavigate} from "react-router-dom";

const Footer:FC = () => {
    const navigate = useNavigate()

    return (
        <div id='footer'>
            <div className='content'>
                <div className='left'>
                    <span onClick={() => navigate('/')}>Home</span>
                    <span onClick={() => navigate('/dashboard')}>Dashboard</span>
                </div>
                <div className='right'>
                    <img onClick={() => navigate('/')} alt='brand-logo' src={logo}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;