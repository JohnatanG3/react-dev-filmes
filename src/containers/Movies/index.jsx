// Importa hooks do React e componentes necessários
import { useState, useEffect } from "react";
// Importa o componente Slider e as funções de obtenção de dados
import Slider from "../../components/Slider";
import { getMovieNowPlaying, getPopularMovies, getTopMovies, getUpcomingMovies } from "../../services/getData";
// Importa componentes de estilo para o layout
import { Container, Info } from "./styles";

function Movie() {
    // Declaração de estados para armazenar os filmes
    const [topMovies, setTopMovies] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [upcomingMovie, setUpcomingMovie] = useState();
    const [movieNowPlaying, setMovieNowPlaying] = useState();
    const [movie, setMovie] = useState();

    // Hook useEffect para buscar os dados ao carregar o componente
    useEffect( () =>{
            // Função assíncrona para buscar os dados de todos os filmes
            async function getAllData(){
                // Executa várias requisições simultâneas usando Promise.all
                Promise.all([
                    getTopMovies(),
                    getPopularMovies(),
                    getUpcomingMovies(),
                    getMovieNowPlaying(),
                ]).then(([topMovies, popularMovies, upcomingMovie, movieNowPlaying ]) => {
                    // Atualiza os estados com os dados recebidos
                    setTopMovies(topMovies);
                    setPopularMovies(popularMovies);
                    setUpcomingMovie(upcomingMovie);
                    setMovieNowPlaying(movieNowPlaying);
                }).catch(error => console.log(error)); // Em caso de erro, exibe no console
            }
    
            // Chama a função para buscar os dados
            getAllData();
        }, []); // O array vazio indica que o efeito será executado apenas uma vez após a montagem do componente

    return(
        <>
            {/* Container principal para os filmes */}
            <Container>
                <Info>
                    {/* Título da página de filmes */}
                    <h1>FILMES</h1>
                </Info>
            </Container>

            {/* Renderiza sliders apenas se os dados estiverem disponíveis */}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {popularMovies && <Slider info={popularMovies} title={'Filmes Populares'} />}
            {upcomingMovie && <Slider info={upcomingMovie} title={'Em Breve'} />}
            {movieNowPlaying && <Slider info={movieNowPlaying} title={'Filmes em Cartaz no Cinema'} />}
        </>
    )
}

export default Movie;