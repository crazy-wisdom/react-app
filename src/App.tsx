
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
import Demo from './pages/demo';


const APP = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {

    try {
      fetch(`${import.meta.env.SNOWPACK_PUBLIC_API_URL}`)
      .then(res => res.json())
      .then(
        (result) => {
          dispatch({
            type: 'pages',
            value: {
              name: `your-preferable ${result.title}`
            }
          });
        },

        (error) => {
        }
      )
    } catch (error) {
    }

  }, []);


  return (
    <Switch>
      <Route path={`/demo`} component={Demo} exact />
      <Route component={Error} />

    </Switch>
  )
}


export default APP;
