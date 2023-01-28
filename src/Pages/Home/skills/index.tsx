import { Skill } from './skill';
import styles from './Skills.module.scss';
import skills from './skills.json';

export function Skills() {
	return (
		<section className={styles['skills']}>
			<h2 className={styles['skills__sub-title']}>GENERAL SKILLS_</h2>
			<div className={styles['skills__containers']}>
				<div className={styles['container']}>		
					{skills.map((item, id) => (
						<Skill key={id} {...item} />
					))}			
				</div>
				<div className={styles['container']}>					
				</div>
			</div>
		</section>
	);
}