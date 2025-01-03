import styled, { keyframes } from "styled-components";

// Animação de escalonamento para a imagem
const scale = keyframes`
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
`

// Container de fundo, com imagem de fundo e efeitos de sobreposição
export const Background = styled.div`
    background-image: url(${(props) => props.$img}); // Imagem de fundo recebida como props
    height: 100vh; // Altura de 100% da viewport
    background-position: center; // Centraliza a imagem de fundo
    background-size: cover; // Faz a imagem cobrir todo o container
    display: flex;
    align-items: center; // Alinha os itens no centro verticalmente
    justify-content: center; // Alinha os itens no centro horizontalmente
    position: relative;

    &::before{
        content: ''; // Cria uma camada de sobreposição
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); // Sobreposição semitransparente preta
    }

    &::after {
        content: ''; // Cria um gradiente na parte inferior
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 7.5rem;
        background-image: linear-gradient(to top, #0F0F0F, rgba(0, 0, 0, 0)); // Gradiente que vai desaparecendo
    }

    img {
        animation: ${scale} 0.5s linear; // Aplica animação de escalonamento à imagem
    }
`

// Container principal que organiza o layout de itens
export const Container = styled.div`
    display: flex;
    flex-direction: row; // Organiza os itens na horizontal
    justify-content: space-around; // Espaça os itens igualmente ao longo do eixo horizontal
    align-items: center; // Centraliza os itens no eixo vertical
    height: 100%; // Preenche 100% da altura disponível
    max-width: 93.75rem; // Limita a largura máxima do container
`

// Seção de informações sobre o filme ou série
export const Info = styled.div`
    z-index: 2; // Garante que o conteúdo fique acima de outros elementos
    padding: 1.25rem; // Adiciona preenchimento interno
    width: 50%; // Largura de 50% da tela para o conteúdo

    h1 {
        font-size: 5rem; // Tamanho grande para o título
        font-weight: 700; // Peso da fonte para destacar o título
        color: #FFFFFF; // Cor branca para o texto
    }

    p {
        font-size: 1.25rem; // Tamanho médio para a descrição
        font-weight: 600; // Peso da fonte para a descrição
        color: #FFFFFF; // Cor branca para o texto
        margin: 1.875rem 0 1.25rem; // Margens em torno do parágrafo
        text-align: justify; // Justifica o texto
    }
`

// Container para os botões, exibindo-os com espaço entre eles
export const ContainerButton = styled.div`
    display: flex;
    gap: 1.25rem; // Espaçamento entre os botões
    margin-top: 1.875rem; // Adiciona margem acima do container de botões
`

// Container para o poster da imagem, com bordas arredondadas
export const Poster = styled.div`
    z-index: 2; // Garante que a imagem fique acima de outros elementos

    img {
        width: 25rem; // Define o tamanho da imagem
        border-radius: 30px; // Arredonda as bordas da imagem
    }
`