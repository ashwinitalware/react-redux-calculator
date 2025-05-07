import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  input: string;
}

const initialState: CalculatorState = { input: '' };

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateInput(state, action: PayloadAction<string>) {
      state.input += action.payload;
    },
    clearInput(state) {
      state.input = '';
    },
    toggleSign(state) {
      if (state.input.startsWith('-')) {
        state.input = state.input.slice(1);
      } else if (state.input !== '') {
        state.input = '-' + state.input;
      }
    },
    applyPercent(state) {
      try {
        const expr = state.input
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-');
        const result = eval(expr) / 100;
        state.input = parseFloat(result.toPrecision(12)).toString();
      } catch {
        state.input = 'Error';
      }
    },
    calculateResult(state) {
      try {
        const expr = state.input
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/−/g, '-');
        const raw = eval(expr);
        if (!isFinite(raw)) {
          state.input = 'Cannot divide by 0';
          return;
        }
        state.input = parseFloat(raw.toPrecision(12)).toString();
      } catch {
        state.input = 'Error';
      }
    },
  },
});

export const {
  updateInput,
  clearInput,
  toggleSign,
  applyPercent,
  calculateResult,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
