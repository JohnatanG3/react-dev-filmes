import styled, { keyframes } from "styled-components";

// Animação de escala para os elementos
const scale = keyframes`
    from {
        transform: scale(0);  // Começa no tamanho 0
    }

    to {
        transform: scale(1);  // Vai para o tamanho original (1)
    }
`

// Estilização de fundo com imagem e gradiente
export const Background = styled.div`
    background-image: url(${(props) => props.$image}); // A imagem de fundo é recebida como prop
    height: 50vh; // Altura do fundo é 50% da altura da janela
    background-position: center; // A imagem fica centralizada
    background-size: cover; // A imagem ocupa toda a área do fundo
    background-repeat: no-repeat; // A imagem não se repete
    position: relative; // Define o posicionamento para o gradiente e o overlay

    // Cria um overlay semitransparente
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); // Cor preta com 50% de opacidade
    }

    // Cria um gradiente na parte inferior do fundo
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 7.5rem; // Altura do gradiente
        background-image: linear-gradient(to top, #0F0F0F, rgba(0, 0, 0, 0)); // Gradiente de preto para transparente
    }
`

// Container centralizado que envolve a imagem e as informações
export const Container = styled.div`
    display: flex;
    justify-content: center; // Centraliza o conteúdo
    align-items: flex-start; // Alinha os itens ao topo
    height: 100%; // Ocupa toda a altura
    max-width: 93.75rem; // Define a largura máxima do container
    margin-top: -100px; // Levanta o container para cima, sobrepondo o fundo
`

// Estilização da área onde a imagem do filme fica
export const Cover = styled.div`
    padding: 1.25rem; // Espaçamento interno
    display: flex;
    align-items: flex-start; // Alinha a imagem ao topo
    height: 100%; // Ocupa toda a altura
    z-index: 5; // Garante que a imagem fique acima dos outros elementos

    img {
        width: 25rem; // Define a largura da imagem
        border-radius: 30px; // Bordas arredondadas
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px; // Sombra suave ao redor da imagem
        animation: ${scale} 0.5s linear; // Anima a escala da imagem com a animação definida acima
    }
`

// Estilização da área de informações do filme (título, descrição, etc.)
export const Info = styled.div`
    padding: 1.25rem;
    width: 50%; // A largura ocupa 50% do container
    z-index: 5; // Garante que a área de informações fique acima da imagem
    display: flex;
    align-items: flex-start; // Alinha o conteúdo ao topo
    flex-direction: column; // Organiza o conteúdo em coluna

    h2 {
        font-size: 3.125rem; // Tamanho do título
        font-weight: 700; // Peso da fonte
        color: #FFFFFF; // Cor branca para o texto
    }

    p {
        font-size: 1.25rem; // Tamanho do texto
        font-weight: 700; // Peso da fonte
        color: #FFFFFF; // Cor branca para o texto
        margin-top: 1.25rem 1.875rem; // Margem superior e inferior
        text-align: justify; // Alinha o texto de forma justificada
    }
`

// Estilização da área de filmes relacionados (ou vídeos)
export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column; // Organiza os elementos em coluna
    align-items: center; // Centraliza os itens
    justify-content: center; // Centraliza os itens verticalmente
    padding: 1.25rem;
    width: 100%; // Largura total

    div {
        display: flex;
        flex-direction: column; // Organiza os itens dentro do div em coluna
        max-width: 62.5rem; // Define a largura máxima do container
        width: 100%; // Largura total
        height: 100%; // Ocupa toda a altura disponível
        margin: 1.25rem 0; // Margem vertical entre os vídeos
    }

    h4 {
        color: #FFFFFF; // Cor do título dos vídeos
        font-size: 1.25rem; // Tamanho do texto
        font-weight: 700; // Peso da fonte
        margin-bottom: .625rem; // Margem inferior
    }

    iframe {
        border: none; // Remove a borda do iframe (vídeo do YouTube)
    }
`