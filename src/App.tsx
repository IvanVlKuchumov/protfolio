import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import { SkillsType } from './state/skill-reducer';

function App() {
    const skills = useSelector<AppRootStateType, SkillsType[]>(state => state.skills)


    return (
        <>
            <Header/>
            <Main/>
            <Skills skills={skills}/>
        </>
    );
}

export default App;
