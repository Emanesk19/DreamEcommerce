export interface FormState {
    email: string;
    password: string;
    errors: Record<string, string>;
  }
  
  const initialState: FormState = {
    email: '',
    password: '',
    errors: {},
  };
  
  export const formReducer = (state = initialState, action: any): FormState => {
    switch (action.type) {
      case 'UPDATE_FORM_FIELD':
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case 'SET_FIELD_ERROR':
        return {
          ...state,
          errors: {
            ...state.errors,
            [action.payload.field]: action.payload.error,
          },
        };
      default:
        return state;
    }
  };