import styled from "styled-components";

export const Container = styled.div`
    min-height: 6.25rem;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .625rem 3.125rem;
    background-color: ${(props) => (props.$changeBackground ? '#000000' : 'transparent')};
    transition: background-color 0.6s ease-in-out;

    img {
        width: 25%;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 3.125rem;
`

export const Li = styled.li`
    color: #FFFFFF;
    font-weight: 600;
    cursor: pointer;
    font-size: 1.75rem;
    position: relative;

    a {
        color: #FFFFFF;
        text-decoration: none;
    }

    &::after {
        content: '';
        height: .1875rem;
        width: ${(props) => (props.$isActive ? '100%' : 0)};
        background-color: #189B20;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`