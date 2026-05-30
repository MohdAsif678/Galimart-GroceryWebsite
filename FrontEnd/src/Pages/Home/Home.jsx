import React, { useState } from 'react'
import './home.css'
import Catogory from '../../components/category/Catogory'
import Slider from '../../components/hero/Slider'
import GroceryDisplay from '../../components/groceryDisplay/GroceryDisplay'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div>
      <Slider/>
      <Catogory category={category} setCategory={setCategory}/>
      <GroceryDisplay category={category}/>
    </div>
  )
}

export default Home
