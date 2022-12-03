
import './App.css';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/Routes/Routes';



function App() {

  return (
    <div className='bg-green-100'
    // style={{
    // background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://unsplash.com/photos/twEy5TouJLg)`,
    //   backgroundColor:""
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   width: '100vw',
    //   height: 'auto',

    // }}
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
