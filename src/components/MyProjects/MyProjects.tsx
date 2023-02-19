import React, {FC} from 'react';
import s from './MyProjects.module.css'
import sContainer from '../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {SkillsType} from '../../state/skill-reducer';

type MyProjectsPropsType = {
    myProjects: SkillsType[]
}

export const MyProjects: FC<MyProjectsPropsType> = ({myProjects}) => {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${sContainer.container} ${s.myProjectsContainer}`}>
                <h2 className={s.title}>My Project</h2>
                <div className={s.projects}>
                    {myProjects.map(project =>
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

