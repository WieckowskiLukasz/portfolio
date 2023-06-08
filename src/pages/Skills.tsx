import React, { useContext } from 'react';
import background from '../images/backgrounds/default_bg.webp';
import SkillItem from '../components/SkillItem.tsx';
import { SkillsContent, BasicKnowledgeContent } from '../arrays/skills.ts';
import { AppContext } from '../AppContext.tsx';

export default function Skills() {
	const {lang} = useContext(AppContext);

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
						{ SkillsContent[lang].map(item=> 
							<SkillItem 
								title={item.title} 
								description={item.description} 
								icon={item.icon}
							/>
						)}
					</div>
					<div className='skills-info__header'>Znajomość podstaw</div>
					<div className='skills-info__skills-container'>
						{ BasicKnowledgeContent[lang].map(item=> 
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
