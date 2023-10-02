import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "../reducers/cardslice";

export default configureStore({
    reducer: {
        card: cardReducer,
    },
    });
    