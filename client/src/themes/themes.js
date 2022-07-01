import { createContext } from "react"


export const themes = {
	ligth: {
		text: '#ccff00',
		isActive: true,
		outline: '10px solid #ccff00',
		backgroundBtn: '#075497',
		textBlue: '#ccff00',
		background:  '#ccff00',
	},
	dark: {
		text: '#fb262c',
		isActive: false,
		outline: '10px solid #fb262c',
		backgroundBtn: '#fb262c',
		textBlue: '#075497',
		background: '#fff',
	}
}

export const ThemesContext = createContext(themes.ligth)


//#0cf2ff