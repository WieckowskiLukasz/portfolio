import React from "react";
import { FC } from "react";

interface ContactPopUpInterface {
  successfulSend: boolean,
  successfulSendText: Array<string>,
  errorSendText: Array<string>,
  callback: ()=> void;
};

const ContactPopUp: FC<ContactPopUpInterface> = ({ successfulSend, successfulSendText, errorSendText, callback}) => {

  const text = successfulSend ? 
  successfulSendText
  : errorSendText;

  return(
    <div className='contact-pop-up'>
      <div className='contact-pop-up__content'>
        <div className='contact-pop-up__text'>
          { text.map((item, i)=>
            <p key={i}>
              {item}
            </p>
          )}
        </div>
        <button 
          onClick={()=> callback()} 
          className='contact-pop-up__button btn'
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ContactPopUp;