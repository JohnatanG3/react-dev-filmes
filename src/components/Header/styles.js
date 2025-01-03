// Importando a biblioteca styled-components para criar componentes estilizados
import styled from "styled-components";

// Componente Container para o cabeçalho
export const Container = styled.div`
    min-height: 6.25rem; /* Definindo uma altura mínima para o cabeçalho */
    z-index: 99; /* Definindo a prioridade de sobreposição para garantir que o cabeçalho fique acima de outros elementos */
    position: fixed; /* Fixando o cabeçalho no topo da página */
    top: 0; /* Posicionando o cabeçalho no topo da tela */
    display: flex; /* Usando flexbox para distribuir os itens do cabeçalho */
    justify-content: space-between; /* Espaço entre os itens do cabeçalho (logo e menu) */
    align-items: center; /* Alinhando os itens do cabeçalho no centro verticalmente */
    padding: .625rem 3.125rem; /* Espaçamento interno do cabeçalho */
    background-color: ${(props) => (props.$changeBackground ? '#000000' : 'transparent')}; /* Alterando a cor de fundo dependendo do estado $changeBackground */
    transition: background-color 0.6s ease-in-out; /* Transição suave para a mudança da cor de fundo */

    img {
        width: 25%; /* Definindo a largura da imagem (logo) como 25% do tamanho do cabeçalho */
    }
`

// Componente Menu para o estilo da lista de navegação
export const Menu = styled.ul`
    display: flex; /* Usando flexbox para os itens do menu */
    list-style: none; /* Removendo o estilo padrão da lista (marcadores) */
    gap: 3.125rem; /* Espaçamento entre os itens do menu */
`

// Componente Li para cada item da lista de navegação
export const Li = styled.li`
    color: #FFFFFF; /* Cor do texto dos itens do menu */
    font-weight: 600; /* Peso da fonte */
    cursor: pointer; /* Alterando o cursor para indicar que é clicável */
    font-size: 1.75rem; /* Tamanho da fonte */
    position: relative; /* Necessário para posicionar o pseudo-elemento ::after em relação ao item */

    a {
        color: #FFFFFF; /* Cor do link */
        text-decoration: none; /* Removendo a decoração do link (sublinhado) */
    }

    /* Estilo para o pseudo-elemento ::after que cria uma linha abaixo do item de menu ativo */
    &::after {
        content: ''; /* Conteúdo vazio para o pseudo-elemento */
        height: .1875rem; /* Definindo a altura da linha */
        width: ${(props) => (props.$isActive ? '100%' : 0)}; /* A largura da linha é 100% quando o item está ativo, caso contrário, é 0 */
        background-color: #189B20; /* Cor verde para a linha */
        position: absolute; /* Posicionando a linha de forma absoluta em relação ao item */
        bottom: -5px; /* Posicionando a linha abaixo do item */
        left: 50%; /* Centralizando a linha horizontalmente */
        transform: translateX(-50%); /* Ajustando a posição para garantir que a linha esteja centrada */
        transition: width 0.5s ease-in-out; /* Transição suave para a largura da linha */
    }

    /* Estilo para o pseudo-elemento ::after quando o item é hover (passa o mouse por cima) */
    &:hover::after {
        width: 100%; /* A linha fica com largura total quando o item é hover */
    }
`