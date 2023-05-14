import React from "react";
import { FC } from "react";
import { SkillItemInterface } from "../interfaces";

const SkillItem: FC<SkillItemInterface> = ({title, description, icon}) => {
  return (
    <div className='skills-info__skill-item'>
      <div className='skills-info__skill-name-container'>
        <i className={`skills-info__skill-icon ${icon}`}/>
        <div className='skills-info__skill-name'>
          {title}
        </div>
      </div>
      <div className='skills-info__skill-description'>
        {description}
      </div>
    </div>
  );
};

export default SkillItem;