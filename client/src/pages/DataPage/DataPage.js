import React, { useEffect, useState, useContext } from 'react'
import { getAll } from '../../http/adminAPI.js'
import ModalData from '../../components/modalData/ModalData.js'
import UserStore from '../../store/UserStore'
import { ThemesContext } from '../../themes/themes'
import { changeOrderArticles } from '../../http/adminAPI'
import { observer } from "mobx-react-lite"
import { Reorder } from "framer-motion"
import './DataPage.css'
import DataItemUser from '../../components/DataItem/DataItemUser.js'
import DataItemAdmin from '../../components/DataItem/DataItemAdmin.js'

const DataPage = observer(() => {
	const { theme, user } = useContext(ThemesContext)
	const [data, setData] = useState([])
	const [modalIsOpen, setIsOpen] = useState(false)
	const [id, setId] = useState(null)



	useEffect(() => {
		getAll()
			.then(data => {
				console.log('data--->>> ', data)
				setData(data.sort((a, b) => a.idx - b.idx))
			})
	}, [])


	function openModalData() {
		setIsOpen(true)
	}
	function closeModalData() {
		setIsOpen(false)
	}

	const sendChangeOrderArticles = () => {
		changeOrderArticles(data)
			.then(data => {
				console.log('data: ', data)
			})
	}


	return (
		<main className='main'>
			<div className='bu-main'></div>
			<ModalData modalIsOpen={modalIsOpen} closeModalData={closeModalData} id={id} />

			<section className='data-page container'>
				{user.isAuth && user.userData.role === 'ADMIN' &&
					<button
						className='data-btn'
						onClick={sendChangeOrderArticles}
					>Сохранить</button>
				}
				<article style={{ color: theme.text }}>
					<h2>Содержание:</h2>

					{user.isAuth && user.userData.role === 'ADMIN'
						?
						<Reorder.Group as='ul' axys='y' values={data} onReorder={setData} className='data-page-ul'>
							{data.map(obj => {
								return (
									<DataItemAdmin obj={obj} openModalData={openModalData} setId={setId} user={user} />
								)
							})}
						</Reorder.Group>
						:
						<ul className='data-page-ul'>
							{data.map(obj => {
								return (
									<DataItemUser obj={obj} openModalData={openModalData} setId={setId} user={user} />
								)
							})}
						</ul>
					}
				</article>
			</section>
		</main>
	)
})

export default DataPage

