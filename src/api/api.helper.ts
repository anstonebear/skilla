export const getContentType = () => ({
	'Content-Type': 'application/json'
})

export const getContentTypeAudio = () => ({
	'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
	'Content-Transfer-Encoding': 'binary',
	'Content-Disposition': 'filename="record.mp3"'
})
