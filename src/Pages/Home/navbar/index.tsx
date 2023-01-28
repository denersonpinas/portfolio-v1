import { FaGithub, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BsMoon } from 'react-icons/bs';
import Logo from 'Assets/logo.png';
import styles from './Navbar.module.scss';

export function Navbar() {
	return(
		<nav className={styles['navbar']}>
			<img src={Logo} alt='Logo do site Dênerson Pinas' className={styles['navbar__logo']} />
			<ul className={styles['navbar__icons']}>
				<li className={styles['navbar__icons__icon']}><BsMoon size={25}/></li>
				<li className={styles['navbar__icons__icon']}><FaTiktok size={20}/></li>
				<li className={styles['navbar__icons__icon']}><FaGithub size={40}/></li>
				<li className={styles['navbar__icons__icon']}><FaLinkedinIn size={20}/></li>
				<li className={styles['navbar__icons__icon']}><FaInstagram size={20}/></li>
			</ul>
		</nav>
	);
}