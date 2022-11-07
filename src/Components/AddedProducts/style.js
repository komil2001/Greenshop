import styled from "styled-components";
import {ReactComponent as trash} from '../../assets/icons/delete.svg'
import {ReactComponent as plus} from '../../assets/icons/plus.svg'
import {ReactComponent as minus} from '../../assets/icons/minus.svg'

const Container = styled.div`
    width: 100%;
    width: 1000px;
    margin: auto;
    box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 30px;
    min-height: calc(100vh - 50px);
    @media (max-width: 1600px) {
        padding: 0px 80px;
    }

    @media (max-width: 1500px) {
        padding: 0px 50px;
    }

    @media (max-width: 1000px) {
        padding: 0px 70px;
    }
    @media (max-width: 700px) {
        padding: 0px 130px;
    }

    @media (max-width: 600px) {
        padding: 0px 80px;
    }
    @media (max-width: 500px) {
        padding: 0px 50px;
    }
    @media (max-width: 400px) {
        padding: 0px 30px;
    }
    @media (max-width: 330px) {
        padding: 0px 20px;
    }
`

Container.Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    margin-top: 30px;
`

Container.Title = styled.h4`
    padding: 0;
    margin: 0;
    margin-top: 10px;
    font-size: 24px;
    text-align: center;
`

const Product = styled.div`
    width: 100%;
    /* display: flex;
    align-items: center;
    background: #999999; */
    min-height: 300px;
    height: 100%;
`

Product.Table = styled.table`
    width: 100%;
`

Product.Thead = styled.thead`
    
    
`

Product.Tbody = styled.tbody`
    
    
`

Product.Tr = styled.tr`
height: 80px;
`

Product.Th = styled.th`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    color: #3D3D3D;

`



Product.Td = styled.td`
    
`

Product.ImageWrapper = styled.div`
    width: 70px;
    height: 70px;
    margin: auto;
`

Product.Img = styled.img`
    width: 100%;
    height: 100%;
`
Product.Title = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #3D3D3D;
    text-align: center;
`

Product.Price = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #727272;
    text-align: center;
`

Product.Quantity = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 10px;
    color: #3D3D3D;
    text-align: center;
`

Product.Total = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #46A358;
    text-align: center;
`
Product.TrashContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
Product.Trash = styled(trash)`
    margin: auto;
    :active {
        transform: scale(0.97);
    }
`

Product.Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

Product.IconWrapper = styled.div`
    width: 21.71px;
    height: 25px;
    background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
    border-radius: 29px;
    display: flex;
    justify-content: center;
    align-items: center;

    :active {
        transform: scale(0.97);
    }
`

Product.Plus = styled(plus)``
Product.Minus = styled(minus)``

Product.Buy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #46A358;
    border-radius: 3px;

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: #FFFFFF;
    box-sizing: border-box;

    :active {
        transform: scale(0.97);
    }
`

Product.TotalPrice = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    text-align: right;
    color: #46A358;
    padding: 0 50px;
`

export {Container, Product}