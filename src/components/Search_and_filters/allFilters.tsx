import { FC } from 'react'
import SelectCalls from './Select'
import DefaultFilter from './defaultFilte'

const AllFilters: FC = () => {
	return (
		<div className='flex gap-7'>
			<DefaultFilter title='Все' titleDesc='типы' />
			<DefaultFilter title='Все' titleDesc='сотрудники' />
			<SelectCalls />
			<DefaultFilter title='Все' titleDesc=' источники' />
			<DefaultFilter title='Все' titleDesc='оценки' />
			<DefaultFilter title='Все' titleDesc='ошибки' />
		</div>
	)
}

export default AllFilters
