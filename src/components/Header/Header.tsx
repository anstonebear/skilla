import { FC } from 'react'
import Container from '../../Providers/Container'
import arrow_down from '../../assets/arrow_down.svg'
import avatar from '../../assets/avatar.jpg'
import search from '../../assets/search.svg'
import { days, months } from '../../constant/Days'
import styles from '../../styles/Header.module.scss'
import { Avatar, AvatarImage } from '../ui/avatar'
import ProgressBar from './ProgressBar'

const Header: FC = () => {
	const date = new Date()
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.header__wrapper}>
					<div className={styles.header__date}>
						<div className=''>{days[date.getDay()]},</div>
						<div className={styles.header__date_day}>{date.getDate()}</div>
						<div className=''>{months[date.getMonth()]}</div>
					</div>
					<div className={styles.header__progressBars}>
						<div className={styles.header__progressBars__wrapper}>
							<ProgressBar
								text='20 из 30'
								className='text-green_bar'
								progressBarNumber={66}
								color='bg-green_bar'
								textHead={'Новые звонки'}
							/>
							<ProgressBar
								text='40%'
								className='text-yellow'
								progressBarNumber={40}
								color='bg-yellow'
								textHead={'Качество разговоров'}
							/>
							<ProgressBar
								text='67%'
								className='text-red'
								progressBarNumber={40}
								color='bg-red'
								textHead={'Конверсия В Заказ'}
							/>
						</div>
					</div>

					<div className='flex items-center gap-[46px] ml-[169px]'>
						<a href='#'>
							<img
								src={search}
								alt='search'
								className='max-w-[32px] max-height-[48px]'
							/>
						</a>
						<div className='flex gap-1 items-center'>
							<div className='text-[15px]  text-gray-500 text-gray flex w-[242px]'>
								ИП Сидорова Александра Михайловна
							</div>
							<img src={arrow_down} alt='arrow_down' />
						</div>
					</div>
					<div className={`${styles.header__avatar} 'items-center ml-17px`}>
						<Avatar>
							<AvatarImage src={avatar} />
						</Avatar>
						<img src={arrow_down} alt='arrow_down' />
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
