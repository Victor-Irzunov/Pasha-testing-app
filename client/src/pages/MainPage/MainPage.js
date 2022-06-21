import React, { useContext } from 'react'
// import video from './video/main-video.mp4'
import video from './video/1.mp4'
// import fon from './images/11.svg'
// import fon2 from './images/9.png'
import { ThemesContext } from "../../themes/themes"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import './MainPage.css'

function MainPage() {
	const { theme, admin } = useContext(ThemesContext)

	// console.log('admin.isCandidat: ', admin.isCandidat)


	return (
		<main>
			<div className="overlay"></div>
			<section className='main-section container'>

				<video
					autoPlay
					playsInline
					muted
					loop
				// defaultMuted
				// poster={background}
				>
					<source src={video} type='video/mp4' />
				</video>

				<article className='main-article'>

					<div className="text" style={{ color: theme.text }}>
						<h2>Тестирование</h2>
						<h3>IT <span>продуктов</span></h3>
						<p>Надежность и бесперебойная работа ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>

						<a href="https://t.me/@pavel_j"
							style={{ color: theme.textBlue, background: theme.backgroundBtn }}
						>Написать нам</a>

					</div>

					<div className="sm" style={{ background: theme.text }}>
						<a className='social icon' href="#"><FaPhoneAlt /></a>
						<div className='none'>
							<a className='social' href="#"><FaFacebookF /></a>
							<a className='social' href="#"><FaLinkedinIn /></a>
							<a className='social' href="#"><FaInstagram /></a>
							<a className='social' href="https://t.me/@pavel_j"><FaTelegramPlane /></a>
							<a className='social'
								href="http://wa.me/?text=Хочу%20к%20вам%20в%20группу!%20"
							><FaWhatsapp /></a>
						</div>
						<a href='https://tel' className='header-tel'>+ 375 29 617 76 04</a>
					</div>
				</article>
			</section>
		</main>
	)
}

export default MainPage