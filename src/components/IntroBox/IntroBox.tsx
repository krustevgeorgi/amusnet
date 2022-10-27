import React, {FC, useState} from "react";
import './styles.scss';
import {Info, ChevronRight} from "@material-ui/icons";
import {ClipLoader} from "react-spinners";

import {AppButton} from '../'
import {useNavigate} from "react-router-dom";

const IntroBox: FC = () => {
    const [redirecting, setRedirecting] = useState(false)
    const navigate = useNavigate()

    const goToDashboard = () => {
        setRedirecting(true)
        setTimeout(() => {
            setRedirecting(false)
            navigate('/dashboard')
        }, 2500)
    }

    return (
        <div id='intro-box'>
            {/* icon */}
            <Info/>

            {/* title */}
            <p className='title'>Welcome to our buildings explorer</p>

            {/* text */}
            <p className='instructions'>You can manage all your buildings by navigating to our dashboard.</p>

            {/* call to action*/}
            <AppButton loading={redirecting} onClick={goToDashboard}>
                {redirecting ? <>Redirecting &nbsp;<ClipLoader size={12}/></> : <>Go to dashboard  &nbsp;<ChevronRight/></>}
            </AppButton>

        </div>
    )
}

export default IntroBox;