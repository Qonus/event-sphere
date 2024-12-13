'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { Session } from 'next-auth';

// Define the expected prop types
interface NavbarProps {
  session: Session | null;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar__wrapper}>
          <div className={styles.navbar__head}>
            <Image
              className="sphere-event-logo"
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
            <Link href="/" className={styles.logo}>
              EventSphere
            </Link>
          </div>

          <div
            className={styles.navLinks} 
            style={
              menuOpen ? {top: "80px", transform:"translateY(0px)"} : {transition:"0.75 ease-in"}
            }
          >
            <Link
              className={styles.user}
              href='/events/create'
            >
              <Image
                className={styles.user_image}
                src="/add-event.svg"
                alt="Event Icon"
                width={30}
                height={30}
              />
              Создать событие
            </Link>

            <Link
              className={styles.user}
              href='/events'
            >
              <Image
                className={styles.user_image}
                src={"/event.svg"}
                alt="Event Icon"
                width={30}
                height={30}
              />
              События
            </Link>

            <Link
              className={styles.user}
              href={!session?.user ? '/login' : '/profile'}
            >
              <Image
                className={styles.user_image}
                src={session?.user?.image || "/user.svg"}
                alt="User Icon"
                width={30}
                height={30}
              />
              {!session?.user ? 'Войти' : 'Личный кабинет'}
            </Link>
          </div>

          <button className={styles.menuButton} onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </nav>
      <div className={styles.fake_navbar}></div>
    </>
  );
};

export default Navbar;
