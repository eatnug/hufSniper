import {
  toggleModal,
  addTracking,
  delTracking,
  TOGGLE_MODAL,
  ADD_TRACKING,
  DEL_TRACKING
} from "./actions";

const modal = (isModal = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !isModal;
    default:
      return isModal;
  }
};

const trackingList = (trackingList = [], action) => {
    switch (action.type){
        case ADD_TRACKING:
            return [...trackingList, action.course]
        case DEL_TRACKING:
            return trackingList.filter( cur => cur.CN !== action.CN )
        default:
            return trackingList
    }
}

export default reducer = (state = {}, action) => {
  return {
    isModal: modal(state.isModal, action),
    trackingList: trackingList(state.trackingList, action)
  };
};
