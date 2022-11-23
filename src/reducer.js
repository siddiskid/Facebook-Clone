export const initialState = {
  active: "home",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTIVE_HOME":
      return {
        ...state,
        active: action.active,
      };
    case "ACTIVE_PAGES":
      return {
        ...state,
        active: action.active,
      };
    case "ACTIVE_MOVIE":
      return {
        ...state,
        active: action.active,
      };
    case "ACTIVE_STORE":
      return {
        ...state,
        active: action.active,
      };
    case "ACTIVE_GROUPS":
      return {
        ...state,
        active: action.active,
      };
    default:
      return state;
  }
};

export default reducer;
