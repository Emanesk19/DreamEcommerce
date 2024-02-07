import { SET_FIELD_ERROR, UPDATE_FORM_FIELD } from "./constants";

const initialState = {
    email: '',
    password: '',
    errors: {},
  };
  
  export const formReducer = (state = initialState, action:any) => {
    console.log("from reducer",action.payload);
    
    switch (action.type) {
      case UPDATE_FORM_FIELD:
        return {
          ...state,
          [action.payload.field]: action.payload.value,
          errors: {
            ...state.errors,
            [action.payload.field]: '',
          },
        };
      case SET_FIELD_ERROR:
        return {
          ...state,
          errors: {
            ...state.errors,
            [action.field]: action.error,
          },
        };
      default:
        return state;
    }
  };
  
  export default formReducer;