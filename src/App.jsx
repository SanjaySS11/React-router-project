import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './main/Navbar';
import Home from './main/Home';
import About from './main/About';
import Research from './main/Research';
import Service from './main/service';
import Contact from './main/Contact';
import Footer from './main/Footer';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /> <Home /> <Footer/> </>
    },

    {
      path: '/about',
      element: <><Navbar /> <About /> <Footer/></>
    },

    {
      path: '/research',
      element: <><Navbar /> <Research /> <Footer/></>
    },
    {
      path: '/service',
      element: <><Navbar /> <Service /> <Footer/></>
    },
    {
      path: '/contact',
      element: <><Navbar /> <Contact /> <Footer/></>
    },

   
   

  ])

  return (
    <>

      <RouterProvider router={router} />
    </>

  )
}

export default App
