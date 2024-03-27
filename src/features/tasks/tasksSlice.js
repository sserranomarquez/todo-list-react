import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
        state.items.push(action.payload)
    },
    deleteItem: (state, action) => {
        return {
            ...state,
            items: state.items.filter(task => task.id !== action.payload)
        }
    },
    completeItem: (state, action) => {
        return {
            ...state,
            items: state.items.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
        )}
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, completeItem } = tasksSlice.actions

export default tasksSlice.reducer