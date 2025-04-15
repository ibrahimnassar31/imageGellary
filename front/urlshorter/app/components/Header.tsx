'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            Shortly
          </Link>

          <button 
            className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span></span>
          </button>

          <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
            <div className="header__nav-section">
              <Link href="/features" className="header__link">Features</Link>
              <Link href="/pricing" className="header__link">Pricing</Link>
              <Link href="/resources" className="header__link">Resources</Link>
            </div>
            <div className="header__nav-section">
              <Link href="/login" className="header__link">Login</Link>
              <Link href="/signup" className="header__link header__link--signup">Sign Up</Link>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header {
          padding: 40px 0;
          background: white;
        }

        .header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .header__logo {
          font-size: 80px;
          font-weight: var(--font-weight-bold);
          color: var(--color-very-dark-violet);
        }

        .header__menu-btn {
          width: 24px;
          height: 18px;
          position: relative;
          z-index: 2;
        }

        .header__menu-btn span,
        .header__menu-btn span::before,
        .header__menu-btn span::after {
          display: block;
          width: 100%;
          height: 3px;
          background: var(--color-grayish-violet);
          position: absolute;
          transition: 0.3s;
        }

        .header__menu-btn span {
          top: 50%;
          transform: translateY(-50%);
        }

        .header__menu-btn span::before,
        .header__menu-btn span::after {
          content: '';
        }

        .header__menu-btn span::before {
          top: -8px;
        }

        .header__menu-btn span::after {
          bottom: -8px;
        }

        .header__menu-btn--open span {
          background: transparent;
        }

        .header__menu-btn--open span::before {
          transform: rotate(45deg);
          top: 0;
        }

        .header__menu-btn--open span::after {
          transform: rotate(-45deg);
          bottom: 0;
        }

        .header__nav {
          position: fixed;
          top: 96px;
          left: 24px;
          right: 24px;
          background: var(--color-dark-violet);
          border-radius: 10px;
          padding: 32px;
          transform: translateY(-16px);
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
          text-align: center;
        }

        .header__nav--open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .header__nav-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .header__nav-section:first-child {
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 24px;
        }

        .header__link {
          color: white;
          font-weight: var(--font-weight-medium);
          font-size: 18px;
        }

        .header__link--signup {
          background: var(--color-cyan);
          padding: 12px 24px;
          border-radius: 25px;
          font-weight: var(--font-weight-bold);
        }

        @media (min-width: 768px) {
          .header {
            padding: 24px 0;
          }

          .header__menu-btn {
            display: none;
          }

          .header__nav {
            position: static;
            background: none;
            padding: 0;
            opacity: 1;
            visibility: visible;
            transform: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 1;
          }

          .header__nav-section {
            flex-direction: row;
            gap: 32px;
          }

          .header__nav-section:first-child {
            padding: 0;
            border: none;
            margin: 0;
          }

          .header__link {
            color: var(--color-grayish-violet);
            font-size: 15px;
          }

          .header__link:hover {
            color: var(--color-very-dark-violet);
          }

          .header__link--signup {
            color: white;
          }

          .header__link--signup:hover {
            background: hsl(180, 66%, 60%);
            color: white;
          }
        }
      `}</style>
    </header>
  );
} 