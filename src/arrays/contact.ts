export const ContactContent = {
  pl: {
    contact:{
      header: 'Kontakt',
      links: [
        {
          title: 'linkedin.com/in/WieckowskiLukasz',
          link: 'https://www.linkedin.com/in/WieckowskiLukasz',
          icon: 'lab la-linkedin-in',
          target: '_blank',
          rel: 'noreferer'
        },
        {
          title: 'lukasz.wieckowski.inf@gmail.com',
          link: 'mailto:lukasz.wieckowski.inf@gmail.com',
          icon: 'las la-at',
        },
        {
          title: '515-581-719',
          link: 'tel:+48515581719',
          icon: 'las la-phone',
        },
      ],
    },
    contactForm:{
      titleInput: {
        title: 'Tytuł',
        placeholder: 'Wprowadź tytuł...',
        error: '- tytuł musi zawierać od 5 do 250 znaków!',
      },
      emailInput: {
        title: 'Email',
        placeholder: 'Wprowadź adres email...',
        error: '- podany adres jest niepoprawny!',
      },
      messageInput: {
        title: 'Wiadomość',
        placeholder: 'Wprowadź treść wiadomości...',
        error: '- treść wiadomości musi zawierać od 5 do 1500 znaków!',
      },
      sendButton: 'Wyślij',
      successfulSend: ['Twoja wiadomości została wysłana.', 'Dziękujemy za kontakt!'],
      erroSend: ['Niestety nie udało się wysłać wiadomości.', 'Zapraszamy w innym terminie'],
    }
  }
}