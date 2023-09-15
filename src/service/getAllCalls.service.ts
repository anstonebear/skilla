import { instance } from '@/api/api.incercepter'
import { IGetAllCalls } from '@/types/getAllCalls'

export const callsService = {
	async getAllCalls(filters: string) {
		return instance<IGetAllCalls>({
			method: 'POST',
			url: `getList?${filters}`
		})
	}
}
