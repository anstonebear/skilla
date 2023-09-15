import { AudioService } from '@/service/audio.service'
import { useQuery } from '@tanstack/react-query'

export const useGetAudio = (record: string, id: number) => {
	const { data: audio } = useQuery(
		['getAudio', record, id],
		() => AudioService.getAudio(record, id),
		{
			select: ({ data }) => data,
			enabled: !!record
		}
	)

	return { audio }
}
