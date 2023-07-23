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
    header: 'About me',
    image: photography,
    socialMediaHeader: 'You can find me on',
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
      'My name is Łukasz Więckowski, and I am a front-end developer specializing in building web applications.',
      'I am a graduate of Paweł Włodkowic University in Płock, where I completed my engineering studies in <i>Computer Science</i> with a specialization in <i>Programming and Databases</i>.',
      'Since the early days of my studies, I have been focusing on web mastering, particularly on front-end technologies. My favorite technologies include React, Next.js, and TypeScript.',
      'In my work, I also utilize technologies such as Material UI, Redux, and Sass. In the past, I have worked on full-stack projects using PHP, MySQL, and JavaScript.',
    ],
    cvFile: cvPL,
    cvButton: 'Download CV', 
  },
};