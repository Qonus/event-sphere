import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Navbar = async () => {
  const session = await auth();

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

        <div className={styles.navLinks}>
          <Link href="/events">
            События
          </Link>

          <Link className={styles.user} href={!session?.user ? "/login" : "/profile"}>
            <Image
              className='sphere-event-logo'
              src="/user-icon.png"
              alt="User Icon"
              width={30}
              height={30}
            />
            {!session?.user ? "Log In" : "Личный кабинет"}
          </Link>
        </div>

        <button className={styles.menuButton}>
          ☰
        </button>
      </div>
    </nav>
    <div className={styles.fake_navbar}></div>
    </>
  );
};

export default Navbar;
