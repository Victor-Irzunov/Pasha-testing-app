import { ApiError } from "../error/ApiError.js";
import { models } from "../models/models.js"


class CandidateController {
	async message(req, res, next) {
		try {
			let { name, phone, info } = req.body
			await models.Candidate.create({ name, phone, info })
			return res.status(200).json({ message: 'Письмо отправлено' })
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
	async getAll(req, res, next) {
		try {
			const candidates = await models.Candidate.findAll()
			return res.status(200).json(candidates)
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}

	async newCandidat(req, res, next) {
		try {
			await models.IsNewCandidat.create({ isnew: true })
			return res.status(200).json({ message: 'Новый кандидат' })
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
	async delCandidat(req, res, next) {
		try {
			await models.IsNewCandidat.destroy({ where: { isnew: true } })
			return res.status(200).json({ message: 'Прочитан кандидат' })
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
	async getCandidat(req, res, next) {
		try {
			const isContact = await models.IsNewCandidat.findAll()
			return res.status(200).json(isContact)
		} catch (err) {
			next(ApiError.badRequest(err.message))
		}
	}
}

export const candidateController = new CandidateController()
