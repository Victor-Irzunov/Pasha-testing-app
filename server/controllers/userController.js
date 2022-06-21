import { ApiError } from "../error/ApiError.js";
import bcrypt from "bcrypt"
import { models } from "../models/models.js"
import jwt from 'jsonwebtoken'
// import { v4 as uuidv4 } from 'uuid'
import { validationResult } from "express-validator";


const generateJwt = (id, email, role) => {
	return jwt.sign(
		{ id, email, role },
		process.env.SECRET_KEY,
		{ expiresIn: '24h' }
	)
}

class UserController {
	async registration(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.badRequest("Ошибка валидации", errors.array()))
			}
			const { email, password, role, name } = req.body
			if (!email || !password) return next(ApiError.badRequest('Некорректный email или password'))

			const candidate = await models.User.findOne({ where: { email } })
			if (candidate) {
				return next(ApiError.badRequest('Пользователь с таким email уже существует'))
			}
			const admin = await models.User.findOne({ where: { role: 'ADMIN' } })
			if (admin) {
				return next(ApiError.badRequest('Админисратор уже существует'))
			}
			const hashPassword = await bcrypt.hash(password, 5)
			// const activationLink = uuidv4()

			const user = await models.User.create({ email, role, password: hashPassword, name })

			const token = generateJwt(user.id, user.email, user.role)


			// await mail.sendMailAction(email, `${process.env.API_URL}/api/user/activate/${activationLink}`)

			return res.json({ token })

		} catch (err) {
			console.log('🚀-error: ', err)
		}

	}

	async login(req, res, next) {
		try {
			const { email, password } = req.body
			const user = await models.User.findOne({ where: { email } })
			if (!user) {
				return next(ApiError.internal('Пользователь не найден'))
			}

			let comparePassword = bcrypt.compareSync(password, user.password)
			if (!comparePassword) {
				return next(ApiError.internal('Указан неверный пароль'))
			}

			const token = generateJwt(user.id, user.email, user.role)
			return res.json({ token })
		} catch (err) {
			console.log('🚀🚀-error: ', err)
		}
	}

	async check(req, res, next) {
		try {
			const token = generateJwt(req.user.id, req.user.email, req.user.role)
			return res.json({ token })
		} catch (err) {
			console.log('🚀🚀🚀-error: ', err)
		}
	}

	async activate(req, res, next) {
		try {
			const activationLink = req.params.link
			const user = await models.User.findOne({ activationLink })
			console.log('user', user)
			if (!user) {
				throw new Error('Неккоректная ссылка активации')
			}
			user.isActivated = true
			await user.save()

			return res.redirect(process.env.CLIENT_URL) //edit CLIENT_URL (react)

		} catch (e) {
			console.log('🚀🚀🚀🚀-error: ', e)
		}
	}
}

export const userController = new UserController()
