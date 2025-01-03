import styled, { keyframes }  from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${(props) => props.$img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before{
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

    img {
        animation: ${scale} 0.5s linear;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 93.75rem;
`

export const Info = styled.div`
    z-index: 2;
    padding: 1.25rem;
    width: 50%;

    h1 {
        font-size: 5rem;
        font-weight: 700;
        color: #FFFFFF;
    }

    p {
        font-size: 1.25rem;
        font-weight: 600;
        color: #FFFFFF;
        margin: 1.875rem 0 1.25rem;
        text-align: justify;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    gap: 1.25rem;
    margin-top: 1.875rem;
`

export const Poster = styled.div`
    z-index: 2;

    img {
        width: 25rem;
        border-radius: 30px;
    }
`