import styled from "styled-components"; // Importa o pacote 'styled-components' para criar componentes estilizados

// Definindo o Container estilizado
export const Container = styled.div`
    background-color: #000; // Define o fundo do container como preto
    padding: 0 1.25rem; // Adiciona padding nas laterais (esquerda e direita)

    h2 {
        color: #FFFFFF; // Define a cor do título como branco
        font-size: 1.5rem; // Define o tamanho da fonte como 1.5rem
        margin: 3.125rem 0 1.25rem 1.25rem; // Define as margens (topo, esquerda, inferior, direita)
    }

    .swiper-wrapper {
        display: flex; // Torna os slides do swiper exibidos em linha (flexível)
    }
`