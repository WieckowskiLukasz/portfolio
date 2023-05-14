import React from 'react';
import background from '../images/backgrounds/default_bg.webp';
import SkillItem from '../components/SkillItem.tsx';
import { SkillsArray, BasicKnowledgeArray } from '../arrays/skills.ts';

export default function Skills() {
  return (
    <>
			<div className='content'>
				<div 
					className='background-image'
					style={{
						backgroundImage:`url(${background})`,
						filter: `brightness(40%)`,
					}}>
				</div>
				<div className='skills-info'>
					<div className='skills-info__header'>Umiejętności</div>
					<div className='skills-info__skills-container'>
						{ SkillsArray.map(item=> 
							<SkillItem 
								title={item.title} 
								description={item.description} 
								icon={item.icon}
							/>
						)}
					</div>
					<div className='skills-info__header'>Znajomość podstaw</div>
					<div className='skills-info__skills-container'>
						{ BasicKnowledgeArray.map(item=> 
							<SkillItem 
								title={item.title} 
								description={item.description} 
								icon={item.icon}
							/>
						)}
					</div>
				</div>
			</div>
    </>
  );
};
