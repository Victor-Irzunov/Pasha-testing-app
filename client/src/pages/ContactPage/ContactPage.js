import React, { useState, useContext } from 'react'
import { BsFillGeoFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMailOption } from 'react-icons/gr'
import { sendMessageContact, newIsContact } from '../../http/contactMessageAPI'
import { ThemesContext } from '../../themes/themes'
import './ContactPage.css'

function ContactPage() {
	const { theme } = useContext(ThemesContext)
	const [name, setName] = useState('')
	const [mail, setMail] = useState('')
	const [text, setText] = useState('')
	const [message, setMessage] = useState('')
	const [isActive, setActive] = useState(false)

	const sendFormMessage = (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', name)
		formData.append('mail', mail)
		formData.append('text', text)
		sendMessageContact(formData)
			.then(data => {
				setActive(true)
				setMessage(data.message)
				setName('')
				setMail('')
				setText('')
				newIsContact()
			}).finally(() => {
				setTimeout(() => {
					setActive(false)
				}, 3000)
			})
	}

	return (
		<main className='main-contact'>
			<div className='bu-main'></div>
			<section className="contact-block">
				<div className="content-box">
					<h2 style={{ color: theme.text }}>Наши контакты</h2>
				</div>
				<div className="container-contact">
					<div className="contact-info">
						<div className="box-contact">
							<div className="icon" style={{ color: theme.text }}>
								<BsFillGeoFill />
							</div>
							<div className="text-contact" style={{ color: theme.text }}>
								<h3>Адрес</h3>
								<a
									href='https://goo.gl/maps/P6B47ENEcWrJeqTi8'
									target='_blank'
									style={{ color: theme.text }}
								>
									<p> ул. Авиационная д.49</p>
								</a>
							</div>
						</div>
						<div className="box-contact">
							<div className="icon" style={{ color: theme.text }}>
								<FaPhoneAlt />
							</div>
							<div className="text-contact" style={{ color: theme.text }}>
								<h3>Телефон</h3>
								<a
									href='tel:+375296177604'
									title="Наш номер телефона"
									style={{ color: theme.text }}
								><p>+37529 617-76-04</p></a>
							</div>
						</div>
						<div className="box-contact">
							<div className="icon" style={{ background: theme.text }}>
								<GrMailOption />
							</div>
							<div className="text-contact" style={{ color: theme.text }}>
								<h3>Почта</h3>
								<a
									href="mailto:software.test.studio@gmail.com"
									title="Наша почта"
									style={{ color: theme.text }}
								>
									<a
										href="mailto:software.test.studio@gmail.com"
										title="Наша почта"
										style={{ color: theme.text }}
									><p>software.test.studio@gmail.com</p></a>
								</a>
							</div>
						</div>
					</div>
					<div className="contact-form" style={{ background: theme.text }}>
						<form onSubmit={e => sendFormMessage(e)}>
							<h2>Напишите нам</h2>
							<div className="input-box" >
								<input
									type="text"
									name="name"
									value={name}
									onChange={e => setName(e.target.value)}
									required="required"
									style={{ background: theme.text }}
								/>
								<span>Полное имя</span>
							</div>
							<div className="input-box">
								<input
									type="text"
									name="mail"
									value={mail}
									onChange={e => setMail(e.target.value)}
									required="required"
									style={{ background: theme.text }}
								/>
								<span>Ваша почта</span>
							</div>
							<div className="input-box">
								<textarea
									required="required"
									name='text'
									value={text}
									onChange={e => setText(e.target.value)}
									style={{ background: theme.text }}
								></textarea>
								<span>Ваше сообщение...</span>
							</div>
							<div className="input-box">
								<input
									type='submit'
									value={!isActive ? 'Отправить' : message}
									style={{ color: theme.text }}
								/>
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	)
}

export default ContactPage