// Importando as funcionalidades 'styled' e 'css' do 'styled-components' para criar os componentes estilizados
import styled, { css } from "styled-components";

// Definição dos estilos base para o botão
const buttonStyles = css`
    border: 3px solid #FFFFFF; // Borda branca
    background-color: transparent; // Fundo transparente
    color: #FFFFFF; // Cor do texto branca
    border-radius: 30px; // Bordas arredondadas
    padding: .625rem 1.25rem; // Espaçamento interno (padding)
    cursor: pointer; // O cursor se torna uma mãozinha ao passar por cima
    font-size: 1.25rem; // Tamanho da fonte
    font-weight: 500; // Peso da fonte (semi-negrito)

    // Estilos para o estado de hover (quando o mouse passa sobre o botão)
    &:hover {
        background-color: #FFFFFF; // Cor de fundo branca
        color: #FF0000; // Cor do texto vermelha
        transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out; // Animação de transição suave
    }

    // Estilos para o estado de active (quando o botão é clicado)
    &:active {
        opacity: 0.9; // Leve transparência ao ser pressionado
        transform: scale(0.9); // O botão é levemente reduzido
    }
`

// Definindo o componente ButtonWhite, que usa os estilos base
export const ButtonWhite = styled.button`
    ${buttonStyles} // Aplica os estilos base definidos acima
`

// Definindo o componente ButtonRed, que também usa os estilos base, mas com algumas alterações
export const ButtonRed = styled.button`
    ${buttonStyles} // Aplica os estilos base definidos acima
    background-color: #FF0000; // Fundo vermelho
    border: 4px solid transparent; // Borda transparente
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%); // Sombra leve vermelha ao redor do botão

    // Estilos para o estado de hover no botão vermelho
    &:hover {
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%); // Sombra mais intensa ao passar o mouse
        background-color: #FF0000; // Mantém o fundo vermelho
        color: #FFFFFF; // Cor do texto branca
        transition: box-shadow 0.5s ease-in-out; // Animação suave para a transição da sombra
    }
`