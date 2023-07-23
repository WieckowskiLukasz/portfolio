import React, { useContext } from 'react';
import background from '../images/backgrounds/default_bg.webp';
import { AppContext } from '../AppContext.tsx';
import { ProjectsContent } from '../arrays/projects.ts';
import ProjectItem from '../components/ProjectItem.tsx';
import { ProjectsContentInterface } from '../interfaces';

export default function Projects() {
  const {lang} = useContext(AppContext);
	const content: ProjectsContentInterface = ProjectsContent[lang];

  return (
    <div className='content'>
      <div 
        className='background-image'
        style={{
          backgroundImage:`url(${background})`,
          filter: `brightness(40%)`,
        }}>
      </div>
      <div className='projects'>
        <div className='projects__header'>
          {content.header}
        </div>
        <div className='projects__container'>
          { content.projectsArray.map(item=>
            <ProjectItem
              key={item.title} 
              title={item.title} 
              description={item.description} 
              websiteTitle={item.websiteTitle} 
              websiteLink={item.websiteLink} 
              gitHubTitle={item.gitHubTitle} 
              gitHubLink={item.gitHubLink} 
              image={item.image} 
              technologies={item.technologies}
            />
          )}
        </div>
      </div>
    </div>
  );
};
