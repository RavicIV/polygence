import * as actions from "../actions/spendings";
import { currencies } from "../utils/constants";

export const polygenceInitialState = {
  newSpending: {
    description: "",
    amount: "",
    currency: currencies[0],
  },
  spendings: [],
  error: "",
};

export default function spendingsReducer(
  state = polygenceInitialState,
  action
) {
  switch (action.type) {
    case actions.GET_SPENDINGS_SUCCESS: {
      return {
        ...state,
        spendings: action.data.data,
        error: "",
      };
    }
    case actions.GET_SPENDINGS_FAILURE: {
      return {
        ...state,
        spendings: [],
        error: Object.values(action.err.response.data).toString(),
      };
    }
    case actions.SET_NEW_SPENDING: {
      return {
        ...state,
        newSpending: {
          description: "",
          amount: 0,
          currency: currencies[0],
        },
        error: "",
      };
    }
    case actions.SET_NEW_SPENDING_SUCCESS: {
      return {
        ...state,
        spendings: [...state.spendings, action.data.data],
        error: "",
      };
    }
    case actions.SET_NEW_SPENDING_FAILURE: {
      console.log(Object.values(action.err.response.data))
      return {
        ...state,
        newSpending: {
          description: "",
          amount: 0,
          currency: currencies[0],
        },
        error: Object.values(action.err.response.data).toString(),
      };
    }
    default:
      return state;
  }
}
