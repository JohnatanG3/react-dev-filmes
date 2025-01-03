// Importação da biblioteca 'styled-components' para criar componentes estilizados
import styled from "styled-components";

// Definição do estilo para o título da seção de créditos
export const Title = styled.h4`
    color: #FFFFFF;                // Cor do texto (branco)
    font-size: 1.75rem;            // Tamanho da fonte
    font-weight: 700;              // Peso da fonte (negrito)
    margin-top: .9375rem;          // Margem superior para afastar o título dos itens acima
`

// Definição do estilo para o container principal que organiza os itens de créditos
export const Container = styled.div`
    display: flex;                // Usando flexbox para disposição dos itens
    margin-top: 1.875rem;         // Margem superior para dar espaço acima do container
    gap: .625rem;                 // Espaço entre os itens dentro do container

    // Estilo para os elementos 'div' dentro do container
    div {
        display: flex;            // Usando flexbox para os elementos dentro de cada 'div'
        flex-direction: column;   // Organiza os itens dentro de cada 'div' em coluna
    }

    // Estilo para as imagens dentro do container
    img {
        height: 12.5rem;           // Define a altura da imagem
        border-radius: 10px;       // Arredonda os cantos da imagem
    }

    // Estilo para os parágrafos dentro do container
    p {
        color: #FFFFFF;            // Cor do texto (branco)
    }
`

// Definição de um container vazio para uso futuro (sem estilos definidos ainda)
export const ContainerMovies = styled.div``;