import { HeaderLinkItemInterface } from "../interfaces";

export const HeaderLinks: {
  pl: Array<HeaderLinkItemInterface>,
  en: Array<HeaderLinkItemInterface>,
} = {
  pl: [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'O mnie',
      link: '/o-mnie',
    },
    {
      title: 'Umiejętności',
      link: '/umiejetnosci',
    },
    {
      title: 'Projekty',
      link: '/projekty',
    },
    {
      title: 'Kontakt',
      link: '/kontakt',
    }
  ],
  en: [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About me',
      link: '/o-mnie',
    },
    {
      title: 'Skills',
      link: '/umiejetnosci',
    },
    {
      title: 'Projects',
      link: '/projekty',
    },
    {
      title: 'Contact',
      link: '/kontakt',
    },
  ]
}