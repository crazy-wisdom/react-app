
import * as React from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';


const Error = () => {
  const pages = useSelector((state: { pages: any }) => state.pages);

  return (
    <>
      Testing error page { pages.name }.
    </>
  )
}

export default Error;
