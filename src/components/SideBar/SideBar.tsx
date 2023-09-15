import { ISideBar } from '@/types/sidebarArray.interface'
import { FC, useState } from 'react'
import logo from '../../assets/logo.svg'
import myCase from '../../assets/sidebar/case.svg'
import check from '../../assets/sidebar/check.svg'
import document from '../../assets/sidebar/documents.svg'
import graph from '../../assets/sidebar/graphik.svg'
import library from '../../assets/sidebar/library.svg'
import mail from '../../assets/sidebar/mail.svg'
import man from '../../assets/sidebar/man.svg'
import people from '../../assets/sidebar/people.svg'
import phone from '../../assets/sidebar/phone.svg'
import settings from '../../assets/sidebar/settings.svg'
import styles from '../../styles/SideBar.module.scss'
import { Button } from '../ui/button'

const sidebarArray: ISideBar[] = [
	{
		id: 1,
		title: 'Итоги',
		logo: graph
	},
	{
		id: 2,
		title: 'Заказы',
		logo: check
	},
	{
		id: 3,
		title: 'Сообщения',
		logo: mail
	},
	{
		id: 4,
		title: 'Звонки',
		logo: phone
	},
	{
		id: 5,
		title: 'Контрагенты',
		logo: people
	},
	{
		id: 6,
		title: 'Документы',
		logo: document
	},
	{
		id: 7,
		title: 'Исполнители',
		logo: man
	},
	{
		id: 8,
		title: 'Отчеты',
		logo: myCase
	},
	{
		id: 9,
		title: 'База знаний',
		logo: library
	},
	{
		id: 10,
		title: 'Настройки',
		logo: settings
	}
]

const SideBar: FC = () => {
	const [toggle, setToggle] = useState(4)
	return (
		<section className={styles.sidebar}>
			<div className={styles.sidebar__wrapper}>
				<a href='#' className='pt-5 pl-3'>
					<img src={logo} alt='logo' />
				</a>
				<nav className={styles.sidebar__nav}>
					{sidebarArray.map(item => (
						<button
							key={item.id}
							className={`px-[14px] py-[22px] flex justify-between ${
								toggle === item.id ? 'bg-activeSidebar ' : ''
							}`}
							onClick={() => setToggle(item.id)}
						>
							<div className='flex gap-3 items-center'>
								<a href='#'>
									<img src={item.logo} alt={item.title} />
								</a>
								<p className='text-[16px] text-white'>{item.title}</p>
							</div>
							{toggle === item.id ? (
								<svg
									className='flex items-end'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<g filter='url(#filter0_d_17704_2057)'>
										<circle cx='12' cy='9' r='4' fill='#FFD500' />
									</g>
									<defs>
										<filter
											id='filter0_d_17704_2057'
											x='0'
											y='0'
											width='24'
											height='24'
											filterUnits='userSpaceOnUse'
											colorInterpolationFilters='sRGB'
										>
											<feFlood floodOpacity='0' result='BackgroundImageFix' />
											<feColorMatrix
												in='SourceAlpha'
												type='matrix'
												values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
												result='hardAlpha'
											/>
											<feOffset dy='3' />
											<feGaussianBlur stdDeviation='4' />
											<feColorMatrix
												type='matrix'
												values='0 0 0 0 0.929412 0 0 0 0 0.854902 0 0 0 0 0.00392157 0 0 0 0.5 0'
											/>
											<feBlend
												mode='normal'
												in2='BackgroundImageFix'
												result='effect1_dropShadow_17704_2057'
											/>
											<feBlend
												mode='normal'
												in='SourceGraphic'
												in2='effect1_dropShadow_17704_2057'
												result='shape'
											/>
										</filter>
									</defs>
								</svg>
							) : (
								''
							)}
						</button>
					))}
				</nav>

				<div className='flex flex-col gap-8 mx-5'>
					<Button
						variant={'default'}
						className='flex gap-6 bg-btn_bg'
						size={'lg'}
					>
						<p>Добавить заказ</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
						>
							<path
								d='M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z'
								fill='#D8E4FB'
								fillOpacity='0.56'
							/>
						</svg>
					</Button>
					<Button className='flex gap-8 bg-btn_bg ' size={'lg'}>
						<p>Оплата</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							viewBox='0 0 30 30'
							fill='none'
						>
							<g clipPath='url(#clip0_17704_2127)'>
								<path
									d='M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM16.25 21.25H13.75V18.75H16.25V21.25ZM16.25 16.25H13.75V8.75H16.25V16.25Z'
									fill='#D8E4FB'
									fillOpacity='0.56'
								/>
							</g>
							<defs>
								<clipPath id='clip0_17704_2127'>
									<rect width='30' height='30' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</Button>
				</div>
			</div>
		</section>
	)
}

export default SideBar
