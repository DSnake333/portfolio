import React, { useState } from 'react';
import { copyToClipboard } from '../utils/clipboard';

function ContactLink({ href, imgSrc, imgAlt, popupText, textToCopy }) {
  const [popupContent, setPopupContent] = useState(popupText);
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = (e) => {
    if (textToCopy) {
      e.preventDefault();
      copyToClipboard(textToCopy, () => {
        setPopupContent('Copied!');
        setIsCopied(true);
        setTimeout(() => {
          setPopupContent(popupText);
          setIsCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <p>
      <a className="link" href={href} onClick={handleClick} target={!textToCopy ? "_blank" : ""} rel="noopener noreferrer">
        <img src={imgSrc} alt={imgAlt} />
        <span className={`popup ${isCopied ? 'copied' : ''}`}>{popupContent}</span>
      </a>
    </p>
  );
}

export default ContactLink;