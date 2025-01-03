// Importa o método `createGlobalStyle` do `styled-components` para criar estilos globais
import { createGlobalStyle } from "styled-components";

// Cria um componente de estilo global que será aplicado a toda a aplicação
const GlobalStyles = createGlobalStyle`
    /* Reseta o estilo padrão de todos os elementos */
    * {
        margin: 0; /* Remove as margens padrão */
        padding: 0; /* Remove os preenchimentos padrão */
        box-sizing: border-box; /* Garante que o tamanho dos elementos inclua bordas e preenchimentos */
        outline: none; /* Remove o contorno (outline) ao focar nos elementos */
        text-decoration: none; /* Remove qualquer decoração de texto (como sublinhados em links) */
        font-family: "Montserrat", serif; /* Define a fonte padrão para "Montserrat", se não disponível, usa uma fonte serifada */
    }

    /* Estilos específicos para o corpo da página */
    body {
        background-color: #000000; /* Define o fundo da página como preto */
    }
`;

// Exporta os estilos globais para que possam ser usados em outros componentes
export default GlobalStyles;