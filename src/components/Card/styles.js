// Importação do styled-components para criar componentes estilizados
import styled from "styled-components";

// Definição do componente estilizado 'Continaer' (erro de digitação, deveria ser 'Container')
export const Continaer = styled.div`
    /* Usando flexbox para centralizar e alinhar os itens dentro do contêiner */
    display: flex;
    flex-direction: column;  // Organiza os filhos (img e h3) em uma coluna
    justify-content: center; // Alinha os itens verticalmente no centro
    align-items: center;     // Alinha os itens horizontalmente no centro
    width: 18.75rem;         // Largura fixa do contêiner
    height: 25rem;           // Altura fixa do contêiner (importante para manter a proporção do card)

    /* Estilos aplicados à imagem dentro do contêiner */
    img {
        border-radius: 30px;  // Borda arredondada nas extremidades da imagem
        width: 100%;           // A largura da imagem ocupará 100% do contêiner
        height: 100%;          // A altura da imagem ocupará 100% do contêiner
        object-fit: cover;     // A imagem será redimensionada para cobrir toda a área do contêiner, mantendo sua proporção
        margin-top: .9375rem;  // Espaço superior entre a imagem e o título
    }

    /* Estilos aplicados ao título */
    h3 {
        color: #FFFFFF;         // Cor do texto é branco
        margin-top: .9375rem;    // Espaço superior entre a imagem e o título
        text-align: center;      // Alinha o texto do título ao centro
    }
`