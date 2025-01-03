import styled from "styled-components";

// Estilização do Container que envolve os gêneros
export const Container = styled.div`
    display: flex; // Exibe os itens de forma flexível
    margin-top: 1.875rem; // Margem superior para espaçamento
    gap: .625rem; // Espaço entre os itens
    cursor: pointer; // Indica que o cursor vai mudar ao passar por cima dos itens

    // Estilização dos elementos <span> dentro do Container
    span {
        padding: 0.5rem 1.125rem; // Espaçamento interno do <span>
        border: 2px solid #FFFFFF; // Borda branca
        border-radius: 30px; // Bordas arredondadas
        font-size: .75rem; // Tamanho da fonte
        font-weight: 600; // Peso da fonte
        background-color: #000000; // Cor de fundo preta
        color: #FFFFFF; // Cor da fonte branca
        display: flex; // Exibe o conteúdo com flexbox
        align-items: center; // Alinha verticalmente o conteúdo no centro
        justify-content: center; // Alinha horizontalmente o conteúdo no centro
        margin-bottom: .625rem; // Margem inferior

        // Efeito de hover para mudança de cor e fundo
        &:hover {
            background-color: #FFFFFF; // Altera a cor de fundo para branco
            color: #FF0000; // Altera a cor do texto para vermelho
            transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out; // Transição suave para as mudanças
        }

        // Efeito de ativo, quando o botão é pressionado
        &:active {
            opacity: 0.9; // Diminui a opacidade para indicar que o item foi pressionado
            transform: scale(0.9); // Reduz o tamanho do item levemente
        }
    }
`