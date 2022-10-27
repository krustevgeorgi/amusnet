import React, {FC, useState} from "react";
import './styles.scss';
import {Building} from '../../models'
import {ArrowRight, DeleteOutline, EditOutlined} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {editBuilding, removeBuilding} from "../../store/common/actions";
import {BuildingModal} from "../index";

interface Props {
    building: Building;
}

const TableRow: FC<Props> = ({building}) => {
    const {id, name, area, location, image} = building;
    const [editBuildingModal, setEditBuildingModal] = useState(false)
    const dispatch = useDispatch()


    const save = (building: Building) => {
        dispatch(editBuilding(building))
        setEditBuildingModal(false)
    }

    return (
        <div className='row'>
            <span className='cell'>{id}</span>
            <span className='cell'>{name}</span>
            <span className='cell'>{area}</span>
            <span className='cell'>{location}</span>
            <span className='cell img'><img alt='building' src={image} /></span>
            <span className='cell actions'>
                <button className='action' onClick={() => setEditBuildingModal(true)}>Edit <ArrowRight /></button>
                <button className='action' onClick={() => dispatch(removeBuilding(id))}>Delete <ArrowRight /></button>
            </span>

            <BuildingModal onOk={save} visible={editBuildingModal} onCancel={() => setEditBuildingModal(false)}
                           building={building}/>
        </div>
    )
}
export default TableRow;