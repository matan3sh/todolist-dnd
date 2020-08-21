import storageService from '../services/storageService';

const initialState = {
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        list: action.payload,
      };
    case 'UPDATE_ITEM':
      const copyItem = { ...action.payload, done: !action.payload.done };
      const updatedList = state.list.map((item) =>
        item.id === copyItem.id ? copyItem : item
      );
      storageService.store('todo-list', updatedList);
      return {
        ...state,
        list: updatedList,
      };
    case 'ADD_ITEM':
      const newList = [...state.list, action.payload];
      storageService.store('todo-list', newList);
      return {
        ...state,
        list: newList,
      };
    case 'EDIT_ITEM':
      const editedList = state.list.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      storageService.store('todo-list', editedList);
      return {
        ...state,
        list: editedList,
      };
    case 'DELETE_ITEM':
      const afterDeletedList = state.list.filter(
        (item) => item.id !== action.payload
      );
      storageService.store('todo-list', afterDeletedList);
      return {
        ...state,
        list: afterDeletedList,
      };
    case 'DRAG_RESULT':
      const copyList = [...state.list];
      const item = copyList.splice(action.payload.droppableIndexStart, 1);
      copyList.splice(action.payload.droppableIndexEnd, 0, ...item);
      storageService.store('todo-list', copyList);
      return {
        ...state,
        list: copyList,
      };
    default:
      return state;
  }
}
