import React from 'react';
import ContactLink from '../components/ContactLink';

function Contact() {
  return (
    <>
      <ContactLink
        href="mailto:dharshak48@gmail.com"
        imgSrc="/images/envelope.png"
        imgAlt="Email"
        popupText="Copy to Clipboard"
        textToCopy="dharshak48@gmail.com"
      />

      <ContactLink
        href="https://www.linkedin.com/in/dharshak333/"
        imgSrc="/images/linkedin.png"
        imgAlt="LinkedIn"
        popupText="Visit LinkedIn Profile"
      />

      <ContactLink
        href="tel:+917010766025"
        imgSrc="/images/telephone.png"
        imgAlt="Phone"
        popupText="Copy to Clipboard"
        textToCopy="+917010766025"
      />

      <ContactLink
        href="https://www.google.com/maps/@13.0484369,80.2179082,15z?entry=ttu"
        imgSrc="/images/pin.png"
        imgAlt="Location"
        popupText="View Location"
      />
    </>
  );
}

export default Contact;