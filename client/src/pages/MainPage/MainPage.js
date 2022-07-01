import React, { useContext, useState } from 'react'
import video from './video/1.mp4'
import { ThemesContext } from "../../themes/themes"
import ModalWindow from '../../components/modals/ModalWindow'
// import { FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa"
// import { FiMail } from "react-icons/fi"
import './MainPage.css'
import SocialIcon from '../../components/social-icon/SocialIcon'

function MainPage() {
	const { theme } = useContext(ThemesContext)
	const [modalIsOpen, setIsOpen] = useState(false)
	const [isSendBool, setSendBool] = useState(false)


	function openModalData() {
		setIsOpen(true)
		setSendBool(true)
	}
	function closeModal() {
		setIsOpen(false)
		setSendBool(false)
	}


	return (
		<main>
			<div className="overlay"></div>
			<section className='main-section container'>

				<video
					autoPlay
					playsInline
					muted
					loop
				>
					<source src={video} type='video/mp4' />
				</video>

				<ModalWindow modalIsOpen={modalIsOpen} isSendBool={isSendBool} closeModal={closeModal} />

				<article className='main-article'>

					<div className="text" style={{ color: theme.text }}>
						<h2>Тестирование</h2>
						<h3>IT <span>продуктов</span></h3>
						<p>Надежность и бесперебойная работа ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>

						{/* <button
							style={{ color: theme.textBlue, background: theme.backgroundBtn }}
							onClick={openModalData}
						>
							Написать нам
						</button> */}




						{/* <div className="sm"
						>

							<div className='none'>
								<a className='social icon'
									href='tel:+375296177604'
									title="Позвонить"
									style={{ color: theme.text }}
								>
									<FaPhoneAlt />
								</a>
								<a href='tel:+375296177604'
									style={{ color: theme.text }}
									className='header-tel'
								>
									+ 375 29 617 76 04
								</a>
								<a className='social' href="#"
									onClick={openModalData}
									style={{ color: theme.text }}
								>
									<FiMail />
								</a>
								<a className='social'
									style={{ color: theme.text }}
									href="#"
									target="_blanck"
								><FaLinkedinIn /></a>
								<a className='social'
									style={{ color: theme.text }}
									href="#"
									target="_blanck"
								><FaInstagram /></a>
								<a className='social'
									style={{ color: theme.text }}
									href="https://t.me/pavel_j"
									target="_blanck"
								><FaTelegramPlane /></a>
								<a className='social'
									style={{ color: theme.text }}
									href="http://wa.me/?text=Хочу%20к%20вам%20в%20группу!%20"
									target="_blanck"
								><FaWhatsapp /></a>
							</div>


						</div> */}

						<SocialIcon openModalData={openModalData} />


					</div>

					{/* <div className="sm"
					>
						<a className='social icon'  href='tel:+375296177604'
								title="Наш номер телефона"><FaPhoneAlt /></a>
						<div className='none'>
							<a className='social' href="#"><FaFacebookF /></a>
							<a className='social' href="#"><FaLinkedinIn /></a>
							<a className='social' href="#"><FaInstagram /></a>
							<a className='social' href="https://t.me/pavel_j"><FaTelegramPlane /></a>
							<a className='social'
								href="http://wa.me/?text=Хочу%20к%20вам%20в%20группу!%20"
							><FaWhatsapp /></a>
						</div>
						<a href='https://tel' className='header-tel'>+ 375 29 617 76 04</a>
					</div> */}
				</article>
			</section>
		</main>
	)
}

export default MainPage