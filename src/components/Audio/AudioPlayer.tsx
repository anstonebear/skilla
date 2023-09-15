import { useGetAudio } from '@/hooks/useGetAudio'
import { IGetAllCallsItem } from '@/types/getAllCalls'
import { FC } from 'react'

export interface IPropsAudioPlayer {
	data: IGetAllCallsItem
}

const AudioPlayer: FC<IPropsAudioPlayer> = ({ data }) => {
   
	const { audio } = useGetAudio(data.record, Number(data.partnership_id))
	
	
	return (
		<>
			{audio ? (
				<audio src={audio} controls loop>
					{' '}
				</audio>
			) : (
				<p className=''>{data.time}</p>
			)}
		</>
	)
}

export default AudioPlayer
