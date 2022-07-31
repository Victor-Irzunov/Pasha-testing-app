import React from 'react'
import { Reorder } from "framer-motion"

function DataItemAdmin({ obj, openModalData, setId, user }) {
	return (
		<Reorder.Item
			value={obj}
			key={obj.id}
			onClick={() => {
				openModalData()
				setId(obj.id)
			}}
			whileDrag={{
				scale: 1.1,
				boxShadow: '8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D, 5px 5px 15px 5px rgba(255,76,30,0)23',
			}}
		>
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
		</Reorder.Item>
	)
}

export default DataItemAdmin