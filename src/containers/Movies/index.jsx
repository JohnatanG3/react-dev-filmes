import { useState, useEffect } from "react";
import Slider from "../../components/Slider";
import { getMovieNowPlaying, getPopularMovies, getTopMovies, getUpcomingMovies } from "../../services/getData";
import { Container, Info } from "./styles";

function Movie() {
    const [topMovies, setTopMovies] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [upcomingMovie, setUpcomingMovie] = useState();
    const [movieNowPlaying, setMovieNowPlaying] = useState();
    const [movie, setMovie] = useState();

    useEffect( () =>{
            async function getAllData(){
                Promise.all([
                    getTopMovies(),
                    getPopularMovies(),
                    getUpcomingMovies(),
                    getMovieNowPlaying(),
                ]).then(([topMovies, popularMovies, upcomingMovie, movieNowPlaying ]) => {
                    setTopMovies(topMovies);
                    setPopularMovies(popularMovies);
                    setUpcomingMovie(upcomingMovie);
                    setMovieNowPlaying(movieNowPlaying);
                }).catch(error => console.log(error))
            }
    
            getAllData();
        }, [])

    return(
        <>
            {}
            <Container>
                <Info>
                    <h1>FILMES</h1>
                </Info>
            </Container>
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {popularMovies && <Slider info={popularMovies} title={'Filmes Populares'} />}
            {upcomingMovie && <Slider info={upcomingMovie} title={'Em Breve'} />}
            {movieNowPlaying && <Slider info={movieNowPlaying} title={'Filmes em Cartaz no Cinema'} />}
        </>
    )
}

export default Movie