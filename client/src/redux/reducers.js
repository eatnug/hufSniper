import {toggleModal,addCount} from "./actions"

export const reducer = (state = {}, action) => {
    return {
        count: count(action),
        isModal: toggleModal(action)
    }
}