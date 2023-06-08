export interface SkillItemInterface{
  title: string;
  description: string;
  icon: string;
};

export interface SocialMediaItemInterface{
  link: string;
  icon: string;
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

export interface AboutMeInterface{
  header: string,
  image: string,
  socialMediaHeader: string,
  socialMediaArray: Array<SocialMediaItemInterface>,
  description: Array<string>,
  cvFile: string,
  cvButton: string, 
};