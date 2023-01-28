import styles from './Footer.module.scss';

export function Footer() {
	return(
		<footer className={styles['section-footer']}>
			<p className={styles['section-footer__paragraph']}>
                DÊNERSON PINAS © 2023. ALL RIGHTS RESERVED.
			</p>
		</footer>
	);
}