import styled from "styled-components";
import {ReactComponent as basket} from '../../assets/icons/basket.svg'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #111111;
    padding: 0 130px;
    box-sizing: border-box;

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

const Logo = styled.h3`
    font-size: 23px;
    color: white;
`

const Link = styled.p`
    font-size: 16px;
    color: white;
`

const Wrapper = styled.div`
    position: relative;
`

const Basket = styled(basket)`

`

const Counter = styled.p`
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 14px;
    width: 20px;
    height: 20px;
    color: white;
    background: #46A358;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    
`



export {Container, Logo, Link, Wrapper, Basket, Counter}