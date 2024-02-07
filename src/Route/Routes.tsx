import { Route } from 'react-router-dom';
import React from 'react'
import CartListPage from '../components/Cart';
import FancyTransactionPage from '../components/Transaction';
import SignUp from '../components/SignUp';
import ConnectedLogin from '../components/Login';

const RoutesPath = () => {
  return (
    <div>
       {/* <Route path="/" component={Home} /> */}
        <Route path="/Cart" Component={CartListPage} />
        <Route path="/Transaction" Component={FancyTransactionPage} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/login" Component={ConnectedLogin} />


    </div>
  )
}

export default RoutesPath