import React, { useContext } from 'react'
import { Footer } from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import { Products } from '../Components/Products'
import {Liked} from '../Components/Liked'
import { Container } from './style'
import { FlowerContext } from '../context/Flowers'
import {AddedProducts} from '../Components/AddedProducts'
 
export const Root = () => {
  const [state, dispatch] = useContext(FlowerContext)
  
  return (
    <Container>
        <Navbar />
        {
                state.basket ? (
                    <AddedProducts />
                ) : 
                (
                    <Products />
                )
        }
        <Liked/>
        <Footer />
    </Container>
  )
}
