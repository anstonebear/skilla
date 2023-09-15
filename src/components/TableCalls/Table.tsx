/* eslint-disable no-constant-condition */
/* eslint-disable no-mixed-spaces-and-tabs */
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import { useGetAllCalls } from '@/hooks/useGetAllCalls'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import AudioPlayer from '../Audio/AudioPlayer'
import { SkeletonTable } from '../SkeletonForTable/Skeleton'
import { Button } from '../ui/button'

export const TableDemo = () => {
	const { calls } = useTypedSelector(state => state.filter)

	const { data, isFetching } = useGetAllCalls(calls)

	return (
		<Table className='mt-4 bg-white rounded-xl pr-5'>
			<TableHeader>
				<TableRow className=' border-t-2'>
					<TableHead className='w-[50px]'>Тип</TableHead>
					<TableHead className='w-[50px]'>Время</TableHead>
					<TableHead className='w-[150px]'>Сотрудник</TableHead>
					<TableHead className='ml-auto'>Звонок</TableHead>
					<TableHead className=' text-center'>Источник </TableHead>
					<TableHead className='text-center'>Оценка</TableHead>
					<TableHead className='text-right'>Длительность</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{isFetching ? (
					<>
						{Array.from(new Array(10)).map((_, i) => (
							<SkeletonTable key={i} />
						))}
					</>
				) : (
					data &&
					data?.results.map(item => (
						<TableRow
							key={item.id}
							className='py-2 max-w-[1400px] hover:bg-hover_table cursor-pointer'
						>
							<TableCell className='font-medium'>
								{item.in_out === 0 ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
									>
										<path
											d='M18.5217 7.17704L17.3447 6L7.66957 15.6751V10.1739H6V18.5217H14.3478V16.8522H8.84661L18.5217 7.17704Z'
											fill='#002CFB'
										/>
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
									>
										<path
											d='M6.00023 17.3447L7.17728 18.5217L16.8524 8.8466V14.3478H18.522V5.99999L10.1741 5.99999V7.66955L15.6754 7.66955L6.00023 17.3447Z'
											fill='#28A879'
										/>
									</svg>
								)}
							</TableCell>
							<TableCell className='font-medium'>{item.date}</TableCell>
							<TableCell>
								<Avatar>
									<AvatarImage src={item.person_avatar} />
								</Avatar>
							</TableCell>
							<TableCell className='flex gap-2 items-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
								>
									<path
										d='M3.21778 6.92444C4.49778 9.44 6.56 11.4933 9.07556 12.7822L11.0311 10.8267C11.2711 10.5867 11.6267 10.5067 11.9378 10.6133C12.9333 10.9422 14.0089 11.12 15.1111 11.12C15.6 11.12 16 11.52 16 12.0089V15.1111C16 15.6 15.6 16 15.1111 16C6.76444 16 0 9.23556 0 0.888889C0 0.4 0.4 0 0.888889 0H4C4.48889 0 4.88889 0.4 4.88889 0.888889C4.88889 2 5.06667 3.06667 5.39556 4.06222C5.49333 4.37333 5.42222 4.72 5.17333 4.96889L3.21778 6.92444Z'
										fill='#ADBFDF'
									/>
								</svg>
								{item.from_number}
							</TableCell>
							<TableCell className='text-center'>
								{item.partner_data.name}
							</TableCell>
							<TableCell className='text-center'>
								<Button className='bg-white text-btn_bg border-hover_select border'>
									Распознать
								</Button>
							</TableCell>
							<TableCell className='text-right px-5'>
								<AudioPlayer data={item} />
							</TableCell>
						</TableRow>
					))
				)}
			</TableBody>
		</Table>
	)
}
