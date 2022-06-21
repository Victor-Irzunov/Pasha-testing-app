import React, { useContext } from 'react'
import './AboutPage.css'
import img1 from './images/tester-3.gif'
import img2 from './images/tester-1.gif'
import img3 from './images/tester-2.gif'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
import { ThemesContext } from "../../themes/themes"

function AboutPage() {

	const { theme } = useContext(ThemesContext)


	return (
		<main className='main'>
			<div className='bu-main'></div>
			<section className='about container' style={{ color: theme.text }}>
				<div className='about-box-left'>
					<h2>О нас</h2>
					<h3>В нашей студии по тестированию программного обеспечения работаю программисты с большим опытом работы  orem ipsum dolor sit, amet candae optio odio atque, rem maiores laudantium accusantium? Quia praesentium facilis sed eligendi?
						di elit. Nihil minima totam labore, animi mollitia dolores debitis voluptatibus recusandae optio odio atque, rem maiores laudantium accusantium. Quia praesentium facilis sed eligendi.
					</h3>
					<div className='about-social'>
						<FaLinkedinIn className='about-icon' />
						<FaInstagram className='about-icon' />
						<FaTelegramPlane className='about-icon' />
						<FaWhatsapp className='about-icon' />
					</div>
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