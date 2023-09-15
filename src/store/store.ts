import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as filterReducer } from './filtersSlice/filterSlice'

const reducers = combineReducers({
	filter: filterReducer
})

export const store = configureStore({
	reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
