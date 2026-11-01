
export const initialFormState = {
  values: {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    location: "",
  },
  touched: {},
  status: "idle",
  errorMessage: "",
};

export function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
      };

    case "MARK_TOUCHED":
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.field]: true,
        },
      };

    case "MARK_ALL_TOUCHED":
      return {
        ...state,
        touched: {
          fullName: true,
          email: true,
          phone: true,
          password: true,
        },
      };

    case "SUBMIT_START":
      return {
        ...state,
        status: "submitting",
        errorMessage: "",
      };

    case "SUBMIT_SUCCESS":
      return {
        ...state,
        status: "success",
      };

    case "SUBMIT_ERROR":
      return {
        ...state,
        status: "error",
        errorMessage: action.message,
      };

    default:
      return state;
  }
}
