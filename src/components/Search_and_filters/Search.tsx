import { FC } from 'react'
import search from '../../assets/search.svg'

const Search: FC = () => {
	return (
		<div className='flex gap-3 items-center'>
			<img src={search} alt='search' />
			<p className='text-gray'>Поиск по звонкам</p>
		</div>
	)
}

export default Search
