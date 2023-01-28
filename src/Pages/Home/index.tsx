import { Navbar } from './navbar';
import styles from './Home.module.scss';
import Myphoto from 'Assets/denerson.png';
import { FaDownload } from 'react-icons/fa';
import { Skills } from './skills';
import { MyWorks } from './myWorks';
import { Contact } from './contact';
import { Footer } from 'Components/footer';

export function Home() {
	return (
		<>
			<header className={styles['section-header']}>
				<Navbar />
				<section className={styles['apresentations']}>
					<div className={styles['apresentations__data']}>
						<div className={styles['apresentation']}>
							<p>HELLO, <span>MY NAME IS</span></p>
							<h1 className={styles['apresentation__title']}><span>DÊNERSON</span>PINAS</h1>
							<div className={styles['apresentation__slide']}>
								<p>I AM</p>
								<ul className={styles['itens']}>
									<li className={styles['itens__item']}><span>Web Developer</span></li>
									<li className={styles['itens__item']}><span>SEO Analyst</span></li>
									<li className={styles['itens__item']}><span>Freelancer</span></li>
								</ul>
							</div>
						</div>
						<ul className={styles['data-pessoal']}>
							<li className={styles['data-pessoal__datas']}>
								<span className={styles['data-pessoal__datas__data']}>
									Age:
								</span>
								<span className={styles['data-pessoal__datas__data']}>
									23
								</span>
							</li>
							<li className={styles['data-pessoal__datas']}>
								<span className={styles['data-pessoal__datas__data']}>
									Email:
								</span>
								<span className={styles['data-pessoal__datas__data']}>
									contato@denersonpinas.com
								</span>
							</li>
							<li className={styles['data-pessoal__datas']}>
								<span className={styles['data-pessoal__datas__data']}>
									Phone
								</span>
								<span className={styles['data-pessoal__datas__data']}>
									(73) 9 8176 - 5369
								</span>
							</li>
							<li className={styles['data-pessoal__datas']}>
								<span className={styles['data-pessoal__datas__data']}>
									Address:
								</span>
								<span className={styles['data-pessoal__datas__data']}>
									Eunápolis - BA
								</span>
							</li>
						</ul>
					</div>
					<div className={styles['apresentations__images']}>
						<div className={styles['apresentations__images__border']}></div>
						<img src={Myphoto} alt='Dênerson Pinas' className={styles['apresentations__images__image']} />
						<div className={styles['apresentations__images__infor']}>
							<p>2+</p>
							<p>Years of <br /> experience</p>
						</div>
						<div className={styles['apresentations__images__infor']}>
							<p>0</p>
							<p>Completed Project</p>
						</div>
					</div>
				</section>
			</header>
			<main className={styles['section-body']}>
				<section className={styles['about']}>
					<h2 className={styles['about__sub-title']}>HI_</h2>
					<p className={styles['about__paragraph']}>I am Junior Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.</p>
					<a className={styles['about__btn']} href="http://example.com/myfile.pdf" download>DOWNLOAD CV <FaDownload size={25}/></a>
				</section>
				<Skills />
				<MyWorks/>
				<Contact />
			</main>
			<Footer />
		</>
	);
}