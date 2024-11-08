import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import './App.css'
import Accueil from './page/Accueil'
import Calendar from './page/Calendar'
import CardUser from './page/CardUser'
import Contact from './page/Contact'
import PageError from './page/PageError'
import Portfolio from './page/Portfolio'
import ToDoList from './page/ToDoList'
import MainNav from './components/MainNav'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<PageError/>,
    children:[
      {
        path:'',
        element:<Accueil/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/portflio',
        element:<Portfolio/>,
        children:[
          {
            path:'/portflio/carduser',
            element:<CardUser/>
          },
          {
            path:'/portflio/calendar',
            element:<Calendar/>
          },
          {
            path:'/portflio/todolist',
            element:<ToDoList/>
          }
        ]
      }
    ]
  }
])

function Root(){
  return <>
    <header>
      <h1>FaireTonRoooter.com</h1>
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
    <RouterProvider router={router}/>
 </>
 
}

export default App
