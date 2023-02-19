import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import { SkillsType } from './state/skill-reducer';
import {MyProjects} from './components/MyProjects/MyProjects';
import {MyProjectsType} from './state/my-projects-reducer';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';

function App() {
    const skills = useSelector<AppRootStateType, SkillsType[]>(state => state.skills)
    const myProjects = useSelector<AppRootStateType, MyProjectsType[]>(state => state.myProjects)


    return (
        <>
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <MyProjects myProjects={myProjects}/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
