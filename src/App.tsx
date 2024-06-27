import React from 'react'
import Cart from './component/Cart'
import ListProduct from './component/ListProduct'

export default function App() {
  return (
    <div  style={{display:"flex", justifyContent:"space-evenly"}}>
      <Cart></Cart>
      <ListProduct></ListProduct>
    </div>
  )
}