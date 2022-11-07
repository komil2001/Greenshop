import React, { useContext, useState } from 'react'
import { Slider } from 'antd';
import {FlowerContext} from '../../context/Flowers'
import { Card, Container, Title, Wrapper } from './style'

export const Products = () => {

    const [state, dispatch] = useContext(FlowerContext)
    const [disabled, setDisabled] = useState(false);

    // const onChange = (checked) => {
    //   setDisabled(checked);
    // };
   
  return (
    <Container>
        <Title>Products</Title>
        <Slider range defaultValue={[20, 50]} min={10} max={500} disabled={disabled} />
        <Wrapper>
                {
                    state.data.map((value) => {
                        return(
                            <Card key={value.id}>
                                {
                                    value.discount && <Card.Discount>13% OFF</Card.Discount>
                                }
                                
                                <Card.HeartIconWrapper>
                                    {
                                        value.like ? <Card.HeartRed onClick={() => dispatch({type: 'heart', payload: {id: value.id}})}  /> : <Card.Heart onClick={() => dispatch({type: 'heart', payload: {id: value.id}})} />
                                    }
                                    
                                    
                                </Card.HeartIconWrapper>
                                <Card.ImageWrapper>
                                    <Card.Img src={value.img} />
                                </Card.ImageWrapper>
                                <Card.Title>{value.title}</Card.Title>
                                <Card.PriceWrapper>
                                    <Card.Price>${value.discount==null? value.price : ((value.price / 100) * (100-value.discount)).toFixed()  }</Card.Price>
                                    {
                                        value.discount && <Card.OriginalPrice>${value.price}</Card.OriginalPrice>
                                    }
                                    
                                </Card.PriceWrapper>
                                <Card.Footer>
                                    {
                                        value.addtocart ? <Card.Button onClick={() => dispatch({type:'delete', payload: {id: value.id}})} >Cancel</Card.Button> : <Card.Button onClick={() => dispatch({type:'add', payload: {id: value.id}})}>Add To Cart</Card.Button>
                                    }
                                    
                                     
                                    <Card.BookmarkWhite />
                                    {/* <Card.BookmarkBlack /> */}
                                </Card.Footer>
                            </Card>
                        )
                    
                    })
                }

        </Wrapper>
    </Container>
  )
}
