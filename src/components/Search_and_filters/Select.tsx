/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActions } from '@/hooks/useActions'
import { FC, useState } from 'react'

export interface IArraySelect {
	id: number
	title: string
}

const arr: IArraySelect[] = [
	{ id: 0, title: 'Входящте звонки' },
	{ id: 1, title: 'Исходящие звонки' },
	{ id: 2, title: 'Все звонки' }
]
const SelectCalls: FC = () => {
	const { toggleCalls } = useActions()
	const date = new Date()
	const [open, setOpen] = useState<boolean>(false)
	const [filterName, setFilterName] = useState<string>('Все Звонки')
	console.log(date.toLocaleDateString())
	const onClickListSubmit = (item: IArraySelect) => {
		toggleCalls(item.id)
		setOpen(false)
		setFilterName(item.title)
	}
	return (
		<div className={`${open ? 'bg-white' : ''}  `}>
			<div className={`flex items-center gap-1 `}>
				<span
					onClick={() => setOpen(!open)}
					className='text-gray hover:text-btn_bg cursor-pointer'
				>
					{filterName}
				</span>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='18'
					height='21'
					viewBox='0 0 18 21'
					fill='none'
				>
					<path
						d='M13.9001 8.60117L13.3991 8.10024C13.3324 8.03334 13.2555 8 13.1685 8C13.0818 8 13.0049 8.03334 12.9382 8.10024L9.00005 12.0382L5.06209 8.10034C4.9953 8.03345 4.91844 8.00011 4.83161 8.00011C4.74475 8.00011 4.66789 8.03345 4.60113 8.10034L4.10024 8.60131C4.03334 8.66806 4 8.74492 4 8.83179C4 8.91858 4.03345 8.99544 4.10024 9.06219L8.76957 13.7316C8.83633 13.7984 8.91322 13.8318 9.00005 13.8318C9.08688 13.8318 9.16364 13.7984 9.23036 13.7316L13.9001 9.06219C13.9668 8.99541 14 8.91854 14 8.83179C14 8.74492 13.9668 8.66806 13.9001 8.60117Z'
						fill='#ADBFDF'
					/>
				</svg>
			</div>
			{open && (
				<div className='absolute z-10 bg-white rounded-sm'>
					<ul>
						{arr.map(item => (
							<li
								className='cursor-pointer hover:text-btn_bg hover:opacity-80 hover:bg-hover_select'
								onClick={() => onClickListSubmit(item)}
								key={item.id}
							>
								{item.title}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default SelectCalls
