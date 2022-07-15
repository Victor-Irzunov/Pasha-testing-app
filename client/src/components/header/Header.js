import React, {
	useContext,
	useEffect,
	useState
} from 'react'
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { ThemesContext } from "../../themes/themes"
import { getIsContact } from "../../http/contactMessageAPI"
import { getIsCandidat } from '../../http/candidateAPI'
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { FaUserTie, FaSun, FaMoon } from "react-icons/fa"
import { useLocation } from 'react-router-dom'
import './Header.css'
import logo from './images/logo.png'

const Header = observer(({ openMenu, setIsActive, isActive, toggleTheme, setNumTheme }) => {

	const { theme, admin, user } = useContext(ThemesContext)
	const [isMail, setIsMail] = useState(false)
	const [isCandidat, setIsCandidat] = useState(false)
	const [isBtnThemeService, setIsBtnService] = useState(true)
	const [isChangeYellow, setIsChangeYellow] = useState(true)
	const [isChangeRed, setIsChangeRed] = useState(false)
	const [isChangeWhite, setIsChangeWhite] = useState(false)
	const location = useLocation()
	let isClass = location.pathname === '/service'


	useEffect(() => {
		getIsContact()
			.then(data => {
				if (data.length !== 0) {
					setIsMail(true)
					admin.setIsMail(true)
				}
			})
	}, [admin.isMail])

	useEffect(() => {
		getIsCandidat()
			.then(data => {
				if (data.length !== 0) {
					setIsCandidat(true)
					admin.setIsCandidat(true)
				}
			})
	}, [admin.isCandidat])

	let redClass = isChangeRed ? "switch-btn red active" : "switch-btn red"
	let yellowClass = isChangeYellow ? "switch-btn yellow active" : "switch-btn yellow"
	let whiteClass = isChangeWhite ? "switch-btn white active" : "switch-btn white"


	return (
		<header>
			<div className='header-section container'>
				<Link to="/" ><img className='logo' src={logo} alt='Тест IT продуктов' title='Логотип компании' /></Link>

				{
					user.isAuth && admin.isMail && <Link to="/message-contact" className='message-icon' >
						<MdOutlineMarkEmailUnread className='icon-mail' />
					</Link>
				}
				{
					user.isAuth && admin.isCandidat && <Link to="/message-candidat" >
						<FaUserTie className='icon-mail' />
					</Link>
				}



				{!isClass ?
					<>
						<div className="parent">
							<span style={{ color: theme.text }}>Тема сайта: </span>
							<div className="switch-3-ways">
								<div className={yellowClass}
									// style={{backgroundColor: theme.text, color: '#000'}}
									onClick={() => {
										// setNumTheme('1')
										toggleTheme('1')
										setIsChangeYellow(true)
										setIsChangeRed(false)
										setIsChangeWhite(false)
										// user.setNumTheme(1)

									}}
								>yellow</div>
								<div className={redClass}
									// style={{backgroundColor: theme.text}}
									onClick={() => {
										// setNumTheme('2')
										toggleTheme('2')
										setIsChangeYellow(false)
										setIsChangeRed(true)
										setIsChangeWhite(false)
										// user.setNumTheme(2)

									}}
								>red</div>
								<div className={whiteClass}
									// style={{backgroundColor: theme.text, color: '#000'}}
									onClick={() => {
										// setNumTheme('3')
										toggleTheme('3')
										setIsChangeYellow(false)
										setIsChangeRed(false)
										setIsChangeWhite(true)
										// user.setNumTheme(3)

									}}
								>white</div>
							</div>
						</div>

						{/* <div className="power-switch" onClick={() => toggleTheme()}>
							<input type="checkbox" />
							<div className="button">
								<svg className="power-off">
									<use xlinkHref="#line" className="line" />
									<use xlinkHref="#circle" className="circle" />
								</svg>
								<svg className="power-on">
									<use xlinkHref="#line" className="line" />
									<use xlinkHref="#circle" className="circle" />
								</svg>
							</div>
						</div>

						<svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
							<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="line">
								<line x1="75" y1="34" x2="75" y2="58" />
							</symbol>
							<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="circle">
								<circle cx="75" cy="80" r="35" />
							</symbol>
						</svg> */}



					</>
					:
					<>
						{
							isBtnThemeService ?
								<FaSun
									className='btn-service fa-sun'
									onClick={() => {
										setIsBtnService(i => !i)
										user.setIsActive(true)
									}}
								/>
								:
								<FaMoon
									className='btn-service fa-moon'
									onClick={() => {
										setIsBtnService(i => !i)
										user.setIsActive(false)
									}}
								/>
						}
					</>
				}


				<div
					style={{ color: theme.text }}
					className={isActive ? "toggle active" : "toggle"}
					onClick={() => {
						setIsActive(i => !i)
						openMenu()
					}}
				>
					<span
						className={theme.num === 1 && 'toggle-span-menu' || theme.num === 2&&'toggle-span-menu active' || theme.num === 3 &&'toggle-span-menu active2'}
					></span>
				</div>




			</div>
		</header>
	)
})

export default Header