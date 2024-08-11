import { Link, useRouteError } from 'react-router-dom';
import './Error.scss';
import { useState } from 'react';

function Error() {
  const error = useRouteError();
  if(error.status == 404){
    return (
      <div className='error'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to='/'>Go to home</Link>
      </div>
    )
  } else{
    return (
      <div className='error'>
        <h2> Something Went Wrong :(</h2>
        <Link to='/'>Go to home</Link>
      </div>
    )
  }


}

export default Error
