export const updateFormField = (field: string, value: string) => ({
    type: 'UPDATE_FORM_FIELD',
    payload: { field, value },
  });
  
  export const setFieldError = (field: string, error: string) => ({
    type: 'SET_FIELD_ERROR',
    payload: { field, error },
  });