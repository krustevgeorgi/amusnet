import React, {FC, ReactNode} from "react";
import './styles.scss'

interface Props {
    children?: ReactNode;
}

const Body: FC<Props> = ({children}) => {
    return (
        <div id='body'>
            {children}
        </div>
    )
}

export default Body;