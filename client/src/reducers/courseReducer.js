const courseReducer = (state=[], action) => {
    switch(action.type){
        case "ADD_COURSE":
            return [
                ...state,
                action.course
            ]
        case "REM_COURSE":
            return state.filter(cur=>cur.info.courseNumber!=action.courseNumber)
        default:
            return state
    }
}

export default courseReducer