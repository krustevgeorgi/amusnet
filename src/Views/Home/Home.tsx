import React, {FC} from "react";
import './styles.scss';
import {IntroBox} from '../../components'
import {useNavigate} from "react-router-dom";

const Home: FC = () => {
    const navigate = useNavigate();
    return (
        <div id='home'>
            <div id='hero'>
                <div id='connect-section'>
                    <h2>The easy way to manage your</h2>
                    <h1 onClick={() => navigate('/dashboard')}>Buildings</h1>

                    <IntroBox/>
                </div>
            </div>
        </div>
    )
}

export default Home;