import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import './CKeditor.css'




function CKeditor({setTextArticle}) {
	


	const handleOnChange = (e, editor) => {
		// console.log(editor.getData())
		setTextArticle(editor.getData())
	}


	return (
		<div className='editor'>
			<CKEditor
				editor={ClassicEditor}
				onChange={handleOnChange}
			/>
		</div>
	)
}

export default CKeditor