import { ADD_ITEM, DELETE_ITEM, COMPLETED_ITEM } from '../actions/actions';

const initialState = { items: [] };

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
    case DELETE_ITEM:
        return {
            ...state,
            items: state.items.filter(task => task.id !== action.payload)
        };
    case COMPLETED_ITEM:
        return {
            ...state,
            items: state.items.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            )
        };
    default:
      return state;
  }
}

export default rootReducer;