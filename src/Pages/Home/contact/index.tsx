import styles from './Contact.module.scss';

export function Contact() {
	return(
		<section className={styles['section-contact']}>
			<h2 className={styles['section-contact__sub-title']}>CONTACT ME_</h2>
			<form action='' className={styles['form-contact']}>
				<div className={styles['form-contact__item']}>
					<input required type='text'  className={styles['form-contact__item__input']} id='Iname' />
					<label htmlFor='Iname' className={styles['form-contact__item__label']} id='Lname'>Name</label>
				</div>
				<div className={styles['form-contact__item']}>
					<input required type='email'  className={styles['form-contact__item__input']} id='Iemail' />
					<label htmlFor='Iemail' className={styles['form-contact__item__label']} id='Lemail'>Email</label>
				</div>
				<div className={styles['form-contact__item']}>
					<input required type='text'  className={styles['form-contact__item__input']} id='Imessage' />
					<label htmlFor='Imessage' className={styles['form-contact__item__label']} id='Lmessage'>Message</label>
				</div>
				<input className={styles['form-contact__item__btn']} type='submit' value='SEND MESSAGE' />
			</form>
		</section>
	);
}