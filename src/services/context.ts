import { createContext } from "react";
import { IStory } from './interface';

export const ACTIONS = {
    UPDATE_STORIES: "updateStories",
    UPDATE_CURRENT_STORY: "updateCurrentStory",
    UPDATE_CATEGORY_LIST: "updateCategoryList"
}

export class InitialAppState {
    currentStory: IStory | null = null;
    storiesList: {[key: string]: IStory} = {};
    categoryList: Set<string> = new Set();
}

export interface ActionType {
    type: string;
    data: any;
}


export const AppContext: any = createContext({});

export function AppReducer(state: any, action: any) {
    const { type, data } = action;
    switch (type) {
        case ACTIONS.UPDATE_CURRENT_STORY:
            return { ...state, currentStory: data };
        case ACTIONS.UPDATE_STORIES:
            return { ...state, storiesList: data };
        case ACTIONS.UPDATE_CATEGORY_LIST:
            return { ...state, categoryList: data };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}