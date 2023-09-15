'use client'

import { addDays, format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

export function DatePickerWithPresets() {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-[280px] justify-start text-left font-normal bg-white',
						!date && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className='mr-2 h-4 w-4' />
					{date ? format(date, 'PPP') : <span>Выберите дату</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='flex w-auto flex-col space-y-2 p-2'>
				<Select
					onValueChange={value => setDate(addDays(new Date(), parseInt(value)))}
				>
					<SelectTrigger>
						<SelectValue placeholder='Период' />
					</SelectTrigger>
					<SelectContent position='popper'>
						<SelectItem value='0'>Сегодня</SelectItem>
						<SelectItem value='-1'>Вчера</SelectItem>
						<SelectItem value='-3'>За 3 дня</SelectItem>
						<SelectItem value='-7'>За неделю</SelectItem>
					</SelectContent>
				</Select>
				<div className='rounded-md border'>
					<Calendar mode='single' selected={date} onSelect={setDate} />
				</div>
			</PopoverContent>
		</Popover>
	)
}
