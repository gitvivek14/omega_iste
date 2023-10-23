import {combineReducers} from "redux"
import userSlice from "../slices/userSlice"

const rootReducer = combineReducers({
    // your reducers here
    user:userSlice
})

export default rootReducer;
