// Importa a biblioteca styled-components para criação de componentes estilizados.
import styled from "styled-components";

// Criação de um componente Container estilizado com flexbox
export const Container = styled.div`
    // Utiliza o modelo de layout flexível com direção de coluna
    display: flex;
    flex-direction: column;

    // Define a ordem de empilhamento do elemento
    z-index: 99;
`

// Criação de um componente Info estilizado para exibir informações
export const Info = styled.div`
    // Utiliza o modelo de layout flexível com direção de coluna
    display: flex;
    flex-direction: column;

    // Estilização do título h1 dentro do componente Info
    h1 {
        // Define a cor do texto como branco
        color: #FFFFFF;
        // Define o tamanho da fonte
        font-size: 3.125rem;
        // Alinha o texto no centro
        text-align: center;
        // Define a margem superior do título
        margin-top: 6.25rem;
    }
`