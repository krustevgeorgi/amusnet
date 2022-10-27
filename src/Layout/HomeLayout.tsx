import React, {FC} from "react";
import "./styles.scss";
import Footer from './Footer';
import Body from './Body';
import {Home} from "../Views";

const HomeLayout: FC = () => {
    return (
        <div id='layout'>
            <Body><Home/></Body>

            <Footer/>
        </div>
    )
}

export default HomeLayout