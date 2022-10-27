import React, {FC, useEffect, useState} from "react";
import './styles.scss';
import {Building} from "../../models";
import {useSelector} from "react-redux";
import {State} from "../../store";

interface Props {
    onOk: (building: Building) => void;
    onCancel?: () => void;
    visible: boolean;
    building?: Building;
}

const BuildingModal: FC<Props> = ({onOk, onCancel, building, visible}) => {
    const {buildings} = useSelector((state: State) => state.common)

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg')
    const [invalidId, setInvalidId] = useState(false)
    const [invalidName, setInvalidName] = useState(false)
    const [invalidArea, setInvalidArea] = useState(false)

    useEffect(() => {
        if(!building) return;
        setId(building.id)
        setName(building.name)
        setArea(building.area)
        setLocation(building.location)
        setImage(building.image)
    }, [building])

    const idExists = () => buildings.some(b => b.id === id)

    const save = () => {
        if ((idExists() || id === '') && !building) return setInvalidId(true)
        if (name === '' || name.length < 3) return setInvalidName(true)
        if (area === '') return setInvalidArea(true)
        onOk({id, name, area, location, image})
    }

    if (!visible) return null;

    return (
        <div id='modal'>
            <div className='mask'/>

            <div className='content'>

                <span className='title'>{building ? 'Edit building' : 'Add new building'}</span>

                <input className={invalidId ? 'invalid' : ''} placeholder='Enter building id' value={id} disabled={!!building}
                       onChange={e => {
                           setInvalidId(false)
                           setId(e.target.value)
                       }}/>

                <input className={invalidName ? 'invalid' : ''} placeholder='Enter building name' value={name}
                       onChange={e => {
                           setInvalidName(false)
                           setName(e.target.value)
                       }}/>

                <input className={invalidArea ? 'invalid' : ''} placeholder='Enter building area' value={area}
                       onChange={e => {
                           setInvalidArea(false)
                           setArea(e.target.value)
                       }}/>

                <input placeholder='Enter building location' value={location}
                       onChange={e => setLocation(e.target.value)}/>
                <input placeholder='Enter image link' value={image} onChange={e => setImage(e.target.value)}/>

                <div className='footer'>
                    <button onClick={save}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>

                {invalidId && <InvalidMessage message='Missing or existing id!'/>}
                {invalidName && <InvalidMessage message='Name should me longer than 3 characters.'/>}
                {invalidArea && <InvalidMessage message='Please enter area!'/>}
            </div>

        </div>
    )
}

const InvalidMessage = ({message}: { message: string }) => (
    <span className='invalid-message'>{message}</span>
)

export default BuildingModal;