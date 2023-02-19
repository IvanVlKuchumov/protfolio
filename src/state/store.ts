import {combineReducers, legacy_createStore} from 'redux';
import {skillReducer} from './skill-reducer';
import {myProjectReducer} from './my-projects-reducer';


const rootReducer = combineReducers({
    skills: skillReducer,
    myProjects: myProjectReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store