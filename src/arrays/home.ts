import { ContactContentInterface, HomePageContentInterface } from "../interfaces.ts";
import cvPL from '../download/Łukasz_Więckowski_CV.pdf';
import cvEN from '../download/Łukasz_Więckowski_CV.pdf';

export const HomePageContent: {pl: HomePageContentInterface, en: HomePageContentInterface} = {
  pl: {
    name: 'Łukasz',
    surname: 'Więckowski',
    viewMore: 'Więcej o mnie',
    description: 'Jestem Front-end Developerem i specjalizuję się w budowaniu nowoczesnych aplikacji internetowych korzystając z React, Next.js oraz TypeScript.',
    socialMediaArray: [
      { 
        link: 'https://www.linkedin.com/in/WieckowskiLukasz' ,
        icon: 'lab la-linkedin-in',
      },
      { 
        link: 'https://www.facebook.com/IWieckowskiLukasz',
        icon: 'lab la-facebook-f',
      },
      { 
        link: 'https://github.com/WieckowskiLukasz' ,
        icon: 'lab la-github',
      },
      { 
        link: cvPL,
        title: 'CV',
      },
    ],
  },
  en: {
    name: 'Łukasz',
    surname: 'Więckowski',
    viewMore: 'Więcej o mnie',
    description: 'Jestem Front-end Developerem i specjalizuję się w budowaniu nowoczesnych aplikacji internetowych korzystając z React, Next.js oraz TypeScript.',
    socialMediaArray: [
      { 
        link: 'https://www.linkedin.com/in/WieckowskiLukasz' ,
        icon: 'lab la-linkedin-in',
      },
      { 
        link: 'https://www.facebook.com/IWieckowskiLukasz',
        icon: 'lab la-facebook-f',
      },
      { 
        link: 'https://github.com/WieckowskiLukasz' ,
        icon: 'lab la-github',
      },
      { 
        link: cvEN,
        title: 'CV',
      },
    ],
  },
};