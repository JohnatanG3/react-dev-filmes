import styled from "styled-components";

export const Continaer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18.75rem;
    height: 25rem; /* Altura fixa para o contêiner */

    img {
        border-radius: 30px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-top: .9375rem;
    }

    h3{
        color: #FFFFFF;
        margin-top: .9375rem;
        text-align: center;
    }
`