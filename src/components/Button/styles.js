import styled, {css} from "styled-components";

const buttonStyles = css`
    border: 3px solid #FFFFFF;
    background-color: transparent;
    color: #FFFFFF;
    border-radius: 30px;
    padding: .625rem 1.25rem;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 500;

    &:hover {
        background-color: #FFFFFF;
        color: #FF0000;
        transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    }

    &:active {
        opacity: 0.9;
        transform: scale(0.9);
    }
`

export const ButtonWhite = styled.button`
    ${buttonStyles}
`

export const ButtonRed = styled.button`
    ${buttonStyles}
    background-color: #FF0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover {
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background-color: #FF0000;
        color: #FFFFFF;
        transition:  box-shadow 0.5s ease-in-out;
    }
`