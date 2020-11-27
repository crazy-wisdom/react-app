
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Error from './pages/error';


const APP = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({
      type: 'pages',
      value: {
        name: 'your-preferable name'
      }
    });
  }, []);


  return (
    <Switch>
      <Route component={Error} />
    </Switch>
  )
}


export default APP;
