import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import './App.css'
import Accueil from './page/Accueil'
import Blog from './page/Blog'
import PageError from './page/PageError'
import MainNav from './components/MainNav'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<PageError/>,
    children:[
      {
        path:'',
        element:<Accueil/>,
        // errorElement:<PageError/>,
      },
      {
        path:'/blog',
        element:<Blog/>,
        // errorElement:<PageError/>
      }
    ]
  },
])
function Root(){
  return <>
    <header>
      <MainNav/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>

    </footer>
  </>
}

function App() {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App
