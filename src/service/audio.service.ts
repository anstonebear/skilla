import { instance } from '@/api/api.incercepter'

export type MyType = File

export const AudioService = {
	async getAudio(record: string, id: number) {
		return instance<string>({
			url: `/getRecord?record=${record}&partnership_id=${id}`,
			method: 'POST'
		})
	}
}
