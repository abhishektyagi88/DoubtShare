import { configureStore } from "@reduxjs/toolkit";

import UsersSlice from "./usersSlice";


const store = configureStore({
    reducer : {
        users : UsersSlice,
    }
})

export default store;