// Importa o styled-components para criar componentes de estilo
import styled from "styled-components";

// Define o estilo para o Container, que é o container principal do layout
export const Container = styled.div`
    display: flex;  // Usa o modelo de layout Flexbox para organizar os filhos
    flex-direction: column;  // Organiza os filhos de forma vertical (coluna)
    z-index: 99;  // Define a sobreposição do container com outros elementos, com valor alto
`

// Define o estilo para o Info, que contém o título (h1)
export const Info = styled.div`
    display: flex;  // Usa o modelo de layout Flexbox para organizar os filhos
    flex-direction: column;  // Organiza os filhos de forma vertical (coluna)

    h1 {  // Estilo específico para o título h1 dentro do Info
        color: #FFFFFF;  // Cor do texto do título em branco
        font-size: 3.125rem;  // Tamanho da fonte do título
        text-align: center;  // Alinha o texto do título no centro
        margin-top: 6.25rem;  // Margem superior de 6.25rem para afastar do topo da tela
    }
`