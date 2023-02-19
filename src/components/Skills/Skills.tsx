import React, {FC} from 'react';
import s from './Skills.module.css'
import sContainer from '../../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {SkillsType} from '../../state/skill-reducer';

type SkillsPropsType = {
    skills: SkillsType[]
}

export const Skills: FC<SkillsPropsType> = ({skills}) => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    {skills.map(skill =>
                        <Skill
                            key={skill.id}
                            title={skill.title}
                            description={skill.description}
                        />
                    )}
                </div>

            </div>
        </div>
    );
};

