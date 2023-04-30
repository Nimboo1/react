import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchTextState {
  searchText: string;
}

const initialState: SearchTextState = {
  searchText: '',
};

export const searchTextSlice = createSlice({
  name: 'SearchText',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export default searchTextSlice.reducer;
