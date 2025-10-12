import styled from "styled-components";

export const SMain = styled.main`
    width: 100%;
    background-color: #eaeef6;
`;

export const SMainBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`;

export const SMainContent = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`;

export const SLoadingMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    font-size: 20px;
    color: #94a6be;
    font-weight: 500;
`;
