import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "guleroglu",
    fullName: "mustafa guleroglu",
    avatar:
      "https://pbs.twimg.com/profile_images/1626172947722383368/7RHpOvGW_400x400.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "guleroglu",
      fullName: "mustafa guleroglu",
      avatar:
        "https://pbs.twimg.com/profile_images/1626172947722383368/7RHpOvGW_400x400.jpg",
    },
    {
      id: 2,
      username: "aragorn",
      fullName: "mustafa guleroglu",
      avatar:
        "https://pbs.twimg.com/profile_images/1626172947722383368/7RHpOvGW_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (
        state.currentAccount.id &&
        action.payload === state.currentAccount.id
      ) {
        this._setCurrentAcoount(false);
      }
    },
    _setCurrentAcoount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAcoount } = auth.actions;
export default auth.reducer;
