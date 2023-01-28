import styles from './MyWorks.module.scss';
import { Work } from './work';

export function MyWorks() {
	return (
		<section className={styles['section-myworks']}>
			<h2 className={styles['section-myworks__sub-title']}>SOME OF MY WORKS_</h2>
			<div className={styles['options']}>
				<ul className={styles['options__option']}>
					<li className={styles['options__option__item']}>ALL</li>
					<li className={styles['options__option__item']}>WEB SITES</li>
					<li className={styles['options__option__item']}>APP MOBILE</li>
				</ul>
			</div>
			<div className={styles['works']}>
				<Work />
				<Work />
				<Work />
			</div>
		</section>
	);
}