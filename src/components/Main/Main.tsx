import React from 'react';
import s from './Main.module.css'
import sContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi there</span>
                    <p>My name is</p>
                    <h1>Ivan Kuchumov</h1>
                    <p> Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};