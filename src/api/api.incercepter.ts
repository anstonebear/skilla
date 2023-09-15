import axios from 'axios'
import { getContentType, getContentTypeAudio } from './api.helper'

export const instance = axios.create({
	baseURL: 'https://api.skilla.ru/mango',
	headers: getContentType()
})

export const getAudioInstance = axios.create({
	baseURL: 'https://api.skilla.ru/mango',
	headers: getContentTypeAudio()
})
instance.interceptors.request.use(async config => {
	if (config.headers) {
		config.headers.Authorization = `Bearer testtoken`
	}
	return config
})

getAudioInstance.interceptors.request.use(async config => {
	if (config.headers) {
		config.headers.Authorization = `Bearer testtoken`
	}
	return config
})
