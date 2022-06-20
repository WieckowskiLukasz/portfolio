
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import home from '../images/backgrounds/skills.jpg';
import validator from 'validator';

export default function Contact(){
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [titleValid, setTitleValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);
  const [formConfirmed, setFormConfirmed] = useState(false);

  const form = useRef();

  const handleTitle = (e) => {
    if(e.target.value.length < 5 || e.target.value.length >= 250) setTitleValid(false);
    else setTitleValid(true);
    setTitle(e.target.value);
  };
  const handleEmail = (e) => {
    if(!validator.isEmail(e.target.value)) setEmailValid(false);
    else setEmailValid(true);
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    if(e.target.value.length < 5 || e.target.value.length >= 1500) setMessageValid(false);
    else setMessageValid(true);
    setMessage(e.target.value);
  };
  
  const handleForm = (e) =>{
    e.preventDefault();
    setFormConfirmed(true);
    if(titleValid && emailValid && messageValid) alert("Mail wysłany");
  }

  const sendEmail = () => {
    emailjs.sendForm('service_jqq82i6', 'template_p5k3mkn', form.current, 'CL2Yl5rY5WmzgXZiK')
      .then((result) => {
        setTitle('');
        setEmail('');
        setMessage('');
        setTitleValid(false);
        setEmailValid(false);
        setMessageValid(false);
        setFormConfirmed(false);
      }, (error) => {
          console.log(error.text);
      });
  };

  const titleLabel = (formConfirmed && !titleValid) ?
  'contact__form-label contact__form-label--error'
  : 'contact__form-label';
  const emailLabel = (formConfirmed && !emailValid) ?
    'contact__form-label contact__form-label--error'
    : 'contact__form-label';
  const messageLabel = (formConfirmed && !messageValid) ?
    'contact__form-label contact__form-label--error'
    : 'contact__form-label';


  const titleInput = (formConfirmed && !titleValid) ?
    'contact__form-input contact__form-input--error'
    : (formConfirmed && titleValid) ?
      'contact__form-input contact__form-input--validated'
      :'contact__form-input';
  const emailInput = (formConfirmed && !emailValid) ?
    'contact__form-input contact__form-input--error'
    : (formConfirmed && emailValid) ?
      'contact__form-input contact__form-input--validated'
      :'contact__form-input';
  const messageInput = (formConfirmed && !messageValid) ?
    'contact__form-input contact__form-input--error'
    : (formConfirmed && messageValid) ?
      'contact__form-input contact__form-input--validated'
      :'contact__form-input';
  const titleError = (formConfirmed && !titleValid) ? 
    '- tytuł musi zawierać od 5 do 250 znaków!'
    : null;
  const emailError = (formConfirmed && !emailValid) ? 
    ' - podany adres jest niepoprawny!'
    : null;
  const messageError = (formConfirmed && !messageValid) ? 
    '- treść wiadomości musi zawierać od 5 do 1500 znaków!'
    : null;

  return (
    <div className='content'>
      <div 
        className='background-image'
        style={{
          backgroundImage:`url(${home})`,
          filter: `brightness(30%)`,
        }}>
			</div>
      <div className='contact'>
        <div className='contact__header'>Kontakt</div>
        <div className='contact__info'>
          <a href='https://www.linkedin.com/in/WieckowskiLukasz' target='_blank'><i class="lab la-linkedin-in"></i>linkedin.com/in/WieckowskiLukasz</a>
          <a href='mailto:lukasz.wieckowski.inf@gmail.com'><i class="las la-at"></i>lukasz.wieckowski.inf@gmail.com</a>
          <a href="tel:+48515581719"><i class="las la-phone"></i>515-581-719</a>
        </div>
        <div className='contact__header'>Formularz kontaktowy</div>
          <form className='contact__form' noValidate ref={form} onSubmit={handleForm}>
            <label className={titleLabel}>
              Tytuł {titleError}
            </label>
            <input
              className={titleInput}
              type='text' 
              name='user_name' 
              placeholder='Wprowadź tyłuł...' 
              value={title} 
              onChange={handleTitle}
            />
            <label className={emailLabel}>
              Email {emailError}
            </label>
            <input 
              className={emailInput}
              type='email' 
              name='user_email'
              placeholder='Wprowadź adres email...'
              value={email} 
              onChange={handleEmail}
            />
            <label className={messageLabel}>
              Wiadomość {messageError}
            </label>
            <textarea
              className={messageInput}
              name='message' 
              placeholder='Wprowadź treść wiadomości...' 
              value={message} 
              onChange={handleMessage}
            />
            <input 
              className='contact__form-submit' 
              type='submit' 
              value='Wyślij'
            />
          </form>
      </div>
    </div>
  );
};