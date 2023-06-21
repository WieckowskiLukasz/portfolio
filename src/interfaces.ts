export interface SkillItemInterface{
  title: string,
  description: string,
  icon: string,
};

export interface SocialMediaItemInterface{
  link: string,
  icon?: string,
  title?: string,
};

export interface ProjectItemInterface{
  title: string,
  description: string,
  websiteTitle: string,
  websiteLink: string,
  gitHubTitle?: string,
  gitHubLink?: string,
  image: string,
  technologies: Array<{
    title: string,
    icon: string,
  }>,
};

export interface ProjectsContentInterface{
  header: string,
  projectsArray: Array<ProjectItemInterface>,
}

export interface AboutMeInterface{
  header: string,
  image: string,
  socialMediaHeader: string,
  socialMediaArray: Array<SocialMediaItemInterface>,
  description: Array<string>,
  cvFile: string,
  cvButton: string, 
};

export interface ContactContentInterface{
  contact:{
    header: string,
    links: Array<{
      title: string,
      link: string,
      icon: string,
    }>,
  },
  contactForm:{
    header: string,
    titleInput: {
      title: string,
      placeholder: string,
      error: string,
    },
    emailInput: {
      title: string,
      placeholder: string,
      error: string,
    },
    messageInput: {
      title: string,
      placeholder: string,
      error: string,
    },
    sendButton: string,
    successfulSend: Array<string>,
    erroSend: Array<string>,
  },
};

export interface HomePageContentInterface{
  name: string,
  surname: string,
  viewMore: string,
  description: string,
  socialMediaArray: Array<SocialMediaItemInterface>,
};