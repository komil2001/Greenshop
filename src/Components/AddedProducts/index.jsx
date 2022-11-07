import React, { useContext } from 'react'
import { FlowerContext } from '../../context/Flowers'
import { Container, Product } from './style'

export const AddedProducts = () => {
    const [state, dispatch] = useContext(FlowerContext)
    console.log(state, 'addedproduct')
    let a = ''
  return (
    <Container>
        <Container.Title>Added Products</Container.Title>
        <Container.Wrapper>
            
                        <Product>
                            <Product.Table border='1'>
                                <Product.Thead>
                                    <Product.Tr>
                                        <Product.Th>Product</Product.Th>
                                        <Product.Th>Title</Product.Th>
                                        <Product.Th>Price</Product.Th>
                                        <Product.Th>Quantity</Product.Th>
                                        <Product.Th>Total</Product.Th>
                                        <Product.Th>Action</Product.Th>
                                    </Product.Tr>
                                </Product.Thead>
                                <Product.Tbody>
                                {   
                                    state.products.map((value) => {
                                        return(
                                            <Product.Tr  key={value.id}>
                                                <Product.Td>
                                                    <Product.ImageWrapper>
                                                        <Product.Img src={value.img} />
                                                    </Product.ImageWrapper>
                                                </Product.Td>
                                                <Product.Td>
                                                    <Product.Title>{value.title}</Product.Title>
                                                </Product.Td>
                                                <Product.Td>
                                                    <Product.Price>${ value.quantity>1?((value.price / 100) * (100-value.discount)).toFixed():value.price}</Product.Price>
                                                </Product.Td>
                                                <Product.Td>
                                                    <Product.Quantity>
                                                        <Product.IconWrapper>
                                                            <Product.Minus onClick={() => dispatch({type:'decrement', payload: {id: value.id}})} />
                                                        </Product.IconWrapper>
                                                        <Product.Quantity>{value.quantity}</Product.Quantity>
                                                        <Product.IconWrapper>
                                                            <Product.Plus  onClick={() => dispatch({type:'increment', payload: {id: value.id}})} />
                                                        </Product.IconWrapper>
                                                    </Product.Quantity>
                                                </Product.Td>
                                                <Product.Td>
                                                    <Product.Total>${ ((((value.price / 100) * (100-value.discount)).toFixed())*value.quantity)}</Product.Total>
                                                </Product.Td>
                                                <Product.Td>
                                                   
                                                    <Product.TrashContainer>
                                                        <Product.Trash onClick={() => dispatch({type:'delete', payload: {id: value.id}})} />
                                                    </Product.TrashContainer>
                                                </Product.Td>
                                            </Product.Tr>
                                     )
                                    })
                                }
                                </Product.Tbody>
                            </Product.Table>

                        </Product>
                   
            <Product.TotalPrice>Total: {a}</Product.TotalPrice>
            <Product.Buy>Buy</Product.Buy>
        </Container.Wrapper>
    </Container>
  )
}
