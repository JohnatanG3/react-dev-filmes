import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 1.875rem;
    gap: .625rem;
    cursor: pointer;

    span {
        padding: 0.5rem 1.125rem;
        border: 2px solid #FFFFFF;
        border-radius: 30px;
        font-size: .75rem;
        font-weight: 600;
        background-color: #000000;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: .625rem;
        
        &:hover {
            background-color: #FFFFFF;
            color: #FF0000;
            transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
        }

        &:active {
            opacity: 0.9;
            transform: scale(0.9);
        }
    }
`