
import React, { useRef, useState, SyntheticEvent, useContext } from 'react';
import emailjs from '@emailjs/browser';
import background from '../images/backgrounds/default_bg.webp';
import validator from 'validator';
import { AppContext } from '../AppContext.tsx';
import { ContactContent } from '../arrays/contact.ts';
import ContactPopUp from '../components/ContactPopUp.tsx';

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
  const {lang} = useContext(AppContext);

  const Content = ContactContent[lang];

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
  };

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
        setPopUpActive(true);
        setSuccessfulSend(false);
      },
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
    Content.contactForm.titleInput.error
    : null;
  const emailError = (formConfirmed && !emailValid) ? 
    Content.contactForm.emailInput.error
    : null;
  const messageError = (formConfirmed && !messageValid) ? 
    Content.contactForm.messageInput.error
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
      { popUpActive &&
        <ContactPopUp 
          successfulSend={successfulSend as boolean}
          successfulSendText={Content.contactForm.successfulSend}
          errorSendText={Content.contactForm.erroSend}
          callback={handlePopUpButton}
        />
      }
      <div className='contact'>
        <div className='contact__header'>{Content.contact.header}</div>
        <div className='contact__info-container'>
          <div className='contact__info'>
            { Content.contact.links.map((item, i)=>
              <a 
                className='link'
                href={item.link}
                target='_blank'
                rel='noreferrer'
              >
                <i className={item.icon}/>
                {item.title}
              </a>
            )}
          </div>
        </div>
        <div className='contact__header'>{Content.contactForm.header}</div>
        <div className='contact__form-container'>
          <form className='contact__form' noValidate ref={formRef} onSubmit={handleForm}>
            <label className={titleLabel}>
              {Content.contactForm.titleInput.title} {titleError}
            </label>
            <input
              className={titleInput}
              type='text' 
              name='user_name' 
              placeholder={Content.contactForm.titleInput.placeholder}
              value={title} 
              onChange={handleTitle}
            />
            <label className={emailLabel}>
              {Content.contactForm.emailInput.title} {emailError}
            </label>
            <input 
              className={emailInput}
              type='email' 
              name='user_email'
              placeholder={Content.contactForm.emailInput.placeholder}
              value={email} 
              onChange={handleEmail}
            />
            <label className={messageLabel}>
              {Content.contactForm.messageInput.title} {messageError}
            </label>
            <textarea
              className={messageInput}
              name='message' 
              placeholder={Content.contactForm.messageInput.placeholder}
              value={message} 
              onChange={handleMessage}
            />
            <button 
              className='contact__form-submit btn' 
              type='submit' 
            >
              {Content.contactForm.sendButton}
              <i className="las la-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
};