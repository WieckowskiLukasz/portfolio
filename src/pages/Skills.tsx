import React, { useContext } from 'react';
import background from '../images/backgrounds/default_bg.webp';
import SkillItem from '../components/SkillItem.tsx';
import { SkillsContent } from '../arrays/skills.ts';
import { AppContext } from '../AppContext.tsx';
import { SkillsGroupInterface } from '../interfaces';

export default function Skills() {
	const {lang} = useContext(AppContext);
	const content: Array<SkillsGroupInterface> = SkillsContent[lang];

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
					{	content.map(item =>
						<>
							<div className='skills-info__header'>
								{item.title}
							</div>
							<div className='skills-info__skills-container'>
								{ item.skills.map(element=> 
									<SkillItem 
										title={element.title} 
										description={element.description} 
										icon={element.icon}
									/>
								)}
							</div>
						</>
					)}
				</div>
			</div>
    </>
  );
};
