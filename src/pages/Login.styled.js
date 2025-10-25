import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #eaeef6;
`;

export const Container = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ModalTitle = styled.div`
    margin-bottom: 20px;
    h2 {
        font-size: 20px;
        font-weight: 700;
        line-height: 1.5;
        text-align: center;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const Input = styled.input`
    padding: 4.5px;
    border: 0.7px solid #d0cece;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.5;

    &::placeholder {
        color: #94a6be;
    }
`;

export const Button = styled.button`
    margin-top: 10px;
    padding: 4.5px;
    font-size: 14px;
    background-color: #565eef;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.2s;
    line-height: 1.5;

    &:hover {
        background-color: #33399b;
    }
`;

export const FormGroup = styled.div`
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    color: #94a6be66;
    letter-spacing: -0.01em;

    a {
        margin-left: 5px;
        color: #94a6be66;
        text-decoration: underline;
    }
`;
