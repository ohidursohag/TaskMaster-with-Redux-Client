import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   name: 'Md Sohag',
   email:'sohag@gamil.com',
   tasks:[]
}

const userSlice = createSlice({
   name:'user',
   initialState,
   reducers:{}
})
// export {} = userSlice.actions;
export default userSlice.reducer