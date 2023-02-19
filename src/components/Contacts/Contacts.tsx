import React from 'react';
import s from './Conacts.module.css'
import sContainer from '../../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2>Contacts</h2>
                <form action="" className={s.contacts}>
                    <input className={s.input} type="text"/>
                    <input className={s.input} type="text"/>
                    <textarea className={s.textarea} />

                </form>

            </div>

        </div>
    );
};