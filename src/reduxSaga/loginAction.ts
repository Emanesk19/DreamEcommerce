import {
    UPDATE_FORM_FIELD,
    SET_FIELD_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from './constants';
  
  export const updateFormField = (field: any, value: any) => ({
    type: UPDATE_FORM_FIELD,
    payload: { field, value },
  });
  
  export const setFieldError = (field:any, error:any) => {
    console.log('setFieldError action:', field, error);
    return {
      type: SET_FIELD_ERROR,
      field,
      error,
    };
  };
  
  export const loginRequest = (email:any, password:any , rememberMe:any) => {
    console.log('loginRequest action:', email, password);
    return {
      type: LOGIN_REQUEST,
      email,
      password,
      rememberMe
    };
  };
  
  export const loginSuccess = (role:any, redirectUrl:any) => {
    console.log('loginSuccess action:', role, redirectUrl);
    return {
      type: LOGIN_SUCCESS,
      role,
      redirectUrl,
    };
  };
  
  export const loginFailure = (error:any) => {
    console.log('loginFailure action:', error);
    return {
      type: LOGIN_FAILURE,
      error,
    };
  };