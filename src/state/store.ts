import {combineReducers, legacy_createStore} from 'redux';
import {skillReducer} from './skill-reducer';

const rootReducer = combineReducers({skills: skillReducer})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store