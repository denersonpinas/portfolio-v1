import styles from './Work.module.scss';
import photoProject from 'Assets/project.jpg';

export function Work() {
	return (
		<div className={styles['work']}>
			<img src={photoProject} alt='MOBILE AND DESK APP FOR LONDON HOSTEL STORE' className={styles['work__image']}></img>
			<div className={styles['work__content']}>
				<h2 className={styles['work__content__title']}>MOBILE AND DESK APP FOR LONDON HOSTEL STORE</h2>
				<p className={styles['work__content__paragraph']}>Do answered bachelor occasion in of offended no concerns. Supply worthy warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use these smart rooms ham.</p>
				<div className={styles['staks']}>
					<h3 className={styles['staks__title']}>USED STACK:</h3>
					<ul className={styles['staks__itens']}>
						<li className={styles['staks__itens__item']}>html5</li>
						<li className={styles['staks__itens__item']}>css3</li>
						<li className={styles['staks__itens__item']}>javaScrip</li>
						<li className={styles['staks__itens__item']}>bower</li>
						<li className={styles['staks__itens__item']}>grunt</li>
					</ul>
				</div>
			</div>
		</div>
	);
}