'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import {CSSTransition} from "react-transition-group";

const Navbar = ({ session }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
            className={styles.navLinks} style={
              menuOpen ? {top: "80px", transform:"translateY(0px)"} : {}
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
