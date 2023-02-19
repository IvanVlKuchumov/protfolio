import React, {FC} from 'react';
import s from './Project.module.css'

export type ProjectType = {
    title: string
    description: string
}


export const Project: FC<ProjectType> = ({title, description}) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <div className={s.projectLink}>
                    Watch
                </div>
            </div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

