import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 30px 130px;
    height: 200px;
    background: #111111;
    color: #ffffff;

    @media (max-width: 1600px) {
        padding: 30px 80px;
    }

    @media (max-width: 1500px) {
        padding: 30px 50px;
    }

    @media (max-width: 1000px) {
        padding: 30px 70px;
    }
    @media (max-width: 700px) {
        padding: 30px 130px;
    }

    @media (max-width: 600px) {
        padding: 30px 80px;
    }
    @media (max-width: 500px) {
        padding: 30px 50px;
    }
    @media (max-width: 400px) {
        padding: 30px 30px;
    }
    @media (max-width: 330px) {
        padding: 30px 20px;
    }
`