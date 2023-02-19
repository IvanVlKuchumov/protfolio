import React from 'react';
import s from'./Footer.module.css'
import sContainer from '../../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={s.footerBlocks}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2>Ivan Kuchumov</h2>
                <div className={s.footerItemContainer} >
                    <div className={s.footerItem}></div>
                    <div className={s.footerItem}></div>
                    <div className={s.footerItem}></div>
                    <div className={s.footerItem}></div>
                </div>
                <h3>© all rights reserved</h3>
            </div>
        </div>
    );
};

