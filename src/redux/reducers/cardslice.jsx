import { createSlice } from '@reduxjs/toolkit';
import { cardData } from '../../data/card_data';

const initialState = {
    cards: cardData
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload)
        },
        setSelectedCard: (state, action) => {
            const selectedId = action.payload;
            state.selectedCard = state.cards.find(card => card.id === selectedId);
          },
    }
})

export const { addCard, setSelectedCard } = cardSlice.actions;
export default cardSlice.reducer;
