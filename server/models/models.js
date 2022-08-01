import { sequelize } from '../utils/db.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define('user', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	email: {
		type: DataTypes.STRING, unique: true,
	},
	password: {
		type: DataTypes.STRING
	},
	role: {
		type: DataTypes.STRING, defaultValue: "USER"
	},
	name: {
		type: DataTypes.STRING, allowNull: true
	},
})

const AdminArticle = sequelize.define('article', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	title: {
		type: DataTypes.STRING, allowNull: false
	},
	article: {
		type: DataTypes.TEXT, allowNull: false
	},
	img: {
		type: DataTypes.STRING, allowNull: true
	},
	idx: {
		type: DataTypes.INTEGER, allowNull: true
	}
})

const Candidate = sequelize.define('candidate', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	name: {
		type: DataTypes.STRING, allowNull: false
	},
	phone: {
		type: DataTypes.STRING, allowNull: false
	},
	info: {
		type: DataTypes.STRING, allowNull: false
	},
})

const Contact = sequelize.define('contact', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	name: {
		type: DataTypes.STRING, allowNull: false
	},
	mail: {
		type: DataTypes.STRING, allowNull: false
	},
	text: {
		type: DataTypes.STRING, allowNull: false
	},
})
const IsNewContact = sequelize.define('isnewcontact', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	isnew: {
		type: DataTypes.BOOLEAN, allowNull: false
	},
})
const IsNewCandidat = sequelize.define('isnewcandidat', {
	id: {
		type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
	},
	isnew: {
		type: DataTypes.BOOLEAN, allowNull: false
	},
})

export const models = {
	User,
	AdminArticle,
	Candidate,
	Contact,
	IsNewContact,
	IsNewCandidat,
}
