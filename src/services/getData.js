// Importa a instância do axios configurada para fazer requisições à API
import api from "./api";

// Função para obter os filmes populares
export async function getMovies() {
    // Faz uma requisição GET para buscar filmes populares
    const { data: { results } } = await api.get("/movie/popular");
    return results[0]; // Retorna o primeiro filme da lista de resultados
}

// Função para obter os filmes mais bem avaliados
export async function getTopMovies(){
    // Faz uma requisição GET para buscar filmes mais bem avaliados
    const { data: { results } } = await api.get("/movie/top_rated");
    return results; // Retorna a lista completa de filmes mais bem avaliados
}

// Função para obter as séries mais bem avaliadas
export async function getTopSeries(){
    // Faz uma requisição GET para buscar as séries mais bem avaliadas
    const { data: { results } } = await api.get("/tv/top_rated");
    return results; // Retorna a lista completa de séries mais bem avaliadas
}

// Função para obter os filmes populares
export async function getPopularMovies(){
    // Faz uma requisição GET para buscar filmes populares
    const { data: { results } } = await api.get("/movie/popular");
    return results; // Retorna a lista completa de filmes populares
}

// Função para obter as séries populares
export async function getPopularSeries(){
    // Faz uma requisição GET para buscar séries populares
    const { data: { results } } = await api.get("/tv/popular");
    return results; // Retorna a lista completa de séries populares
}

// Função para obter as pessoas populares (atores, diretores, etc.)
export async function getPersonPopular(){
    // Faz uma requisição GET para buscar as pessoas populares
    const { data: { results } } = await api.get("/person/popular");
    return results; // Retorna a lista completa de pessoas populares
}

// Função para buscar o trailer de um filme pelo seu id
export async function getMovieVideo(movieId){
    // Faz uma requisição GET para buscar os vídeos (trailers) de um filme específico
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`);
    return results || []; // Retorna os resultados ou um array vazio se não houver vídeos
}

// Função para buscar os créditos (atores) de um filme pelo seu id
export async function getMovieCredits(movieId){
    // Faz uma requisição GET para buscar os créditos (elenco) de um filme específico
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`);
    return cast; // Retorna a lista de atores (cast) do filme
}

// Função para buscar filmes semelhantes a um filme pelo seu id
export async function getMovieSimilar(movieId){
    // Faz uma requisição GET para buscar filmes semelhantes a um filme específico
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`);
    return results; // Retorna a lista de filmes semelhantes
}

// Função para buscar informações de um filme pelo seu id
export async function getMovieById(movieId){
    // Faz uma requisição GET para buscar detalhes de um filme específico
    const { data } = await api.get(`/movie/${movieId}`);
    return data; // Retorna os detalhes completos do filme
}

// Função para buscar filmes que estão por vir (em breve)
export async function getUpcomingMovies(){
    // Faz uma requisição GET para buscar filmes que estão prestes a ser lançados
    const { data: { results } } = await api.get("/movie/upcoming");
    return results; // Retorna a lista de filmes que estão por vir
}

// Função para buscar filmes que estão em exibição nos cinemas
export async function getMovieNowPlaying(){
    // Faz uma requisição GET para buscar filmes que estão em exibição
    const { data: { results } } = await api.get("/movie/now_playing");
    return results; // Retorna a lista de filmes em exibição
}

// Função para buscar séries que estão sendo exibidas hoje
export async function getSeriesToday(){
    // Faz uma requisição GET para buscar séries que estão sendo exibidas hoje
    const { data: { results } } = await api.get("/tv/airing_today");
    return results; // Retorna a lista de séries exibidas hoje
}

// Função para buscar séries que estão no ar atualmente
export async function getSeriesNext(){
    // Faz uma requisição GET para buscar séries que estão atualmente no ar
    const { data: { results } } = await api.get("/tv/on_the_air");
    return results; // Retorna a lista de séries que estão no ar atualmente
}