// action types

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADD_WATCH = "ADD_WATCH";
export const ADD_COUNT = "ADD_COUNT"
// action creators

export const toggleModal = () => {
  return { type: TOGGLE_MODAL };
};

export const addCount = () => {
  return {type: ADD_COUNT}
}