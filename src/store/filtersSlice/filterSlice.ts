import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IFiltersInitialValue {
	calls: number
}
const initialState: IFiltersInitialValue = {
	calls: 2
}

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		toggleCalls: (state, { payload }: PayloadAction<number>) => {
			state.calls = payload
		}
	}
})

export const { reducer, actions } = filtersSlice
