import React from "react";
import { FC } from "react";
import { ProjectItemInterface} from "../interfaces";
import Ratio from 'react-ratio';

const ProjectItem: FC<ProjectItemInterface> = ({title, description, websiteTitle, websiteLink, gitHubTitle, gitHubLink, image, technologies}) => {
  return (
    <div className='projects__item'>
      <Ratio ratio={ 16 / 9 }>
        <div className='projects__image-container'>
          <a 
            href='http://gozdowo.info/'
            target='_blank'
            rel='noreferrer'
            className='projects__image' 
            style={{
            backgroundImage:`url(${image})`,
            }}
          >
          </a>
          <a 
            href={websiteLink}
            target='_blank'
            rel='noreferrer'
            className='projects__name'>
            {title}
          </a>
        </div>
      </Ratio>
      <div className='projects__info'>
        <div className='projects__description'>
          {description}
        </div>
        { (gitHubTitle && gitHubLink) &&
          <a 
            href={gitHubLink}
            target='_blank'
            rel='noreferrer'
            className='projects__link link'
          >
            <i className='lab la-github'/>
            {gitHubTitle}
          </a>
        }
        <a 
          className='projects__link link'
          href={websiteLink}
          target='_blank'
          rel='noreferrer'
        >
          <i className='las la-link'/>
          {websiteTitle}
        </a>
        <div className='projects__technologies'>
          { technologies.map(item=>
            <div 
              key={item.title} 
              className='projects__tech-icon'
            >
              <i className={item.icon}/>
              {item.title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;