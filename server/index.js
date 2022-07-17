
import dotenv, { config } from 'dotenv'
import express from 'express'
import chalk from 'chalk'
import cors from 'cors'
import { sequelize } from './utils/db.js'
import router from './routes/index.js'
import { models } from './models/models.js'
import errorHandler from './middleware/ErrorHandlingMiddleware.js'
import fileUpload from 'express-fileupload'
import path from 'path'
import { fileURLToPath } from 'url'
import compression from 'compression'
import helmet from 'helmet'



dotenv.config()

const PORT = process.env.PORT || config.get("port")

const app = express()

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)


app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use(compression())
app.use('/api', router)



app.use(
	helmet.contentSecurityPolicy({
		useDefaults: true,
		directives: {
			"script-src": ["'self'", "https://widget.replain.cc/dist/client.js"],
			"style-src": null,
		},
	})
);



if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, '../client', 'build')))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
	})
}



//: middleware c err обязательно в конце
app.use(errorHandler)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(chalk.cyan(`::::::::...The server is running on the port: ${PORT}...::::::::`)))

	} catch (err) {
		console.log('error start: ', err);
	}
}

start()
