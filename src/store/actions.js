import service from '../services/service';

export const loadList = () => async (dispatch) => {
  try {
    const res = await service.query();
    dispatch({ type: 'SET_LIST', payload: res });
  } catch (err) {
    console.log(err);
  }
};

export const sort = (properties) => async (dispatch) => {
  try {
    dispatch({ type: 'DRAG_RESULT', payload: { ...properties } });
  } catch (err) {
    console.log(err);
  }
};

export const updateList = (item) => async (dispatch) => {
  try {
    dispatch({ type: 'UPDATE_ITEM', payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const addItem = (text) => async (dispatch) => {
  try {
    const newItem = {
      id: service.makeId(),
      title: text,
      done: false,
      addedAt: new Date(),
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  } catch (error) {
    console.log(error);
  }
};

export const editItem = (item, text) => async (dispatch) => {
  try {
    const editedItem = {
      id: item.id,
      title: text,
      done: item.done,
      addedAt: item.addedAt,
    };
    dispatch({ type: 'EDIT_ITEM', payload: editedItem });
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  } catch (error) {
    console.log(error);
  }
};
