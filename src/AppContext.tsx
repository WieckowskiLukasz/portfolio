import { createContext } from 'react';
import cookies from 'js-cookies';;

const cookieLang = cookies.getItem('lang');

const defaultLang = 'pl';

const setLang = cookieLang ? cookieLang : defaultLang;

export const defaultObject = {
  lang: setLang,
  setLanguage: function(lang: string){}
};

export const AppContext = createContext(defaultObject);