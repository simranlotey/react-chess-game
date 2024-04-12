import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game/game";

const store = configureStore({
  reducer: {
    game: gameReducer
  }
});

export default store;

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
