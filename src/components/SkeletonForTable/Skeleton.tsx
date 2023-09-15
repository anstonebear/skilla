import { Skeleton } from '@/components/ui/skeleton'
import { TableRow, TableCell } from '../ui/table'

export const SkeletonTable =() => {
	return (
		<TableRow className='py-2 max-w-[1400px]'>
			<TableCell>
				<Skeleton className='p-3  h-3 w-4'></Skeleton>
			</TableCell>
			<TableCell>
				<Skeleton className='p-3  h-3 w-20'></Skeleton>
			</TableCell>
			<TableCell>
				<Skeleton className='h-12 w-12 rounded-full'></Skeleton>
			</TableCell>
			<TableCell>
				<Skeleton className='h-12 w-[150px] rounded-full'></Skeleton>
			</TableCell>
			<TableCell>
				<Skeleton className='h-12 w-[150px] '></Skeleton>
			</TableCell>
			<TableCell>
				<Skeleton className='h-12 w-[150px] '></Skeleton>
			</TableCell>
			<TableCell className='text-right'>
				<Skeleton className='text-right h-12 w-[150px] '></Skeleton>
			</TableCell>
		</TableRow>
	)
}
