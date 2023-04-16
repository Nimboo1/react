import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import CardData from '../../types/CardData';

interface CardsState {
  cards: CardData[];
  isLoading: boolean;
}

const initialState: CardsState = {
  cards: [],
  isLoading: false,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<CardData[]>) {
      state.cards = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default cardsSlice.reducer;
