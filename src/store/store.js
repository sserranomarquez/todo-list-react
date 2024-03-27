// import { createStore } from 'redux';

// import rootReducer from './reducers/reducers';

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from '../features/tasks/tasksSlice';

export default configureStore({
    reducer: {
      tasks: tasksSlice
    }
  })