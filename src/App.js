import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Routes/Routes';



function App() {

  return (
    <div className='bg-gradient-to-b from-teal-700 to-black'
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
