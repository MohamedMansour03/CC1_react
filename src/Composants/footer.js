import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className=' custom-footer mt-auto '>
      <div className='container'>
        <section className='social-icons'>
          <div className='social-icon' style={{ color: '#3b5998' }}>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className='social-icon' style={{ color: '#dd4b39' }} >
            <FontAwesomeIcon icon={faGoogle} />
          </div>
          <div className='social-icon' style={{ color: '#ac2bac' }}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className='social-icon' style={{ color: 'white' }}>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </section>
        <div className='Copyright'>
          © 2023 Copyright:
        </div>
      </div>
    </footer>
  );
}

export default Footer;
