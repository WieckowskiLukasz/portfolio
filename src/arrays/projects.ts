import { ProjectsContentInterface } from "../interfaces";
import gzgk from '../images/pages_content/gzgk.webp';
import weatherForecast from '../images/pages_content/weatherForecast.webp';
import portfolio from '../images/pages_content/portfolio.webp';
import memoryCardGame from '../images/pages_content/memoryCardGame.webp';

export const ProjectsContent: {pl: ProjectsContentInterface, en: ProjectsContentInterface} = {
  pl:{
    header: 'Projekty',
    projectsArray: [
      {
        title: 'GZGK w Gozdowie',
        description: 'Aplikacja internetowa dla Gminnego Zakładu Gospodarki Komunalnej w Gozdowie. Jest to pierwszy komercyjny projekt, został wykonany na początku studiów (01.2020r.), a następnie wykorzystany na potrzeby pracy inżynierskiej. Na potrzeby zakładu wykonany został od podstaw panel admistracyjny w języku PHP.',
        websiteTitle: 'gozdowo.info',
        websiteLink: 'http://gozdowo.info/',
        image: gzgk,
        technologies: [
          {
            title: 'HTML5',
            icon: 'lab la-html5',
          },
          {
            title: 'CSS3',
            icon: 'lab la-css3-alt',
          },
          {
            title: 'PHP',
            icon: 'lab la-php',
          },
          {
            title: 'MySQL',
            icon: 'icon icon-mysql',
          },
          {
            title: 'Bootstrap',
            icon: 'icon icon-bootstrap',
          },
          {
            title: 'JavaScript',
            icon: 'lab la-js-square',
          },
        ],
      },
      {
        title: 'Weather Forecast',
        description: 'Aplikacja pogodowa korzystająca z darmowego klucza API OpenWeatherMap. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami, React Context i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.',
        websiteTitle: 'wieckowskilukasz.github.io/weatherForecast',
        websiteLink: 'https://wieckowskilukasz.github.io/weatherForecast/',
        gitHubTitle: 'github.com/WieckowskiLukasz/weatherForecast',
        gitHubLink: 'https://github.com/WieckowskiLukasz/weatherForecast',
        image: weatherForecast,
        technologies: [
          {
            title: 'HTML5',
            icon: 'lab la-html5',
          },
          {
            title: 'React',
            icon: 'lab la-react',
          },
          {
            title: 'Typescript',
            icon: 'icon icon-typescript',
          },
          {
            title: 'Sass',
            icon: 'lab la-sass',
          },
        ],
      },
      {
        title: 'Memory Card Game',
        description: 'Aplikacja przedstawia wariację na temat popularnej gry "Memory". Gracz musi odnaleźć 12 par kart i ma na to 5 minut. Im mniej czasu mu to zajmie i im mniej ruchów przy tym wykona, tym więcej punktów otrzyma. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.',
        websiteTitle: 'wieckowskilukasz.github.io/MemoryCardGame',
        websiteLink: 'https://wieckowskilukasz.github.io/MemoryCardGame/',
        gitHubTitle: 'github.com/WieckowskiLukasz/MemoryCardGame',
        gitHubLink: 'https://github.com/WieckowskiLukasz/MemoryCardGame',
        image: memoryCardGame,
        technologies: [
          {
            title: 'HTML5',
            icon: 'lab la-html5',
          },
          {
            title: 'React',
            icon: 'lab la-react',
          },
          {
            title: 'Typescript',
            icon: 'icon icon-typescript',
          },
          {
            title: 'Sass',
            icon: 'lab la-sass',
          },
        ],
      },
      {
        title: 'Portfolio',
        description: 'Aplikacja wykonana na potrzeby portfolio. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.',
        websiteTitle: 'wieckowskilukasz.github.io/portfolio',
        websiteLink: 'https://wieckowskilukasz.github.io/portfolio/',
        gitHubTitle: 'github.com/WieckowskiLukasz/portfolio',
        gitHubLink: 'https://github.com/WieckowskiLukasz/portfolio',
        image: portfolio,
        technologies: [
          {
            title: 'HTML5',
            icon: 'lab la-html5',
          },
          {
            title: 'React',
            icon: 'lab la-react',
          },
          {
            title: 'Typescript',
            icon: 'icon icon-typescript',
          },
          {
            title: 'Sass',
            icon: 'lab la-sass',
          },
        ],
      },
    ],
  },
  en:{
    header: 'Projekty',
    projectsArray: [
      {
        title: 'GZGK w Gozdowie',
        description: 'Aplikacja internetowa dla Gminnego Zakładu Gospodarki Komunalnej w Gozdowie. Jest to pierwszy komercyjny projekt, został wykonany na początku studiów (01.2020r.), a następnie wykorzystany na potrzeby pracy inżynierskiej. Na potrzeby zakładu wykonany został od podstaw panel admistracyjny w języku PHP.',
        websiteTitle: 'gozdowo.info',
        websiteLink: 'http://gozdowo.info/',
        image: gzgk,
        technologies: [
          {
            title: 'HTML5',
            icon: 'lab la-html5',
          },
          {
            title: 'CSS3',
            icon: 'lab la-css3-alt',
          },
          {
            title: 'PHP',
            icon: 'lab la-php',
          },
          {
            title: 'MySQL',
            icon: 'icon icon-mysql',
          },
          {
            title: 'Bootstrap',
            icon: 'icon icon-bootstrap',
          },
          {
            title: 'JavaScript',
            icon: 'lab la-js-square',
          },
        ],
      },
      {
        title: 'Weather Forecast',
        description: 'Aplikacja pogodowa korzystająca z darmowego klucza API OpenWeatherMap. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami, React Context i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.',
        websiteTitle: 'wieckowskilukasz.github.io/weatherForecast',
        websiteLink: 'https://wieckowskilukasz.github.io/weatherForecast/',
        gitHubTitle: 'github.com/WieckowskiLukasz/weatherForecast',
        gitHubLink: 'https://github.com/WieckowskiLukasz/weatherForecast',
        image: weatherForecast,
        technologies: [
          {
            title: 'HTML5',
            icon: 'lab la-html5',
          },
          {
            title: 'React',
            icon: 'lab la-react',
          },
          {
            title: 'Typescript',
            icon: 'icon icon-typescript',
          },
          {
            title: 'Sass',
            icon: 'lab la-sass',
          },
        ],
      },
      {
        title: 'Memory Card Game',
        description: 'Aplikacja przedstawia wariację na temat popularnej gry "Memory". Gracz musi odnaleźć 12 par kart i ma na to 5 minut. Im mniej czasu mu to zajmie i im mniej ruchów przy tym wykona, tym więcej punktów otrzyma. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.',
        websiteTitle: 'wieckowskilukasz.github.io/MemoryCardGame',
        websiteLink: 'https://wieckowskilukasz.github.io/MemoryCardGame/',
        gitHubTitle: 'github.com/WieckowskiLukasz/MemoryCardGame',
        gitHubLink: 'https://github.com/WieckowskiLukasz/MemoryCardGame',
        image: memoryCardGame,
        technologies: [
          {
            title: 'HTML5',
            icon: 'lab la-html5',
          },
          {
            title: 'React',
            icon: 'lab la-react',
          },
          {
            title: 'Typescript',
            icon: 'icon icon-typescript',
          },
          {
            title: 'Sass',
            icon: 'lab la-sass',
          },
        ],
      },
      {
        title: 'Portfolio',
        description: 'Aplikacja wykonana na potrzeby portfolio. Projekt został wykonany w React. Zastosowano komponenty funkcyjne z hookami i React Router. Za oprawę graficzną odpowiada Saas. Aplikacja została uruchomiona na GitHub Pages.',
        websiteTitle: 'wieckowskilukasz.github.io/portfolio',
        websiteLink: 'https://wieckowskilukasz.github.io/portfolio/',
        gitHubTitle: 'github.com/WieckowskiLukasz/portfolio',
        gitHubLink: 'https://github.com/WieckowskiLukasz/portfolio',
        image: portfolio,
        technologies: [
          {
            title: 'HTML5',
            icon: 'lab la-html5',
          },
          {
            title: 'React',
            icon: 'lab la-react',
          },
          {
            title: 'Typescript',
            icon: 'icon icon-typescript',
          },
          {
            title: 'Sass',
            icon: 'lab la-sass',
          },
        ],
      },
    ],
  },
};