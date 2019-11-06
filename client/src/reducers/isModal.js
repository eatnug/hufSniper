const isModal = (state=false, action) => {
    switch(action.type){
        case "modalOn":
            return true
        case "modalOff":
            return false
        default:
            return state
    }
}

export default isModal