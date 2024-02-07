import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import ReactHook from 'alova/react';
export const alovaInstance = createAlova({
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),
  responded: response => response.json()
});


export const getTransactioUrl = 'http://localhost:5182/api/transactions'

export function* loginSagas(action:any) : Generator {
  const { userName, password } = action;

const response:any = yield fetch('http://localhost:5182/api/account/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ UserName: userName, password }),
});
return response
}
