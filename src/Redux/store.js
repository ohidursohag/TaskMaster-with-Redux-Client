import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Fearures/Tasks/taskSlice'
import userReducer from './Fearures/user/userSlice'
const store = configureStore({
   reducer:{
      taskSlice: taskReducer,
      userSlice: userReducer,
   }
})


export default store