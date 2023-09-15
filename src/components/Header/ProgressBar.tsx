import { cn } from '@/lib/utils'
import { IProgressBarProps } from '@/types/ProgresBar.interface'
import { FC } from 'react'
import styles from '../../styles/Header.module.scss'
import { Progress } from '../ui/progress'

const ProgressBar: FC<IProgressBarProps> = ({
	text,
	className,
	progressBarNumber,
	color,
	textHead
}) => {
	return (
		<div className='flex flex-col min-w-[164px] gap-2'>
			<div className={styles.header__progressBars__text}>
				{textHead}
				<h6 className={cn(className)}>{text}</h6>
			</div>
			<Progress value={progressBarNumber} className={color} />
		</div>
	)
}

export default ProgressBar
