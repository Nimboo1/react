import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import FormCardData from '../../types/FormCardData';

interface FormCardState {
  cards: FormCardData[];
  isCardSent: boolean;
}

const initialState: FormCardState = {
  cards: [],
  isCardSent: false,
};

export const formCardSlice = createSlice({
  name: 'FormCard',
  initialState,
  reducers: {
    addFormCard(state, action: PayloadAction<FormCardData>) {
      state.cards.push(action.payload);
    },
    toggleCardSent(state, action: PayloadAction<boolean>) {
      return { ...state, isCardSent: action.payload };
    },
  },
});

export default formCardSlice.reducer;
