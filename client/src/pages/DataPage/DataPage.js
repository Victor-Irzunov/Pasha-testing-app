import React, { useEffect, useState, useContext } from 'react'
import { getAll } from '../../http/adminAPI.js'
import ModalData from '../../components/modalData/ModalData.js'
import UserStore from '../../store/UserStore'
import { ThemesContext } from '../../themes/themes'
import { observer } from "mobx-react-lite"
import './DataPage.css'

const DataPage = observer(()=> {
	const { theme, user } = useContext(ThemesContext)
	const [data, setData] = useState([])
	const [modalIsOpen, setIsOpen] = useState(false)
	const [id, setId] = useState(null)
	


	useEffect(() => {
		getAll().then(data => {
			setData(data)
		})
	}, [])


	function openModalData() {
		setIsOpen(true)
	}
	function closeModalData() {
		setIsOpen(false)
	}




	return (
		<main className='main'>
			<div className='bu-main'></div>
			<ModalData modalIsOpen={modalIsOpen} closeModalData={closeModalData} id={id} />
			<section className='data-page container'>
				<article style={{ color: theme.text }}>
					<h2>Содержание:</h2>
					<ul className='data-page-ul'>
						{data.map(obj => {
							return (

								<li key={obj.id} onClick={() => {
									openModalData()
									setId(obj.id)
								}}>
									<span className='li-span'>
										<h3>{obj.title}</h3>

										{
											user.isAuth && user.userData.role === 'ADMIN' &&
											<span
												className='data-article-id'
											>
												id: {obj.id}
											</span>
										}

									</span>
								</li>

							)
						})}
					</ul>
				</article>
			</section>
		</main>
	)
})

export default DataPage

