import React, {FC, useState} from "react";
import './styles.scss';
import {BuildingModal, Table} from "../../components";
import {State} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {AddOutlined} from "@material-ui/icons";
import {Building} from "../../models";
import {addBuilding} from "../../store/common/actions";

const Dashboard: FC = () => {
    const {buildings} = useSelector((state: State) => state.common)
    const [addNewBuildingModal, setAddNewBuildingModal] = useState(false)
    const dispatch = useDispatch()

    const save = (building: Building) => {
        dispatch(addBuilding(building))
        setAddNewBuildingModal(false)
    }

    return (
        <div id='dashboard'>
            <div className='content-wrapper'>
                <div className='top-bar'>
                    <h1>Buildings</h1>
                    <button onClick={() => setAddNewBuildingModal(true)}>Add new <AddOutlined/></button>
                </div>
                <Table buildings={buildings}/>
            </div>

            <BuildingModal visible={addNewBuildingModal} onOk={save} onCancel={() => setAddNewBuildingModal(false)}/>
        </div>
    )
}

export default Dashboard;