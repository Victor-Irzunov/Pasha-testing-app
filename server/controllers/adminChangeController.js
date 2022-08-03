import { models } from '../models/models.js'
import { ApiError } from '../error/ApiError.js'


class AdminChangeController {



	async editOrder(req, res, next) {
		try {
			const data = req.body
			for (let i in data) {
				await models.AdminArticle.update({ idx: data[i] }, { where: { id: i } })
			}

			return res.json({ message: `Сохранено успешно` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}


}

export const adminChangeController = new AdminChangeController()

