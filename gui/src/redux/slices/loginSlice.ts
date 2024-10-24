import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
      uid: '',
      userName: '',
      avatar: ''
    },
    reducers: {
      setUid: (state, action: PayloadAction<string>) => {
        state.uid = action.payload || '';
      },
      setBaseInfo: (state, {
        payload: { userName, avatar },
      }: PayloadAction<{ userName: string; avatar: string }>) => {
        state.userName = userName || '';
        state.avatar = avatar || '';
      },
    },
  });
  
  export const {
    setUid,
  } = loginSlice.actions;
  export default loginSlice.reducer;