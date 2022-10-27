import React, {FC} from "react";
import "./styles.scss";
import Header from './Header';
import Body from './Body';
import {Dashboard} from "../Views";
import {VerifiedUserRounded} from "@material-ui/icons";
import Footer from "./Footer";

const HomeLayout: FC = () => {
    return (
        <div id='layout'>
            <Header
                leftChildren={<span className='title'>Welcome</span>}
                rightChildren={<VerifiedUserRounded/>}
            />

            <Body><Dashboard /></Body>

            <Footer />
        </div>
    )
}

export default HomeLayout