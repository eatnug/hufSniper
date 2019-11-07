import {combineReducers} from "redux"
import isModal from "./isModal"
import courseReducer from "./courseReducer"

const reducer = combineReducers({
    isModal,
    courses: courseReducer
})

export default reducer