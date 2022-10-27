import {Action} from "redux";
import {Building} from "../../models";

export interface CommonState {
    readonly buildings: Building[];
}

export const SET_BUILDINGS = "SET_BUILDINGS";
export const ADD_BUILDING = "ADD_BUILDING";
export const REMOVE_BUILDING = "REMOVE_BUILDING";
export const EDIT_BUILDING = "EDIT_BUILDING";

export interface SetBuildingsAction extends Action<typeof SET_BUILDINGS> {
    buildings: Building[];
}

export interface AddBuildingAction extends Action<typeof ADD_BUILDING> {
    building: Building;
}

export interface RemoveBuildingAction extends Action<typeof REMOVE_BUILDING> {
    id: string;
}

export interface EditBuildingAction extends Action<typeof EDIT_BUILDING> {
    building: Building;
}

export type CommonActions = | SetBuildingsAction | AddBuildingAction | RemoveBuildingAction | EditBuildingAction