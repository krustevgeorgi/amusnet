import React, {FC} from "react";
import './styles.scss';
import {Building} from "../../models";
import {TableHeader, TableRow} from "../index";

interface Props {
    buildings: Building[];
}

const Table: FC<Props> = ({buildings}) => {
    return (
        <div id='table'>
            <TableHeader columns={['id', 'Name', 'Area', 'Location', 'Image', 'Actions']}/>

            {buildings.map((building, i) => <TableRow key={i} building={building} />)}

            {buildings.length === 0 && <EmptyMessage />}
        </div>
    )
}

const EmptyMessage = () => (
    <span className='empty-message'>There is no buildings available, please add some!</span>
)

export default Table;