import React, { useContext } from 'react'
import './AboutPage.css'
import img1 from './images/tester-3.gif'
import img2 from './images/tester-1.gif'
import img3 from './images/tester-2.gif'
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { ThemesContext } from "../../themes/themes"
import SocialIcon from '../../components/social-icon/SocialIcon'
import { useLocation } from 'react-router-dom'

function AboutPage() {

	const { theme } = useContext(ThemesContext)
	const location = useLocation()
	let isTrue = location.pathname === '/about'


	return (
		<main className='main'>
			<div className='bu-main'></div>
			<section className='about container' style={{ color: theme.text }}>
				<div className='about-box-left'>
					<h2>О нас</h2>
					<h3>В нашей студии по тестированию ПО работаю программисты с опытом работы более 10 лет. Через нашу команду тестировщиков прошли многие проекты от небольших сайтов до крупных корпоративных приложений. 
					</h3>
					{/* <div className='about-social'> */}
					{/* <FaLinkedinIn className='about-icon' />
						<FaInstagram className='about-icon' />
						<FaTelegramPlane className='about-icon' />
						<FaWhatsapp className='about-icon' />
					</div> */}
					<SocialIcon isTrue={isTrue} />
				</div>
				<div className='about-box-right'>
					<div className='circle' style={{ background: theme.text }}>
						<img
							src={img1}
							className='img1'
						/>
						<img
							src={img2}
							className='img2'
						/>
						<img
							src={img3}
							className='img3'
						/>
					</div>
				</div>
			</section>
		</main>
	)
}

export default AboutPage