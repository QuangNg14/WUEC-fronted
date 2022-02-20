import createDataContext from "./createDataContext";

const initialState = {
  name: "",
};

const nameReducer = (state, action) => {
  switch (action.type) {
    case "FIND_NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      break;
  }
};

const findName = (dispatch) => {
  return (name) => {
    dispatch({ type: "FIND_NAME", payload: name });
  };
};

export const { Context, Provider } = createDataContext(
  nameReducer,
  { findName },
  initialState
);
