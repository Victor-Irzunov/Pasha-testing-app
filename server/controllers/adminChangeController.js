// import { v4 as uuidv4 } from 'uuid'
// import path from 'path'
import { models } from '../models/models.js'
import { ApiError } from '../error/ApiError.js'
// import { type } from 'os'
// import { URL } from 'url'


class AdminChangeController {



	async editOrder(req, res, next) {
		try {
			// const data = req.body
			// for (let i of data) {
			// const index = data.indexOf(i)
			// await models.AdminArticle.update({ idx: index }, { where: { id: i.id } })
			const art = await models.AdminArticle.findAll({ where: { id: i.id } })
			console.log('art----->: ', art)
			// if (art) {
			// 	art.idx = 5

			// 	await art.save()
			// } else {
			// 	console.log('тут ошибк')
			// }

			// }

			// return res.json({ message: `Сохранено успешно` })
			return res.status(200).json(art)
		}
		catch (e) {
			console.log('e....-.....> ', e)
			next(ApiError.badRequest(e.message))
		}
	}


}

export const adminChangeController = new AdminChangeController()

