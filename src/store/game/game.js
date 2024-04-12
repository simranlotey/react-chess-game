import { Colors, figuress } from "../../config/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: Colors.WHITE,
  figures: figuress,
  isGameStarted: false,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeFigurePosition: (state, action) => {
      state.figures[action.payload.figure.id].x = action.payload.x;
      state.figures[action.payload.figure.id].y = action.payload.y;
    },
    removeFigure: (state, action) => {
      delete state.figures[action.payload.id];
    },
    setGameStarted: (state, action) => {
      state.isGameStarted = action.payload;
    }
  }
});

export const { setColor, changeFigurePosition, removeFigure, setGameWon, resetGame, setGameStarted } = game.actions;

export const selectFigures = (state) => state.game.figures;
export const selectIsGameStarted = (state) => state.game.isGameStarted;

export default game.reducer;
