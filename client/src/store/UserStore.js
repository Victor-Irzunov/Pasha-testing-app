import { makeAutoObservable } from 'mobx'       //следит за измениниями и перерендыватся

export default class UserStore {
	constructor() {
		this._isAuth = false
		this._user = {}
		this._userData = {}


		makeAutoObservable(this)
	}


	setIsAuth(bool) {
		this._isAuth = bool
	}
	setUser(user) {
		this._user = user
	}
	setData(data) {
		this._userData = data
	}


	get isAuth() {
		return this._isAuth
	}
	get user() {
		return this._user
	}
	get userData() {
		return this._userData
	}

}