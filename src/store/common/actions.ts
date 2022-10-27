import {
    SET_BUILDINGS,
    SetBuildingsAction,
    AddBuildingAction,
    ADD_BUILDING,
    RemoveBuildingAction,
    REMOVE_BUILDING,
    EDIT_BUILDING,
    EditBuildingAction,
} from "./types";
import {Building} from "../../models";

export const setBuildings = (buildings: Building[]): SetBuildingsAction => ({
    type: SET_BUILDINGS,
    buildings
});

export const addBuilding = (building: Building): AddBuildingAction => ({
    type: ADD_BUILDING,
    building
});

export const removeBuilding = (id: string): RemoveBuildingAction => ({
    type: REMOVE_BUILDING,
    id
});

export const editBuilding = (building: Building): EditBuildingAction => ({
    type: EDIT_BUILDING,
    building
});
