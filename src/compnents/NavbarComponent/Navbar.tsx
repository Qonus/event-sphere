import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import { auth } from '@/auth';

const Navbar = async () => {
  const session = await auth();

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

        <div className={styles.navLinks}>
          <Link href="/events">
            События
          </Link>

            <div className={styles.user}>
              <Image
                className='sphere-event-logo'
                src="/user-icon.png"
                alt="User Icon"
                width={30}
                height={30}
              />
              {!session?.user ?
              <Link href="/login">
                Log In
              </Link> :
              <Link href="/profile">
                Личный кабинет
              </Link>}
            </div>
        </div>

        <button className={styles.menuButton}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
