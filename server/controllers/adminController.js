import { v4 as uuidv4 } from 'uuid'
import path from 'path'
import { models } from '../models/models.js'
import { ApiError } from '../error/ApiError.js'
// import { type } from 'os'
import { URL } from 'url'


class AdminController {

	async create(req, res, next) {
		try {
			let { title, article, } = req.body


			const img = req.files
			if (img) {
				const __dirname = decodeURI(new URL('.', import.meta.url).pathname)
				let fileName = uuidv4() + ".jpg"
				img.img.mv(path.resolve(__dirname, '..', 'static', fileName))
				await models.AdminArticle.create({ title, article, img: fileName })
			} else {
				await models.AdminArticle.create({ title, article })
			}

			return res.status(201).json({
				message: `Статья успешно добалена`
			})
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getAll(req, res, next) {
		try {
			const articles = await models.AdminArticle.findAll()

			return res.status(200).json(articles)
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async deleteOne(req, res, next) {
		try {
			const id = req.params
			await models.AdminArticle.destroy({ where: { id: id.id } })
			return res.json({ message: `Статья успешно удалена` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}

	}

	async getOne(req, res, next) {
		try {
			const id = req.params
			const articles = await models.AdminArticle.findOne({ where: { id: id.id } })
			return res.status(200).json(articles)
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}


	async changeOrderArticles(req, res, next) {
		try {
			const data = req.body

			for (let i of data) {
				const index = data.indexOf(i)
				await models.AdminArticle.update({ idx: index }, { where: { id: i.id } })
			}

			return res.status(200).json({ message: `Сохранено успешно` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}


	async editOneArticle(req, res, next) {
		try {
			let { title, article, id } = req.body
			const img = req.files
			if (img) {
				const __dirname = decodeURI(new URL('.', import.meta.url).pathname)
				let fileName = uuidv4() + ".jpg"
				img.img.mv(path.resolve(__dirname, '..', 'static', fileName))
				await models.AdminArticle.update({ title, article, img: fileName }, { where: { id } })
			} else {
				await models.AdminArticle.update({ title, article, img: null }, { where: { id } })
			}
			return res.json({ message: `Изменено успешно` })
		}
		catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}





}

export const adminController = new AdminController()

