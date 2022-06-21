import { ApiError } from "../error/ApiError.js";
import { models } from "../models/models.js"


class ContactController {
	async message(req, res, next) {
		try {
			let { name, mail, text } = req.body
			await models.Contact.create({ name, mail, text })
			return res.status(200).json({ message: 'Письмо отправлено' })
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
	async getAll(req, res, next) {
		try {
			const contacts = await models.Contact.findAll()
			return res.status(200).json(contacts)
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
	async newContact(req, res, next) {
		try {
			await models.IsNewContact.create({ isnew: true })
			return res.status(200).json({ message: 'Новый контакт' })
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
	async delContact(req, res, next) {
		try {
			await models.IsNewContact.destroy({ where: { isnew: true } })
			return res.status(200).json({ message: 'Прочитан контакт' })
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
	async getContact(req, res, next) {
		try {
			const isContact = await models.IsNewContact.findAll()
			return res.status(200).json(isContact)
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
}

export const contactController = new ContactController()
