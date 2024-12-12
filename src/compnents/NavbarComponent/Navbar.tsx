'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          src="/logo.png"
          alt="logo"
          width={90}
          height={90}/>
        <Link href="/" className={styles.logo}>
          City Flow
        </Link>
        </div>
        

        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          <Link href="/" style={{textDecoration:'none'}}>Главная</Link>
          <Link href="/materials" style={{textDecoration:'none'}}>События</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
      

      {/* Dropdown Menu for Mobile */}
      
      </div>
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <Link href="/" style={{textDecoration:'none'}} onClick={() => setMenuOpen(false)}>Главная</Link>
          <Link href="/materials" style={{textDecoration:'none'}} onClick={() => setMenuOpen(false)}>События</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
