import { actions } from '@/store/filtersSlice/filterSlice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useAppDispatch } from './useTypedSelector'

const rootActions = {
	...actions
}

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

