import { FC } from 'react'
import Search from './Search'
import AllFilters from './allFilters'

const SearchAndFilters: FC = () => {
	return (
		<div className='flex items-center justify-between'>
			<Search />
			<AllFilters />
		</div>
	)
}

export default SearchAndFilters
