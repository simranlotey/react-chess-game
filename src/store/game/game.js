import { figuress, Colors } from "../../config/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: Colors.WHITE,
  figures: figuress,
  gameWon: null,
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
    setGameWon: (state, action) => {
      state.gameWon = action.payload;
    },
    resetGame: (state) => {
      state.gameWon = initialState.gameWon;
      state.figures = initialState.figures;
      state.isGameStarted = false;
    },
    setGameStarted: (state, action) => {
      state.isGameStarted = action.payload;
    },
  },
});

export const {
  changeFigurePosition,
  removeFigure,
  setGameWon,
  resetGame,
  setGameStarted,
} = game.actions;

export const selectFigures = (state) => state.game.figures;
export const selectGameWon = (state) => state.game.gameWon;
export const selectColor = (state) => state.game.color;

export default game.reducer;
