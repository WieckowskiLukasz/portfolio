import { SkillItemInterface, SkillsGroupInterface } from "../interfaces";

export const SkillsContent: {pl: Array<SkillsGroupInterface>, en: Array<SkillsGroupInterface>} = {
  pl: [
    {
      title: 'Umiejętności',
      skills: [
        {
          title: 'HTML5',
          description: 'Biegła znajomość składni, stosowanie nazewnictwa klas w konwecji BEM.',
          icon: 'lab la-html5'
        },
        {
          title: 'CSS3',
          description: 'Biegła znajomość składni. Umiejętność tworzenia czytelnych, responsywnych i nowoczesnych interfejsów.',
          icon: 'lab la-css3-alt'
        },
        {
          title: 'Sass',
          description: 'Stosowanie zagnieżdżeń z nazewnictwem w konwecji BEM. Korzystanie ze zmiennych, domieszek i breakpointów Media Queries.',
          icon: 'lab la-sass'
        },
        {
          title: 'React',
          description: 'Biegła znajomość składni. Umiejętność pracy z komponentami klasowymi i funkcyjnymi z wykorzystanie hooków. Znajomość React Router i React Context.',
          icon: 'lab la-react'
        },
        {
          title: 'TypeScript',
          description: 'Umiejętność stosowania statycznego typowania. Znajomość typów, interfejsów i umiejętność zastosowania ich w projektach korzystających z React i Next.js.',
          icon: 'icon icon-typescript'
        },
        {
          title: 'JavaScript',
          description: 'Znajomość składni ES6+. Umiejętność tworzenia skryptów zorientowanych obiektowo i korzystania z Rest API.',
          icon: 'lab la-js-square'
        },
        {
          title: 'Next.js',
          description: 'Biegła znajomość frameworka, budowanie aplikacji Server-Side Rendering, umiejętność korzystania z routingu Next.js.',
          icon: 'icon icon-next-dot-js'
        },
        {
          title: 'Material UI',
          description: 'Umiejętność korzystania z zasobów biblioteki, budowanie responsywnych interfejsów, stylowanie i modyfikowanie komponentów MUI.',
          icon: 'icon icon-material-ui-1'
        },
        {
          title: 'Redux',
          description: 'Zarządzanie stanem aplikacji React i Next.js, tworzenie store i akcji.',
          icon: 'icon icon-redux'
        },
        {
          title: 'RWD',
          description: 'Umiejętność tworzenia responsywnych interfejsów z wykorzystaniem Flexboxa, CSS Grid, Media queries lub Bootstrap.',
          icon: 'las la-laptop-code'
        },
        {
          title: 'GIT',
          description: 'Umiejętność tworzenia i aktualizowania repozytoriów. Praca ze zdalnym repozytorium na GitHub. ',
          icon: 'lab la-git'
        },
        {
          title: 'VSC',
          description: 'Znajomość środowiska Visual Studio Code, praca z Node Package Manager i repozytoriami GIT.',
          icon: 'icon icon-visualstudiocode'
        },
        {
          title: 'Figma',
          description: 'Umiejętność korzystania z projektów aplikacji wykonanych w Figmie, eksportowanie plików graficznych.',
          icon: 'icon icon-figma'
        },
        {
          title: 'ClickUp',
          description: 'Umiejętność tworzenia rozbudowanych tasków, planowania zadań i estymowania czasu.',
          icon: 'icon-clickup-seeklogocom'
        },
      ],
    },
    {
      title: 'Znajomość podstaw',
      skills: [
        {
          title: 'PHP',
          description: 'Umiejętność obsługi i walidacji formularzy, korzystania z metod POST, GET i sesji. Praca z bazą danych MySQL.',
          icon: 'lab la-php'
        },
        {
          title: 'MySQL',
          description: 'Znajomość podstaw i środowiska phpMyAdmin. Umiejętność tworzenia i modyfikowania prostych baz danych.',
          icon: 'icon icon-mysql'
        },
        {
          title: 'Bootstrap',
          description: 'Umiejętność korzystania z zasobów biblioteki i tworzenia responsywnego interfejsu.',
          icon: 'icon icon-bootstrap'
        },
      ],
    }
  ],

  
  en: [
    {
      title: 'Skills',
      skills: [
        {
          title: 'HTML5',
          description: 'Fluent knowledge of syntax, application of class naming in BEM convention.',
          icon: 'lab la-html5'
        },
        {
          title: 'CSS3',
          description: 'Fluent knowledge of syntax. Ability to create clear, responsive, and modern interfaces',
          icon: 'lab la-css3-alt'
        },
        {
          title: 'Sass',
          description: 'Applying nested naming with BEM convention. Utilizing variables, mixins, and Media Queries breakpoints.',
          icon: 'lab la-sass'
        },
        {
          title: 'React',
          description: 'Fluent knowledge of syntax. Proficiency in working with class and functional components using hooks. Familiarity with React Router and React Context.',
          icon: 'lab la-react'
        },
        {
          title: 'TypeScript',
          description: 'Ability to apply static typing. Knowledge of types, interfaces, and the ability to use them in projects using React and Next.js.',
          icon: 'icon icon-typescript'
        },
        {
          title: 'JavaScript',
          description: 'Proficiency in ES6+ syntax. Ability to create object-oriented scripts and work with Rest APIs.',
          icon: 'lab la-js-square'
        },
        {
          title: 'Next.js',
          description: 'Fluent knowledge of the framework, building Server-Side Rendering applications, and the ability to use Next.js routing.',
          icon: 'icon icon-next-dot-js'
        },
        {
          title: 'Material UI',
          description: 'Ability to utilize library resources, build responsive interfaces, and style and customize MUI components.',
          icon: 'icon icon-material-ui-1'
        },
        {
          title: 'Redux',
          description: 'Managing state in React and Next.js applications, creating stores, and actions.',
          icon: 'icon icon-redux'
        },
        {
          title: 'RWD',
          description: 'Ability to create responsive interfaces using Flexbox, CSS Grid, Media queries, or Bootstrap.',
          icon: 'las la-laptop-code'
        },
        {
          title: 'GIT',
          description: 'Ability to create and update repositories. Working with remote repositories on GitHub.',
          icon: 'lab la-git'
        },
        {
          title: 'VSC',
          description: 'Proficiency in Visual Studio Code environment, working with Node Package Manager, and GIT repositories.',
          icon: 'icon icon-visualstudiocode'
        },
        {
          title: 'Figma',
          description: 'Ability to work with application designs created in Figma, exporting graphic files.',
          icon: 'icon icon-figma'
        },
        {
          title: 'ClickUp',
          description: 'Ability to create complex tasks, task planning, and time estimation.',
          icon: 'icon-clickup-seeklogocom'
        },
      ],
    },
    {
      title: 'Basic knowledge',
      skills: [
        {
          title: 'PHP',
          description: 'Ability to handle and validate forms, use POST and GET methods, and session handling. Experience with MySQL database.',
          icon: 'lab la-php'
        },
        {
          title: 'MySQL',
          description: 'Knowledge of the basics and environment of phpMyAdmin. Ability to create and modify simple databases.',
          icon: 'icon icon-mysql'
        },
        {
          title: 'Bootstrap',
          description: 'Ability to utilize library resources and create a responsive interface.',
          icon: 'icon icon-bootstrap'
        },
      ]
    },
  ]
};
