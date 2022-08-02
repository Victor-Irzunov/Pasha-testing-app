// import { v4 as uuidv4 } from 'uuid'
// import path from 'path'
import { models } from '../models/models.js'
import { ApiError } from '../error/ApiError.js'
// import { type } from 'os'
// import { URL } from 'url'


class AdminChangeController {



	async editOrder(req, res, next) {
		try {
			const data = req.body
			for (let i in data) {
				// const index = data.indexOf(i)
				const a = await models.AdminArticle.update({ idx: data[i] }, { where: { id: i } })
				// const art = await models.AdminArticle.findAll({ where: { id: 6} })
				// if (art) {
				// 	art.idx = 9

				// 	await art.save()
				// } else {
				// 	console.log('тут ошибк')
				// }
				// return res.json({ message: a })
			}

			return res.json({ message: `Сохранено успешно` })

		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}


}

export const adminChangeController = new AdminChangeController()

