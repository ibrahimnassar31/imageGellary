'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__logo">
          <Link href="/">
            <span className="footer__logo-text">URL Shortener</span>
          </Link>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__column-title">Features</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link href="/features/link-shortening" className="footer__link">
                  Link Shortening
                </Link>
              </li>
              <li className="footer__item">
                <Link href="/features/branded-links" className="footer__link">
                  Branded Links
                </Link>
              </li>
              <li className="footer__item">
                <Link href="/features/analytics" className="footer__link">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Resources</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link href="/resources/blog" className="footer__link">
                  Blog
                </Link>
              </li>
              <li className="footer__item">
                <Link href="/resources/developers" className="footer__link">
                  Developers
                </Link>
              </li>
              <li className="footer__item">
                <Link href="/resources/support" className="footer__link">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Company</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link href="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li className="footer__item">
                <Link href="/careers" className="footer__link">
                  Careers
                </Link>
              </li>
              <li className="footer__item">
                <Link href="/contact" className="footer__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column footer__column--social">
            <div className="footer__social">
              <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="footer__social-link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95717 14.8821 3.28445C14.0247 3.61173 13.2884 4.19439 12.773 4.95371C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--color-very-dark-violet);
          color: white;
          padding: 3rem 0;
        }
        
        .footer__container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .footer__logo {
          font-size: 1.5rem;
          font-weight: var(--font-weight-bold);
          color: white;
          text-align: center;
        }
        
        .footer__logo-text {
          color: white;
        }
        
        .footer__links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        
        .footer__column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer__column-title {
          color: white;
          font-weight: var(--font-weight-bold);
          font-size: 1rem;
        }
        
        .footer__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer__link {
          color: var(--color-gray);
          transition: color 0.3s;
        }
        
        .footer__link:hover {
          color: var(--color-cyan);
        }
        
        .footer__social {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .footer__social-link {
          color: white;
          transition: color 0.3s;
        }
        
        .footer__social-link:hover {
          color: var(--color-cyan);
        }
        
        @media (min-width: 768px) {
          .footer__container {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
          
          .footer__logo {
            text-align: left;
          }
          
          .footer__links {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </footer>
  );
} 