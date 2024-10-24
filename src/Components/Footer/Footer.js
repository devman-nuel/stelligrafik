import React from 'react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer'>
      <div className='footer-con'>
        <div className='footer-left'>
          <p data-animation='paragraph'>About</p>
          <p data-animation='paragraph'>Services</p>
          <p data-animation='paragraph'>Projects</p>
          <p data-animation='paragraph'>Contact</p>
        </div>

        <div className='footer-right'>
          <div className='contact-con'>
            <div className='footer-box'>
              <p>LOCATION</p>
              <div>
                <span>308 Lawrence Ville, SpringBottom, Atlanta Georgia, USA.</span>
              </div>
              <button>Get in touch</button>
            </div>

            <div className='footer-box'>
              <p>CONTACT</p>
              <div>
                <span>plantaura@info.com</span>
                <span>+1770 366 2053</span>
                <span>+1770 366 2058</span>
              </div>
            </div>
          </div>

          <div className='contact-con'>
            <div className='footer-box'>
              <p>OPEN HOURS</p>
              <div>
                <span>Monday - Friday : 9AM - 5PM</span>
                <span>Saturday : 10AM - 3pM</span>
                <span>Sunday : Closed</span>
              </div>
            </div>

            <div className='footer-box'>
              <p>FOLLOW US</p>
              <div>
                <span>Instagram</span>
                <span>Twitter</span>
                <span>Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='copy'>
        <div>
          <p>We value your privacy and Terms & Condition are committed to safeguarding your personal information. Learn more about how we collect, use, and protect your data by reading our full Privacy Policy.</p>      
        </div>

        <div className='copyspan'>
          <span>Copyright@plantura2024</span>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className='scroll-to-top' onClick={scrollToTop}>
        ↑
      </div>
    </div>
  );
}

export default Footer;
