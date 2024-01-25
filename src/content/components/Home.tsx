import React, { useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

function Home() {
  useEffect(() => {
    axios.get('/api/v1/products').then(payload => console.log(payload.data));
  });
  return (
    <div>
      <Header />
      <div className={'text-center'}>
        <p> Start coding here </p>
      </div>
    </div>
  );
}


export default Home;
