import {ADD_BUILDING, CommonActions, CommonState, EDIT_BUILDING, REMOVE_BUILDING, SET_BUILDINGS} from "./types";
import {Reducer} from "redux";

const initialCommonState: CommonState = {
    buildings: [],
};

export const commonReducer: Reducer<CommonState, CommonActions> = (state = initialCommonState, action) => {
    switch (action.type) {
        case SET_BUILDINGS:
            return {...state, buildings: action.buildings};
        case ADD_BUILDING:
            return {...state, buildings: [...state.buildings, action.building]};
        case REMOVE_BUILDING:
            return {...state, buildings: state.buildings.filter(b => b.id !== action.id)};
        case EDIT_BUILDING:
            const buildings = [...state.buildings];
            for(let b in buildings){
                if(buildings[b].id === action.building.id){
                    buildings[b] = action.building
                }
            }

            return {...state, buildings}
        default:
            neverReached(action);
    }
    return state;
};

// tslint:disable-next-line:no-empty
const neverReached = (never: never) => {
};