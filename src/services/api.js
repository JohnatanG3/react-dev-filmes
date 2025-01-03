// Importa a biblioteca axios para fazer requisições HTTP
import axios from "axios";

// Cria uma instância personalizada do axios para configurar a URL base e os parâmetros padrão
const api = axios.create({
    // Define a URL base para todas as requisições feitas com esta instância do axios
    baseURL: "https://api.themoviedb.org/3",
    // Define parâmetros padrão para todas as requisições, como chave da API e idioma
    params: {
        api_key: "a15e5d3036beb6490b4bdafb921f9593", // Chave de API para autenticação nas requisições
        language: "pt-BR", // Define o idioma das respostas como português do Brasil
        pages: 1 // Define o número da página a ser retornada nas respostas
    }
})

// Exporta a instância do axios para que possa ser utilizada em outros arquivos
export default api;