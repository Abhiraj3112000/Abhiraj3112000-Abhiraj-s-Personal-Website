import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
          <div className='footer-logo'>
          </div>
          <div className='social-icons' style={{marginTop:"0.5rem"}}>
      
            <Link
              className='social-icon-link mail'
              to='/'
              target='_blank'
              aria-label='mail'
              title = "e-mail"
            >
              <i className='far fa-envelope' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              title="LinkedIn"
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
              className='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
              title = 'Github'
            >
              <i className='fab fa-github' />
            </Link>

            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
              title = 'Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              title = 'Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <div className='social-logo' style={{paddingTop:"1rem"}}>
            Copyright © 2021 Abhiraj Chatterjee
            </div>
          </div>
    </footer>
  );
}

export default Footer;
