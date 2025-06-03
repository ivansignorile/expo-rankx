import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  user: {},
  locale: 'en',
};

const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    save: (state, action) => {
      console.log("entro in save", action.payload);
      return {
        user: action.payload,
        onboardingUser: action.payload,
        onboardingstep: 0,
        pet: {},
      };
    },
    logout: (state) => {
      return {
        user: {},
        onboardingstep: -1,
        onboardingUser: {},
        pet: {},
      };
    },
    setLocale: (state, action) => {
      return {
        ...state,
        locale: action.payload,
      };
    },
    dispatchError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    dispatchFeedback: (state, action) => {
      return {
        ...state,
        feedback: action.payload
      }
    },
    dispatchAction: (state, action) => {
      return {
        ...state,
        action: action.payload
      }
    },
    setCurrentFigher: (state, action) => {
      return {
        ...state,
        fighter: action.payload,
      };
    },
    setCurrentPlace: (state, action) => {
      return {
        ...state,
        place: action.payload,
      };
    },
    addToCart: (state, action) => {
      return {
        ...state,
        cart: action.payload,
      };
    }
  },
});

export const {
  save,
  logout,
  setLocale,
  dispatchError,
  dispatchFeedback,
  dispatchAction,
  setCurrentFigher,
  setCurrentPlace,
  addToCart
} = counterSlice.actions;
export default counterSlice.reducer;
