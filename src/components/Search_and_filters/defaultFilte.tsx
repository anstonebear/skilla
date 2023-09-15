import { FC } from 'react'
import arrow from '../../assets/arrow_down.svg'

const DefaultFilter: FC<{ title: string; titleDesc: string }> = ({
	title,
	titleDesc
}) => {
	return (
		<div className='flex gap-1 items-center '>
			<a className='flex hover:text-btn_bg gap-2' href='#'>
				<p className='text-gray '>{title}</p>
				<p className='text-gray '> {titleDesc}</p>
			</a>
			<img src={arrow} alt='arrow' />
		</div>
	)
}

export default DefaultFilter
