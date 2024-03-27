export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const COMPLETED_ITEM = 'COMPLETED_ITEM';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function deleteItem(item) {
  return {
    type: DELETE_ITEM,
    payload: item
  };
}

export function completedItem(item) {
  return {
    type: COMPLETED_ITEM,
    payload: item
  };
}