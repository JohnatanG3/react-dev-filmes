import styled from "styled-components";

// Estiliza o fundo do modal (Background)
export const Background = styled.div`
    height: 100vh; // A altura do fundo será igual à altura da janela de visualização
    width: 100vw; // A largura do fundo será igual à largura da janela de visualização
    z-index: 4; // Coloca o fundo acima de outros elementos com menor valor de z-index
    background-color: rgba(0, 0, 0, 0.7); // Cor de fundo preta com opacidade de 0.7 (semi-transparente)
    position: absolute; // O fundo ocupa a posição absoluta para cobrir toda a tela
    display: flex; // Usado para centralizar o conteúdo do modal
    align-items: center; // Centraliza verticalmente
    justify-content: center; // Centraliza horizontalmente
`;

// Estiliza o container do modal (Container)
export const Container = styled.div`
    background: #000000; // Cor de fundo preta para o container do modal
    width: 70%; // A largura do modal será 70% da largura da tela
    display: flex; // Usado para centralizar o conteúdo dentro do modal
    justify-content: center; // Centraliza o conteúdo horizontalmente
    align-items: center; // Centraliza o conteúdo verticalmente
    position: fixed; // O modal ficará fixo na tela
    padding: 3.125rem; // Espaçamento interno de 3.125rem
    max-width: 75rem; // Largura máxima do modal será de 75rem

    iframe {
        border: none; // Remove a borda do iframe (vídeo embutido)
    }
`;

// Estiliza o botão de fechar (CloseButton)
export const CloseButton = styled.button`
    position: absolute; // Posiciona o botão de fechar no canto superior direito
    top: 1rem; // Distância do topo
    right: 1rem; // Distância da direita
    background: transparent; // Torna o fundo do botão transparente
    border: none; // Remove a borda do botão
    font-size: 2rem; // Define o tamanho da fonte para o botão
    color: white; // Cor do texto do botão (branco)
    cursor: pointer; // Torna o cursor um ponteiro quando passa sobre o botão

    &:hover {
        color: red; // Muda a cor do botão para vermelho quando o cursor passa sobre ele
        transition: color 0.3s; // Transição suave para a mudança de cor
    }

    &:active {
        opacity: 0.9; // Diminui a opacidade quando o botão é pressionado
        transform: scale(0.9); // Faz o botão diminuir um pouco de tamanho quando pressionado
    }
`;

// Estiliza um botão adicional (Button) com alinhamento flexível
export const Button = styled.button`
    align-items: flex-end; // Alinha o conteúdo do botão no final (parte inferior)
    justify-content: flex-start; // Alinha o conteúdo do botão no início (parte esquerda)
`;