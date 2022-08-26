
import React, { useRef, useState, SyntheticEvent } from 'react';
import emailjs from '@emailjs/browser';
import background from '../images/backgrounds/default_bg.webp';
import validator from 'validator';

export default function Contact(){
  const [title, setTitle] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [titleValid, setTitleValid] = useState<boolean>(false);
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [messageValid, setMessageValid] = useState<boolean>(false);
  const [formConfirmed, setFormConfirmed] = useState<boolean>(false);
  const [successfulSend, setSuccessfulSend] = useState<boolean>();
  const [popUpActive, setPopUpActive] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleTitle = (e: SyntheticEvent) => {
    if((e.target as HTMLInputElement).value.length < 5 || (e.target as HTMLInputElement).value.length >= 250) setTitleValid(false);
    else setTitleValid(true);
    setTitle((e.target as HTMLInputElement).value);
  };
  const handleEmail = (e: SyntheticEvent) => {
    if(!validator.isEmail((e.target as HTMLInputElement).value)) setEmailValid(false);
    else setEmailValid(true);
    setEmail((e.target as HTMLInputElement).value);
  };
  const handleMessage = (e: SyntheticEvent) => {
    if((e.target as HTMLInputElement).value.length < 5 || (e.target as HTMLInputElement).value.length >= 1500) setMessageValid(false);
    else setMessageValid(true);
    setMessage((e.target as HTMLInputElement).value);
  };
  const handleForm = (e: SyntheticEvent) =>{
    e.preventDefault();
    setFormConfirmed(true);
    if(titleValid && emailValid && messageValid) sendEmail();
  };
  const handlePopUpButton = () =>{
    setPopUpActive(false);
  }

  const sendEmail = () => {
    let form;
    if (formRef.current !== null) form = formRef.current;
    
  emailjs.sendForm('service_jqq82i6', 'template_p5k3mkn', form, 'CL2Yl5rY5WmzgXZiK')
    .then((result) => {
      setTitle('');
      setEmail('');
      setMessage('');
      setTitleValid(false);
      setEmailValid(false);
      setMessageValid(false);
      setFormConfirmed(false);
      setPopUpActive(true);
      setSuccessfulSend(true);
    }, (error) => {
      console.log(error.text);
      setPopUpActive(true);
      setSuccessfulSend(false);
    });
  };

  const PopUpInfo = () =>{
    const successfulSendText = <><p>Twoja wiadomości została wysłana.</p><p>Dziękujemy za kontakt!</p></>;
    const errorSendText = <><p>Niestety nie udało się wysłać wiadomości.</p><p>Zapraszamy w innym terminie</p></>;

  const textValue = successfulSend ? 
    successfulSendText
    : errorSendText;

  return(
    <div className='contact-pop-up'>
      <div className='contact-pop-up__content'>
        <div className='contact-pop-up__text'>
        {textValue}
        </div>
        <button onClick={()=> handlePopUpButton()} className='contact-pop-up__button btn'>OK</button>
      </div>
    </div>
    );
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
  const popUpWindow = popUpActive ?
    <PopUpInfo/>
    : null;

  return (
    <div className='content'>
      <div 
        className='background-image'
        style={{
          backgroundImage:`url(${background})`,
          filter: `brightness(40%)`,
        }}>
			</div>
      {popUpWindow}
      <div className='contact'>
        <div className='contact__header'>Kontakt</div>
        <div className='contact__info-container'>
          <div className='contact__info'>
            <a 
              className='link'
              href='https://www.linkedin.com/in/WieckowskiLukasz' 
              target='_blank' 
              rel='noreferrer'
            >
              <i className="lab la-linkedin-in"></i>
              linkedin.com/in/WieckowskiLukasz
            </a>
            <a className='link' href='mailto:lukasz.wieckowski.inf@gmail.com'>
              <i className="las la-at"></i>lukasz.wieckowski.inf@gmail.com
            </a>
            <a className='link' href="tel:+48515581719">
              <i className="las la-phone"></i>515-581-719
            </a>
          </div>
        </div>
        <div className='contact__header'>Formularz kontaktowy</div>
        <div className='contact__form-container'>
          <form className='contact__form' noValidate ref={formRef} onSubmit={handleForm}>
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
            <button 
              className='contact__form-submit btn' 
              type='submit' 
            >
              Wyślij
              <i className="las la-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
};