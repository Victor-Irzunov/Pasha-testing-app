import React, { useContext, useState } from 'react'
import './ServicePage.css'
import { ThemesContext } from "../../themes/themes"
import { observer } from "mobx-react-lite"
import { AiFillCodeSandboxCircle, AiFillBug, AiOutlineStock, AiOutlineCheck,AiOutlineMobile } from "react-icons/ai";
import { TbBrowserCheck } from "react-icons/tb";

const ServicePage = observer(() => {

	const { user } = useContext(ThemesContext)
	// const [isActive, setIsActive] = useState(false)


	// const toggleClass = (e) => {
	// 	setIsActive(i => !i)
	// }


	return (
		<main className='main'>
			<div className={user.isActive ? 'bu-service active' : 'bu-service'}></div>
			<section className={user.isActive ? 'main-service-section active' : 'main-service-section'}>


				<div className="contain">
					<div className="card-service">
						<div className="box-card">
							<div className="content">
								<div className="icon">
									<AiFillCodeSandboxCircle />
								</div>
								<h3>Функциональное<br /> тестирование</h3>
								{/* <h4>от <sup>$</sup>250</h4> */}
								<h4>цена: договорная</h4>
								<h5>Проверка функциональности, гарантия бесперебойной работы:</h5>
								<ul>
									<li><AiOutlineCheck /> <span>тестирование установки</span></li>
									<li><AiOutlineCheck /> <span>регрессионное тестирование</span></li>
									<li><AiOutlineCheck /> <span>интеграционное тестирование</span></li>
									<li><AiOutlineCheck /> <span>smoke тестирование</span></li>
									<li><AiOutlineCheck /> <span>приемочное тестирование</span></li>
								</ul>
								<a href="#">Заказать</a>
							</div>
						</div>
					</div>
					<div className="card-service">
						<div className="box-card">
							<div className="content">
								<div className="icon">
									<AiOutlineStock />
								</div>
								<h3>Тестирование<br /> производительности</h3>
								{/* <h4>от <sup>$</sup>500</h4> */}
								<h4>цена: договорная</h4>
								<h5>Проверка системы на большие нагрузки:</h5>
								<ul>
									<li><AiOutlineCheck /> <span>тестирование производительности</span></li>
									<li><AiOutlineCheck /> <span>нагрузочное тестирование</span></li>
									<li><AiOutlineCheck /> <span>стресс-тестирование</span></li>
									<li><AiOutlineCheck /> <span>smoke тестирование</span></li>
									<li><AiOutlineCheck /> <span>тестирование стабильности</span></li>
								</ul>
								<a href="#">Заказать</a>
							</div>
						</div>
					</div>
					<div className="card-service">
						<div className="box-card">
							<div className="content">
								<div className="icon">
									<TbBrowserCheck />
								</div>
								<h3>Тестирование<br /> веб приложений</h3>
								{/* <h4>от <sup>$</sup>1000</h4> */}
								<h4>цена: договорная</h4>
								<h5>Виды тестирования веб-приложений:</h5>
								<ul>
									<li><AiOutlineCheck /> <span>функциональное тестирование</span></li>
									<li><AiOutlineCheck /> <span>тестирование совместимости</span></li>
									<li><AiOutlineCheck /> <span>тестирование производительности</span></li>
									<li><AiOutlineCheck /> <span>тестирование удобства использования</span></li>
									<li><AiOutlineCheck /> <span>тестирование безопасности</span></li>
								</ul>
								<a href="#">Заказать</a>
							</div>
						</div>
					</div>
					<div className="card-service">
						<div className="box-card">
							<div className="content">
								<div className="icon">
									<AiFillBug />
								</div>
								<h3>Автоматизация<br /> тестирования</h3>
								{/* <h4>от <sup>$</sup>1700</h4> */}
								<h4>цена: договорная</h4>
								<h5>Вид тестирования:</h5>
								<ul>
									<li><AiOutlineCheck /> <span>заменяет ручную работу</span></li>
									<li><AiOutlineCheck /> <span>повышает общее качество конечного продукта</span></li>
									<li><AiOutlineCheck /> <span>ускоряет выход на рынок </span></li>
									<li><AiOutlineCheck /> <span>тестирование удобства использования</span></li>
									<li><AiOutlineCheck /> <span>снижает затраты на обеспечение качества</span></li>
								</ul>
								<a href="#">Заказать</a>
							</div>
						</div>
					</div>
					<div className="card-service">
						<div className="box-card">
							<div className="content">
								<div className="icon">
									<AiOutlineMobile />
								</div>
								<h3>Мобильное<br /> тестирование</h3>
								<h4>цена: договорная</h4>
								<h5>Вид тестирования:</h5>
								<ul>
									<li><AiOutlineCheck /> <span>эмуляторы</span></li>
									<li><AiOutlineCheck /> <span>сервисы для бета-тестирования</span></li>
									<li><AiOutlineCheck /> <span>сбор статистики</span></li>
									<li><AiOutlineCheck /> <span>проверка на сбои при отображении на экранах разного разрешения</span></li>
								</ul>
								<a href="#">Заказать</a>
							</div>
						</div>
					</div>
				</div>




			</section>
		</main>
	)
})

export default ServicePage