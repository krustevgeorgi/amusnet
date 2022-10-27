import React, {FC, ReactNode} from "react";
import './styles.scss'

import {useNavigate} from "react-router-dom";

interface Props {
    leftChildren?: ReactNode;
    rightChildren?: ReactNode;
}

const Header:FC<Props> = ({leftChildren, rightChildren}) => {
    const navigate = useNavigate()

    return (
        <div id='header'>
            <div className='content'>
                <div className='left'>
                    {leftChildren}
                </div>
                <div className='right'>
                    {rightChildren}
                </div>
            </div>
        </div>
    )
}

export default Header;