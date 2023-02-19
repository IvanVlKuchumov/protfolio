import React, {FC} from 'react';
import s from './Skill.module.css'

export type SkillType = {
    title: string
    description: string
}


export const Project: FC<SkillType> = ({title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

