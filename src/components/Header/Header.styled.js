import styled from "styled-components";

export const SHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: #ffffff;
`;

export const SHeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;

export const SHeaderNav = styled.div`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SHeaderBtnNew = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

    a {
        color: #ffffff;
    }

    &:hover {
        background-color: #33399b;
    }
`;

export const SHeaderUserLink = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    height: 30px;
    /* padding: 0 8px; */
    font-size: 14px;
    color: #565eef;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    white-space: nowrap;

    &::after {
        content: "";
        display: inline-block;
        width: 6px;
        height: 6px;
        border-left: 1.9px solid #565eef;
        border-bottom: 1.9px solid #565eef;
        transform: rotate(-45deg);
        margin-left: 5px;
        pointer-events: none;
    }
`;

export const SHeaderLogo = styled.img`
    width: 85px;
`;

export const SHeaderLogoWrapper = styled.div`
    display: ${(props) => (props.isVisible ? "block" : "none")};

    a {
        display: inline-block;
    }
`;
