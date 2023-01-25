import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/reducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>{greeting}</h1>
      </div>
    </div>
  );
};

export default Greeting;
