import React, { useContext } from 'react'
import { FlowerContext } from '../../context/Flowers'
import { Basket, Container, Counter, Link, Logo, Wrapper } from './style'

export const Navbar = () => {
  const [state, dispatch] = useContext(FlowerContext)
  return (
    <Container>
      <Logo>Fruits</Logo>
      <Link>Products</Link>
      <Wrapper onClick={() => dispatch({type: 'basket'})}>
        <Basket  />
        <Counter>{state.products.length}</Counter>
      </Wrapper>
    </Container>
  )
}
