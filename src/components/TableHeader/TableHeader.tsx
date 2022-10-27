import React, {FC} from "react";
import './styles.scss';

interface Props {
    columns: string[];
}

const TableHeader: FC<Props> = ({columns}) => {

    return (
        <div id='table-header'>
            {columns.map((value, i) => <span key={i} className='cell'>{value}</span>)}
        </div>
    )
}
export default TableHeader;