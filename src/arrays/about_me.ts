import photography from '../images/photography/about.jpg';
import cvPL from '../download/Łukasz_Więckowski_CV.pdf';
import { AboutMeInterface } from '../interfaces';

export const AboutMeContent: {pl: AboutMeInterface, en: AboutMeInterface} = {
  pl: {
    header: 'O mnie',
    image: photography,
    socialMediaHeader: 'Znajdziesz mnie na',
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
    ],
    description: [
      'Nazywam się Łukasz Więckowski, jestem front-end developerem i specjalizuję się w wykonywaniu aplikacji internetowych.',
      'Jestem abolwentem Szkoły Wyższej im. Pawła Włodkowica w Płocku, ukończyłem studia inżynierskie na kierunku <i>Informatyka</i> ze specjalnością <i>Programowanie i bazy danych</i>.',
      'Praktycznie od początku studiów moją uwagę skupiłem na webmasteringu, a szczególnie na technologiach front-endowych. Moje ulubione technologie to React, Next.js i TypeScript.',
      'W swojej pracy korzystam także z takich technologii jak Material UI, Redux czy Sass. W przeszłości tworzyłem projekty w podejściu full-stack korzystając z PHP, MySQL i JavaScript.',
    ],
    cvFile: cvPL,
    cvButton: 'Pobierz CV', 
  },
  en: {
    header: 'O mnie',
    image: photography,
    socialMediaHeader: 'Znajdziesz mnie na',
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
    ],
    description: [
      'Nazywam się Łukasz Więckowski, jestem front-end developerem i specjalizuję się w wykonywaniu aplikacji internetowych.',
      'Jestem abolwentem Szkoły Wyższej im. Pawła Włodkowica w Płocku, ukończyłem studia inżynierskie na kierunku <i>Informatyka</i> ze specjalnością <i>Programowanie i bazy danych</i>.',
      'Praktycznie od początku studiów moją uwagę skupiłem na webmasteringu, a szczególnie na technologiach front-endowych. Moje ulubione technologie to React, Next.js i TypeScript.',
      'W swojej pracy korzystam także z takich technologii jak Material UI, Redux czy Sass. W przeszłości tworzyłem projekty w podejściu full-stack korzystając z PHP, MySQL i JavaScript.',
    ],
    cvFile: cvPL,
    cvButton: 'Pobierz CV', 
  },
};