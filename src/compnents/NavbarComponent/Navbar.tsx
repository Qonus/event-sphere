'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss'; // Подключите свои стили

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Для мобильного меню
  const [userMenuOpen, setUserMenuOpen] = useState(false); // Для dropdown на user-icon

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <div className={styles.navbar__head}>
          <Image
            className="sphere-event-logo"
            src="/logo.png"
            alt="logo"
            width={90}
            height={90}
          />
          <Link href="/" className={styles.logo}>
            Event Sphere
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <Link href="/events" style={{ textDecoration: 'none' }}>
            События
          </Link>

          {/* User Icon */}
          <div
            style={{ position: 'relative', cursor: 'pointer' }}
            onClick={toggleUserMenu}
          >
            <Image
              className='sphere-event-logo'
              src="/user-icon.png"
              alt="User Icon"
              width={30}
              height={30}
            />

            {/* Dropdown Menu */}
            {userMenuOpen && (
              <div
                className={styles.userDropdown}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li
                    style={{
                      padding: '10px 15px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #eee',
                    }}
                  >
                    <Link href="/login" onClick={() => setUserMenuOpen(false)}>
                      Log In
                    </Link>
                  </li>
                  <li
                    style={{
                      padding: '10px 15px',
                      cursor: 'pointer',
                    }}
                  >
                    <Link
                      href="/profile"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Личный кабинет
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <Link
            href="/events/1"
            style={{ textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            События
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
