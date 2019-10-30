// action types

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADD_TRACKING = "ADD_TRACKING";
export const DEL_TRACKING = "DEL_TRACKING";

// action creators

export const toggleModal = () => {
  return { type: TOGGLE_MODAL };
};

export const addTracking = course => {
  return {
    type: ADD_TRACKING,
    course
  };
};

export const delTracking = CN => {
  return {
    type: DEL_TRACKING,
    CN
  }
}
