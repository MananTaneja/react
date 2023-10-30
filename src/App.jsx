// import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './pages/Home'
import Header from './Header'
import { useState, useEffect } from 'react'
import Restaurant from './pages/Restaurant'
import Checkout from './pages/Checkout'

function App() {

  const [data, setData] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/restaurants')
      .then(data => data.json())
      .then(resp => setData(resp))
      .catch(err => console.error(err)) \
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={data} />
    },
    {
      path: "/abc/:restaurantId",
      element: <Restaurant data={data} setItems={setItems} items={items} />
    },
    {
      path: "/checkout",
      element: <Checkout data={data} cartItems={items} setCartItems={setItems} />
    }
  ])

  console.log(items)

  return (
    <>
      <Header count={items.length} />
      <RouterProvider router={router} />
    </>
  )
}

export default App
