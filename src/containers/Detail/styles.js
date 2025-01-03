import styled, { keyframes } from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${(props) => props.$image});
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 7.5rem;
        background-image: linear-gradient(to top, #0F0F0F, rgba(0, 0, 0, 0));
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 93.75rem;
    margin-top: -100px;
`

export const Cover = styled.div`
    padding: 1.25rem;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 5;

    img {
        width: 25rem;
        border-radius: 30px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        animation: ${scale} 0.5s linear;
    }
`

export const Info = styled.div`
    padding: 1.25rem;
    width: 50%;
    z-index: 5;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
        font-size: 3.125rem;
        font-weight: 700;
        color: #FFFFFF;
    }

    p {
        font-size: 1.25rem;
        font-weight: 700;
        color: #FFFFFF;
        margin-top: 1.25rem 1.875rem;
        text-align: justify;
    }
`

export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.25rem;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        max-width: 62.5rem;
        width: 100%;
        height: 100%;
        margin: 1.25rem 0;
    }

    h4 {
        color: #FFFFFF;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: .625rem;
    }

    iframe {
        border: none;
    }
`