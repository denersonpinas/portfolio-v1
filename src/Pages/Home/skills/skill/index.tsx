import styles from './Skill.module.scss';
import skills from '../skills.json';

type Iskill = typeof skills[0];


export function Skill(props : Iskill) {
	return (
		<div className={styles['skill']}>
			<span>{props.name}</span>
			<progress className={styles['progress']} value={props.value} max='100'>70%</progress>
		</div>
	);
}