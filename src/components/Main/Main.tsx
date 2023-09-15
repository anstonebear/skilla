import Container from '@/Providers/Container'
import { FC } from 'react'
import { DatePickerWithPresets } from '../FilterDate/Calendar'
import Price from '../Price/Price'
import SearchAndFilters from '../Search_and_filters/SearchAndFilters'
import { TableDemo } from '../TableCalls/Table'

const Main: FC = () => {
	return (
		<main className='mt-5 ml-4 min-w-[1440px]'>
			<Container>
				<div className='flex flex-col'>
					<div className='flex justify-end gap-12 items-center '>
						<Price />
						<DatePickerWithPresets />
					</div>
					<div className='pt-8'>
						<SearchAndFilters />
					</div>
					<div className=''>
						<TableDemo />
					</div>
				</div>
			</Container>
		</main>
	)
}

export default Main
